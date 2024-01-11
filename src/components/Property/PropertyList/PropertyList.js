import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import {
  collection,
  getDocs,
  query,
  where,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../../config/firebase";

import Header from "../../Header/Header";
import HomeProperties from "../../HomeProperties/HomeProperties";
import PropertyItem from "../PropertyItem/PropertyItem";
import Footer from "../../Footer/Footer";

import styles from "./PropertyList.module.css";

function PropertyList() {
  const location = useLocation();
  console.log(location);
  const [data, setData] = useState([]);
  const [pageName, setPageName] = useState("");

  useEffect(() => {
    const getData = async () => {
      let newData = [];

      const q = await query(
        collection(db, "properties"),
        where("deal", "==", "Roommate")
      );
      const q2 = await query(
        collection(db, "properties"),
        where("deal", "==", "For Sale")
      );
      const q3 = await query(
        collection(db, "properties"),
        where("deal", "==", "For Rent")
      );
      if (location.pathname === "/for-rent") {
        setPageName("Properties For Rent");
        const unsubscribe = onSnapshot(q3, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            newData.push(doc.data());
          });
          setData(newData);
        });
      } else if (location.pathname === "/for-sale") {
        setPageName("Properties For Sale");
        const unsubscribe = onSnapshot(q2, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            newData.push(doc.data());
          });
          setData(newData);
        });
      } else if (location.pathname === "/roommate") {
        setPageName("Find Roommate");
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
          querySnapshot.forEach((doc) => {
            newData.push(doc.data());
          });
          setData(newData);
        });
      } else if (location.pathname === "/") {
        let list = [];
        try {
          const properties = await getDocs(collection(db, "properties"));
          properties.forEach((property) => {
            list.push({ id: property.id, ...property.data() });
          });
          setData(list);
        } catch (err) {
          console.log(err);
        }
      } else {
        return;
      }
    };
    getData();
  }, [location.pathname]);

  return (
    <>
      {location.pathname === "/my-account/my-properties" ||
      location.pathname === "/" ? null : (
        <Header />
      )}
      <main>
        <section className={styles.properties}>
          <div className="container">
            {location.pathname === "/" ? (
              <HomeProperties />
            ) : (
              <h2 className={styles.allProperties}>{pageName}</h2>
            )}
            {location.pathname === "/my-account/my-properties" ||
            location.pathname === "/" ? null : (
              <form className={styles.filterForm}>
                <select name="city" id="city" className={styles.filter}>
                  <option value="sofia">Sofia</option>
                  <option value="plovdiv">Plovdiv</option>
                  <option value="varna">Varna</option>
                  <option value="burgas">Burgas</option>
                </select>
                <select
                  name="propertyType"
                  id="propertyType"
                  className={styles.filter}
                >
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="room">Room</option>
                </select>
              </form>
            )}
            <ul className={styles.propertyItem}>
              {data.map((property) => (
                <PropertyItem key={property.id} {...property} />
              ))}
            </ul>
          </div>
        </section>
      </main>
      {location.pathname === "/my-account/my-properties" ||
      location.pathname === "/" ? null : (
        <Footer />
      )}
    </>
  );
}

export default PropertyList;
