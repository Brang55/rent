import styles from "./Backdrop.module.css";

function Backdrop({ backDropHolder }) {
  return <div className={styles.confirmBg} onClick={backDropHolder}></div>;
}

export default Backdrop;
