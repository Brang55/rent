import { Link } from "react-router-dom";

import { GoTo } from "../Buttons/Buttons";

import styles from "./HomeProperties.module.css";

function HomeProperties() {
  return (
    <div className={styles.headingDiv}>
      <h3>
        List Of Properties <hr className={styles.headingUnderline} />
      </h3>
      <Link to="/properties">
        <GoTo />
      </Link>
    </div>
  );
}

export default HomeProperties;
