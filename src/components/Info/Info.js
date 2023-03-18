import styles from "./Info.module.css";

import InfoImg from "./images/living-cost.png";
import Dollar from "./images/money-dollar-circle.png";
import Comm from "./images/community-line.png";
import Stack from "./images/stack-line.png";
import Plant from "./images/plant-line.png";
import Shield from "./images/shield-star-line.png";
import Eye from "./images/eye-line.png";

function Info() {
  return (
    <section className={styles.info}>
      <div className="container">
        <div className={styles.infoHeadingHolder}>
          <h3>Minim Living Cost Takes Care Of Everything</h3>
          <hr className={styles.headingUnderline} />
        </div>
        <div className={styles.infoImageHolder}>
          <img src={InfoImg} alt="" />
        </div>
        <ul className={styles.infoDetailsHolder}>
          <li>
            <span className={styles.iconHolder}>
              <img src={Dollar} alt="" />
            </span>
            <p>Pay As Little As Possible!</p>
          </li>
          <li>
            <span className={styles.iconHolder}>
              <img src={Comm} alt="" />
            </span>
            <p>Enjoy wisdom of community!</p>
          </li>
          <li>
            <span className={styles.iconHolder}>
              <img src={Stack} alt="" />
            </span>
            <p>Let's somebody else take care of Landlord!</p>
          </li>
          <li>
            <span className={styles.iconHolder}>
              <img src={Plant} alt="" />
            </span>
            <p>Enjoy peaceful Environment!</p>
          </li>
          <li>
            <span className={styles.iconHolder}>
              <img src={Shield} alt="" />
            </span>
            <p>Stay Safe! Save Money!</p>
          </li>
          <li>
            <span className={styles.iconHolder}>
              <img src={Eye} alt="" />
            </span>
            <p>Pay for what you use !</p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Info;
