import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db, storage } from "../../../config/firebase";

import { useAuthContext } from "../../../context/AuthContext";
import { useForm } from "../../../hooks/useForm";

import Header from "../../Header/Header";
import AccountMenu from "../AccountMenu/AccountMenu";
import Footer from "../../Footer/Footer";

import styles from "./AddProperty.module.css";
import PropertyForm from "../PropertyForm/PropertyForm";

function AddProperty() {
  const { userId } = useAuthContext();
  const { pathname } = useLocation();
  const { propertyId } = useParams();

  const navigate = useNavigate();

  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [per, setPer] = useState(null);
  const [errors, setErrors] = useState({});
  const [edit, setEdit] = useState(false);

  const { values, setValues, changeHandler } = useForm({
    name: "",
    address: "",
    square: "",
    city: "",
    roomType: "",
    price: "",
    description: "",
  });

  const editPath = `/my-account/my-properties/${propertyId}/edit`;

  useEffect(() => {
    if (pathname === editPath) {
      setEdit(true);
    } else setEdit(false);

    return () => {
      setValues({
        name: "",
        address: "",
        square: "",
        city: "",
        roomType: "",
        price: "",
        description: "",
      });
    };
  }, [propertyId, pathname, editPath, setValues]);

  useEffect(() => {
    if (edit) {
      const getProperty = async () => {
        const docRef = doc(db, "properties", propertyId);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setValues(docSnap.data());
        } else {
          console.log("No such document!");
        }
      };

      getProperty();
    }
  }, [propertyId, edit, setValues]);

  const handleImageChange = (e) => {
    for (let i = 0; i < e.target.files.length; i++) {
      const newImage = e.target.files[i];
      newImage["id"] = Math.random();
      setImages((prevState) => [...prevState, newImage]);
    }
  };

  useEffect(() => {
    const uploadFile = () => {
      images.map((image) => {
        const storageRef = ref(storage, `images/${image.name}`);

        const metadata = {
          contentType: "image/jpeg",
        };

        const uploadTask = uploadBytesResumable(storageRef, image, metadata);
        uploadTask.on(
          "state_changed",
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            setPer(progress);
            console.log("Upload is " + progress + "% done");
            switch (snapshot.state) {
              case "paused":
                console.log("Upload is paused");
                break;
              case "running":
                console.log("Upload is running");
                break;
              default:
                break;
            }
          },
          (error) => {
            console.log(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              setUrls((prevState) => [...prevState, downloadURL]);
            });
          }
        );
        return image;
      });
    };
    if (images.length > 0) uploadFile();
  }, [images, setUrls]);

  const addPropertySubmit = async (e) => {
    e.preventDefault();
    // const errors = validateAddProperty(values);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        await addDoc(collection(db, "properties"), {
          ...values,
          urls,
          userId: userId,
          timeStamp: serverTimestamp(),
        });
        navigate("/my-account/my-properties");
      } catch (err) {
        console.log(err);
      }
    }
  };

  const onEditSubmit = async (e) => {
    e.preventDefault();
    // const errors = validateAddProperty(editProperty);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      const propertyRef = doc(db, "properties", propertyId);
      await updateDoc(propertyRef, {
        ...values,
      });
      navigate(-1);
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      {pathname === "/my-account" ? "" : <Header />}
      <main>
        {pathname === "/my-account" ? "" : <AccountMenu />}
        <section className={styles.addProperty}>
          <div className="container">
            <PropertyForm
              {...values}
              per={per}
              formOnChangleHandler={changeHandler}
              handleImageChange={handleImageChange}
              edit={edit}
              addPropertySubmit={addPropertySubmit}
              onEditSubmit={onEditSubmit}
              goBack={goBack}
              errors={errors}
              urls={urls}
            />
          </div>
        </section>
      </main>
      {pathname === "/my-account" ? "" : <Footer />}
    </>
  );
}

export default AddProperty;
