import styles from "./Map.module.css";

function Map() {
  return (
    <div className={styles.mapContainer}>
      <div className="container">
        <h1 className={styles.slogan}>
          The Most Affortable Place to Stay In The San Francisco Bay Area
        </h1>
      </div>
    </div>
  );
}

export default Map;
