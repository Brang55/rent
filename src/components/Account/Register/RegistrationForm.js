import { auth, db } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";

function RegistrationForm(e) {
  const [regDataForm, setRegDataForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegDataForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        regDataForm.email,
        regDataForm.password
      );

      await setDoc(doc(db, "users", res.user.uid), {
        ...regDataForm,
        timeStamp: serverTimestamp(),
      });
    } catch (err) {
      console.log(err);
    }
    // setError("");

    // setRegDataForm("");
  };

  // const validatePassword = () => {
  //   let isValid = true;
  //   if (regDataForm.password !== "" && regDataForm.confirmPassword !== "") {
  //     if (regDataForm.password !== regDataForm.confirmPassword) {
  //       isValid = false;
  //       // setError("Passwords does not match");
  //     }
  //   }
  //   return isValid;
  // };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.formBody}>
        <h3 className={styles.formHeading}>Create Account</h3>
        <div className={styles.addPropInput}>
          <label className={styles.formLabel} htmlFor="firstName">
            First Name:
          </label>
          <input
            className={styles.formInput}
            type="text"
            id="firstName"
            name="firstName"
            placeholder="First Name"
            value={regDataForm.firstName}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.addPropInput}>
          <label className={styles.formLabel} htmlFor="lastName">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            className={styles.formInput}
            placeholder="LastName"
            value={regDataForm.lastName}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.addPropInput}>
          <label className={styles.formLabel} htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={styles.formInput}
            placeholder="Email"
            value={regDataForm.email}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.addPropInput}>
          <label className={styles.formLabel} htmlFor="password">
            Password:
          </label>
          <input
            className={styles.formInput}
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={regDataForm.password}
            onChange={handleInputChange}
          />
        </div>
        <div className={styles.addPropInput}>
          <label className={styles.formLabel} htmlFor="confirmPassword">
            Confirm Password:
          </label>
          <input
            className={styles.formInput}
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={regDataForm.confirmPassword}
            onChange={handleInputChange}
          />
        </div>
      </div>
      <button className={styles.regButton}>Register</button>
    </form>
  );
}
export default RegistrationForm;
