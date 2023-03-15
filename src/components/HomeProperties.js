import { useNavigate } from "react-router-dom";

import styles from "./HomeProperties.module.css";

function HomeProperties() {
  const navigate = useNavigate();

  return (
    <div className={styles.headingDiv}>
      <h3>
        List Of Properties <hr className={styles.headingUnderline} />
      </h3>

      <button onClick={() => navigate("properties")} className={styles.viewAll}>
        View All Property
      </button>
    </div>
  );
}

export default HomeProperties;
