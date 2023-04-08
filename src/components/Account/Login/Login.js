import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

import { useForm } from "../../../hooks/useForm";
import { LoginButton } from "../../Buttons/Buttons";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import styles from "./Login.module.css";

function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState(false);

  const { values, changeHandler } = useForm({
    email: "",
    password: "",
  });

  const handleLogin = (e) => {
    e.preventDefault();
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        return user;
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <>
      <Header />
      <main>
        <form onSubmit={handleLogin} className={styles.loginForm}>
          <div className={styles.loginHolder}>
            <h3 className={styles.formHeading}>Login</h3>
            <input
              type="email"
              placeholder="Email..."
              name="email"
              onChange={changeHandler}
              value={values.email}
            />
            <input
              type="password"
              placeholder="Password..."
              name="password"
              onChange={changeHandler}
              value={values.password}
            />
            <LoginButton />
            {error && <span>Wrong email or password!</span>}
          </div>
          <span>
            You don't have an account? <Link to="/register">Register Now</Link>
          </span>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Login;
