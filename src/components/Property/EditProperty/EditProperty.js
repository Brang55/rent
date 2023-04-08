import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

import { validateAddProperty } from "../../myAccount/AddProperty/ValidateAddProperty";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import styles from "../../myAccount/AddProperty/AddProperty.module.css";

function EditProperty() {
  const { propertyId } = useParams();
  const navigate = useNavigate();

  const [editProperty, setEditProperty] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const getProperty = async () => {
      const docRef = doc(db, "properties", propertyId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setEditProperty(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    getProperty();
  }, [propertyId]);

  const onChangehandler = (e) => {
    const { name, value } = e.target;
    setEditProperty((prevData) => ({ ...prevData, [name]: value }));
  };

  const onEditSubmit = async (e) => {
    e.preventDefault();
    const errors = validateAddProperty(editProperty);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      const propertyRef = doc(db, "properties", propertyId);
      await updateDoc(propertyRef, {
        ...editProperty,
      });
    }
  };

  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <Header />
      <main>
        <section>
          <div className="container">
            <form className={styles.addPropertyForm} onSubmit={onEditSubmit}>
              <h2 className={styles.addPropertyHeading}>Edit Property</h2>
              <div className={styles.addPropInput}>
                <label htmlFor="name">
                  Name<span className={styles.required}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  name="name"
                  value={editProperty.name}
                  onChange={onChangehandler}
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
                  name="address"
                  value={editProperty.address}
                  onChange={onChangehandler}
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
                  name="square"
                  value={editProperty.square}
                  onChange={onChangehandler}
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
                  value={editProperty.city}
                  onChange={onChangehandler}
                >
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
                  value={editProperty.roomType}
                  onChange={onChangehandler}
                >
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
                  name="price"
                  value={editProperty.price}
                  onChange={onChangehandler}
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
                  name="description"
                  value={editProperty.description}
                  onChange={onChangehandler}
                />
                {errors.description && (
                  <span className={styles.invalid}>{errors.description}</span>
                )}
              </div>
              <div>
                <label htmlFor="images" className={styles.dropContainer}>
                  <span className={styles.dropTitle}>
                    Drop files here or
                    <input type="file" id="images" accept="image/*" multiple />
                  </span>
                </label>
              </div>
              <div className={styles.btnContainer}>
                <button
                  className={`${styles.newProperty} ${styles.editProperty}`}
                  onClick={goBack}
                >
                  Cancel
                </button>
                <input
                  type="submit"
                  className={`${styles.newProperty} ${styles.editProperty}`}
                  value="Save"
                />
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default EditProperty;
