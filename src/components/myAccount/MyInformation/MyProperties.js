import { Link, useLocation } from "react-router-dom";
import { db } from "../../../config/firebase";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import { collection, query, where, getDocs } from "firebase/firestore";

import AccountMenu from "../AccountMenu/AccountMenu";

import classes from "../../Property/PropertyItem/PropertyItem.module.css";
import propClass from "../../Property/PropertyList/PropertyList.module.css";

import Bed from "../../Property/PropertyItem/images/bed.svg";
import Shower from "../../Property/PropertyItem/images/shower.svg";
import Size from "../../Property/PropertyItem/images/size.svg";
import { useEffect, useState } from "react";

import { useAuthContext } from "../../../context/AuthContext";

function MyProperties() {
  const myPropLocation = useLocation();
  const { userId } = useAuthContext();
  const [userProperties, setUserProperties] = useState([]);

  useEffect(() => {
    const getUserProperties = async () => {
      const q = query(
        collection(db, "properties"),
        where("userId", "==", userId)
      );

      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        setUserProperties((prevState) => [...prevState, doc.data()]);
      });
    };

    getUserProperties();
  }, []);

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
                  <li key={x.userId}>
                    <img
                      src={x.urls[0]}
                      alt="test"
                      className={classes.propertyImg}
                    />

                    <Link to={`${x.id}`}>
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
                    <Link to={`/${x.id}/edit`}>Edit</Link>
                    <Link to={`/${x.id}/preview`}>Preview</Link>
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
