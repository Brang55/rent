import { useEffect, useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

import { db, storage } from "../../../config/firebase";
import styles from "./AddProperty.module.css";
import AccountMenu from "../AccountMenu/AccountMenu";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../context/AuthContext";
import { useForm } from "../../../hooks/useForm";
import { validateAddProperty } from "./ValidateAddProperty";

function AddProperty() {
  const { userId } = useAuthContext();
  const accLocation = useLocation();

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const { values, changeHandler } = useForm(
    {
      name: "",
      address: "",
      square: "",
      city: "",
      roomType: "",
      price: "",
      description: "",
    },
    validateAddProperty
  );

  const [images, setImages] = useState([]);
  const [urls, setUrls] = useState([]);
  const [per, setPer] = useState(null);

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
    const errors = validateAddProperty(values);
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

  return (
    <>
      {accLocation.pathname === "/my-account" ? "" : <Header />}
      <main>
        {accLocation.pathname === "/my-account" ? "" : <AccountMenu />}
        <section className={styles.addProperty}>
          <div className="container">
            <form
              className={styles.addPropertyForm}
              onSubmit={addPropertySubmit}
            >
              <h2 className={styles.addPropertyHeading}>Add New Property</h2>
              <div className={styles.addPropInput}>
                <label htmlFor="name">
                  Name<span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  value={values.name}
                  name="name"
                  onChange={changeHandler}
                />
                {errors.name && (
                  <span className={styles.invalid}>{errors.name}</span>
                )}
              </div>
              <div className={styles.addPropInput}>
                <label htmlFor="address">
                  Address<span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  value={values.address}
                  name="address"
                  onChange={changeHandler}
                />
                {errors.address && (
                  <span className={styles.invalid}>{errors.address}</span>
                )}
              </div>
              <div className={styles.addPropInput}>
                <label htmlFor="square">
                  Square<span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="square"
                  placeholder="Enter Square"
                  value={values.square}
                  name="square"
                  onChange={changeHandler}
                />
                {errors.square && (
                  <span className={styles.invalid}>{errors.square}</span>
                )}
              </div>
              <div className={styles.addPropInput}>
                <label htmlFor="city">
                  City<span className={styles.required}>*</span>
                </label>
                <select
                  name="city"
                  id="city"
                  value={values.city}
                  onChange={changeHandler}
                >
                  <option value="select" selected="selected">
                    ----
                  </option>
                  <option value="sofia">Sofia</option>
                  <option value="plovdiv">Plovdiv</option>
                  <option value="varna">Varna</option>
                  <option value="burgas">Burgas</option>
                </select>
                {errors.city && (
                  <span className={styles.invalid}>{errors.city}</span>
                )}
              </div>
              <div className={styles.addPropInput}>
                <label htmlFor="room">
                  Room Type<span className={styles.required}>*</span>
                </label>
                <select
                  name="roomType"
                  id="room"
                  value={values.roomType}
                  onChange={changeHandler}
                >
                  <option value="select" selected="selected">
                    ----
                  </option>
                  <option value="private-room">Private Room</option>
                  <option value="apartment">Apartment</option>
                  <option value="house">House</option>
                </select>
                {errors.roomType && (
                  <span className={styles.invalid}>{errors.roomType}</span>
                )}
              </div>
              <div className={styles.addPropInput}>
                <label htmlFor="price">
                  Price<span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="price"
                  placeholder="Enter Price"
                  value={values.price}
                  name="price"
                  onChange={changeHandler}
                />
                {errors.price && (
                  <span className={styles.invalid}>{errors.price}</span>
                )}
              </div>
              <div className={styles.description}>
                <label htmlFor="description">
                  Description<span className={styles.required}>*</span>
                </label>
                <textarea
                  id="description"
                  placeholder="Enter Description"
                  value={values.description}
                  name="description"
                  onChange={changeHandler}
                />
                {errors.description && (
                  <span className={styles.invalid}>{errors.description}</span>
                )}
              </div>
              <div>
                <label htmlFor="images" className={styles.dropContainer}>
                  <span className={styles.dropTitle}>
                    Drop files here or
                    <input
                      type="file"
                      id="images"
                      accept="image/*"
                      multiple
                      onChange={handleImageChange}
                    />
                  </span>
                </label>
              </div>
              <div className={styles.btnContainer}>
                <input
                  type="submit"
                  className={styles.newProperty}
                  value="Add New Property"
                  disabled={per !== null && per < 100}
                />
              </div>
            </form>
          </div>
        </section>
      </main>
      {accLocation.pathname === "/my-account" ? "" : <Footer />}
    </>
  );
}

export default AddProperty;
