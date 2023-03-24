import { collection, getDocs } from "firebase/firestore";
import { db } from "../../../config/firebase";

import HomeProperties from "../../HomeProperties/HomeProperties";
import PropertyItem from "../PropertyItem/PropertyItem";

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
    <section className={styles.properties}>
      <div className="container">
        {location.pathname === "/" ? (
          <HomeProperties />
        ) : (
          <h2 className={styles.allProperties}>Properties</h2>
        )}
        <ul className={styles.propertyItem}>
          {data.map((property) => (
            <PropertyItem key={property.id} {...property} />
          ))}
        </ul>
      </div>
    </section>
  );
}

export default PropertyList;
