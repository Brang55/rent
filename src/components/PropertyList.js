import HomeProperties from "./HomeProperties";
import Property from "./Property";

import styles from "./PropertyList.module.css";

import { useLocation } from "react-router-dom";

function PropertyList() {
  const location = useLocation();
  return (
    <section className={styles.properties}>
      <div className="container">
        {location.pathname == "/" ? (
          <HomeProperties />
        ) : (
          <h2 className={styles.allProperties}>Properties</h2>
        )}
        <ul className={styles.propertyItem}>
          <Property />
        </ul>
      </div>
    </section>
  );
}

export default PropertyList;
