import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/firebase";

import styles from "./Login.module.css";

function Login() {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    // const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <div className={styles.loginHolder}>
          <input
            type="email"
            placeholder="Email..."
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <input
            type="password"
            placeholder="Password..."
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button className={styles.loginBtn}> Login</button>
          {error && <span>Wrong email or password!</span>}
        </div>
        <span>
          You don't have an account? <Link to="/register">Register Now</Link>
        </span>
      </form>
    </>
  );
}

export default Login;
