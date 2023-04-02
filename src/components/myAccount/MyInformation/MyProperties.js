import { Link, useLocation } from "react-router-dom";
import { db } from "../../../config/firebase";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import { collection, query, where, getDocs } from "firebase/firestore";

import AccountMenu from "../AccountMenu/AccountMenu";

import styles from "./MyInformation.module.css";

import classes from "../../Property/PropertyItem/PropertyItem.module.css";
import propClass from "../../Property/PropertyList/PropertyList.module.css";

import Bed from "../../Property/PropertyItem/images/bed.svg";
import Shower from "../../Property/PropertyItem/images/shower.svg";
import Size from "../../Property/PropertyItem/images/size.svg";
import { useEffect, useState } from "react";

import { useAuthContext } from "../../../context/AuthContext";

function MyProperties() {
  // const { propertyId } = useParams();

  const myPropLocation = useLocation();
  const { userId } = useAuthContext();
  const [userProperties, setUserProperties] = useState([]);
  console.log(userProperties);

  useEffect(() => {
    const getUserProperties = async () => {
      const q = query(
        collection(db, "properties"),
        where("userId", "==", userId)
      );
      const list = [];
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
        // doc.data() is never undefined for query doc snapshots
        setUserProperties(list);
      });
    };

    getUserProperties();
  }, [userId]);

  return (
    <>
      {myPropLocation.pathname === "/my-account" ? "" : <Header />}
      <main>
        {myPropLocation.pathname === "/my-account" ? "" : <AccountMenu />}
        <section className={propClass.properties}>
          <div className="container">
            <ul className={propClass.propertyItem}>
              {userProperties.map((x) => {
                return (
                  <li key={x.id}>
                    <img
                      src={x.urls[0]}
                      alt="test"
                      className={classes.propertyImg}
                    />

                    <Link to={`/${x.id}/preview`}>
                      <h2 className={classes.propertyName}>
                        {x.name}, {x.address}
                      </h2>
                    </Link>
                    <span className={classes.propertyType}>
                      {x.roomType}, square: {x.square}
                    </span>
                    <span
                      className={classes.propertyPrice}
                    >{`$${x.price}/Month`}</span>
                    <div className={classes.roomInfo}>
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
                    <ul className={styles.buttonHolder}>
                      <li>
                        <Link to={`${x.userId}/edit`}>
                          <span className={styles.propertyButton}>Edit</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={`/${x.id}/preview`}>
                          <span className={styles.propertyButton}>Preview</span>
                        </Link>
                      </li>
                      <li>
                        <Link to={`${x.userId}/preview`}>
                          <span className={styles.propertyButton}>Delete</span>
                        </Link>
                      </li>
                    </ul>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      {myPropLocation.pathname === "/my-account" ? "" : <Footer />}
    </>
  );
}

export default MyProperties;
