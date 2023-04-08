import { Link } from "react-router-dom";

import { GoTo } from "../Buttons/Buttons";

import styles from "./Roommate.module.css";

import Flex1 from "./images/flex1.png";
import Flex2 from "./images/flex2.png";
import Flex3 from "./images/flex3.png";
import Flex4 from "./images/flex4.png";

function Roommate() {
  return (
    <section className={styles.roommateSection}>
      <div className="container">
        <ul className={styles.rommateFacts}>
          <li>
            <h4>Flexible Leases</h4>
            <img src={Flex1} alt="" />
          </li>
          <li>
            <h4>7-Day Happiness Guaranteed</h4>
            <img src={Flex2} alt="" />
          </li>
          <li>
            <h4>Monthly House Cleaning</h4>
            <img src={Flex3} alt="" />
          </li>
          <li>
            <h4>Choose Your Own Roommate</h4>
            <img src={Flex4} alt="" />
          </li>
        </ul>
        <div className={styles.roommateInfoHolder}>
          <h3> Flexibility and options to suit your lifestyle.</h3>
          <p>
            You need it? We got it. We make finding your next home easy,
            comfortable, and simple. From our happiness guarantee to our
            selective roommate finder option. We provide you the flexibility
            that you most desire.
          </p>

          <Link to="/properties">
            <GoTo />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Roommate;
