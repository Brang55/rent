import { auth, db } from "../../../config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";

import { validateRegister } from "./ValidateRegister";

import styles from "./RegistrationForm.module.css";
import { useNavigate } from "react-router-dom";

import { useForm } from "../../../hooks/useForm";
import { useState } from "react";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import { RegisterButton } from "../../Buttons/Buttons";

function RegistrationForm() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { values, changeHandler } = useForm(
    {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      password: "",
      confirmPassword: "",
    },
    validateRegister
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateRegister(values);
    setErrors(errors);
    if (Object.keys(errors).length === 0) {
      try {
        const res = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        await setDoc(doc(db, "users", res.user.uid), {
          ...values,
          timeStamp: serverTimestamp(),
        });
        navigate("/");
        setIsSubmitting(true);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <>
      <Header />
      <main>
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
                value={values.firstName}
                onChange={changeHandler}
              />
              {errors.firstName && (
                <span className={styles.invalid}>{errors.firstName}</span>
              )}
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
                value={values.lastName}
                onChange={changeHandler}
              />
              {errors.lastName && (
                <span className={styles.invalid}>{errors.lastName}</span>
              )}
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
                value={values.email}
                onChange={changeHandler}
              />
              {errors.email && (
                <span className={styles.invalid}>{errors.email}</span>
              )}
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
                value={values.password}
                onChange={changeHandler}
              />
              {errors.password && (
                <span className={styles.invalid}>{errors.password}</span>
              )}
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
                value={values.confirmPassword}
                onChange={changeHandler}
              />
              {errors.confirmPassword && (
                <span className={styles.invalid}>{errors.confirmPassword}</span>
              )}
            </div>
          </div>
          <RegisterButton />
          {/* <button type="submit" className={styles.regButton}>
            Register
          </button> */}
        </form>
      </main>
      <Footer />
    </>
  );
}
export default RegistrationForm;
