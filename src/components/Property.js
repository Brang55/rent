import styles from "./Property.module.css";

import PropertyImg from "../images/property1.png";
import Bed from "../images/bed.svg";
import Shower from "../images/shower.svg";
import Size from "../images/size.svg";

function Property() {
  return (
    <>
      <li>
        <a href="http://localhost:3000/">
          <img src={PropertyImg} alt="" />
        </a>
        <h2 className={styles.propertyName}>
          <a href="http://localhost:3000/">
            2578 Folsom street, san francisco, CA, 94110
          </a>
        </h2>
        <span className={styles.propertyType}>Private Room</span>
        <span className={styles.propertyPrice}>$1200/Month</span>
        <div className={styles.roomInfo}>
          <span>
            <img src={Bed} alt="" />4
          </span>
          <span>
            <img src={Shower} alt="" />2
          </span>
          <span>
            <img src={Size} alt="" />2
          </span>
        </div>
      </li>
      <li>
        <a href="http://localhost:3000/">
          <img src={PropertyImg} alt="" />
        </a>
        <h2 className={styles.propertyName}>
          <a href="http://localhost:3000/">
            2578 Folsom street, san francisco, CA, 94110
          </a>
        </h2>
        <span className={styles.propertyType}>Private Room</span>
        <span className={styles.propertyPrice}>$1200/Month</span>
        <div className={styles.roomInfo}>
          <span>
            <img src={Bed} alt="" />4
          </span>
          <span>
            <img src={Shower} alt="" />2
          </span>
          <span>
            <img src={Size} alt="" />2
          </span>
        </div>
      </li>
      <li>
        <a href="http://localhost:3000/">
          <img src={PropertyImg} alt="" />
        </a>
        <h2 className={styles.propertyName}>
          <a href="http://localhost:3000/">
            2578 Folsom street, san francisco, CA, 94110
          </a>
        </h2>
        <span className={styles.propertyType}>Private Room</span>
        <span className={styles.propertyPrice}>$1200/Month</span>
        <div className={styles.roomInfo}>
          <span>
            <img src={Bed} alt="" />4
          </span>
          <span>
            <img src={Shower} alt="" />2
          </span>
          <span>
            <img src={Size} alt="" />2
          </span>
        </div>
      </li>
    </>
  );
}

export default Property;
