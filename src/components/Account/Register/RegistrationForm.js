import { useNavigate } from "react-router-dom";

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { auth, db } from "../../../config/firebase";

import { useForm } from "../../../hooks/useForm";
import { RegisterButton } from "../../Buttons/Buttons";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import styles from "./RegistrationForm.module.css";

function RegistrationForm() {
  const navigate = useNavigate();

  const { values, changeHandler, errors, onBlurChange } = useForm({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      await setDoc(doc(db, "users", userCredential.user.uid), {
        ...values,
        timeStamp: serverTimestamp(),
      });
      await sendEmailVerification(userCredential.user);
      navigate("/reg-verify");
    } catch (err) {
      console.log(err);
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
                onBlur={onBlurChange}
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
                onBlur={onBlurChange}
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
                onBlur={onBlurChange}
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
                onBlur={onBlurChange}
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
                onBlur={onBlurChange}
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
