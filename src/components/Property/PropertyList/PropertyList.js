import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";

import HomeProperties from "../../HomeProperties/HomeProperties";
import PropertyItem from "../PropertyItem/PropertyItem";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

import styles from "./PropertyList.module.css";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

function PropertyList() {
  const location = useLocation();
  const [data, setData] = useState([]);

  useEffect(() => {
    const loadData = async () => {
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
    };
    loadData();
  }, []);

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
              <h2 className={styles.allProperties}>Properties</h2>
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
