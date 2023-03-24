// import { doc, getDoc } from "firebase/firestore";
// import { db } from "../../../config/firebase";

import styles from "./PropertyItem.module.css";

import Bed from "./images/bed.svg";
import Shower from "./images/shower.svg";
import Size from "./images/size.svg";
import { Link } from "react-router-dom";

function Property({
  id,
  name,
  square,
  price,
  roomType,
  city,
  description,
  address,
  urls,
}) {
  //   const getId = async () => {
  //     const list = [];
  //     const docRef = doc(db, "properties", id);
  //     const docSnap = await getDoc(docRef);
  //     if (docSnap.exists()) {
  //       list.push({ id: id, ...docSnap.data() });
  //       setDetailedPage(list);
  //       //   console.log("Document data:", docSnap.data());
  //     } else {
  //       console.log("No such document!");
  //     }
  //   };

  return (
    <li>
      <img src={urls[0]} alt="test" className={styles.propertyImg} />

      <Link to={`${id}`}>
        <h2 className={styles.propertyName}>
          {name}, {address}
        </h2>
      </Link>
      <span className={styles.propertyType}>
        {roomType}, square: {square}
      </span>
      <span className={styles.propertyPrice}>{`$${price}/Month`}</span>
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
  );
}

export default Property;
