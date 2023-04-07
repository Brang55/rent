import { useNavigate } from "react-router-dom";
import styles from "./Buttons.module.css";

export const GoTo = () => {
  return <span className={styles.btn}>View All Properties</span>;
};

export const BackButton = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };
  return (
    <button className={styles.backBtn} onClick={goBack}>
      Back
    </button>
  );
};

export const LoginButton = () => {
  return <input type="submit" value="Login" className={styles.submitBtn} />;
};

export const RegisterButton = () => {
  return <input type="submit" value="Register" className={styles.submitBtn} />;
};
