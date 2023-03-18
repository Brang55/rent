import styles from "./AccountMenu.module.css";
import AddProperty from "./AddProperty/AddProperty";
import { useState } from "react";
import MyInformation from "./MyInformation";
import MyProperties from "../MyProperties";

function AccountMenu(props) {
  const [show, setShow] = useState(1);

  function showHandler(index) {
    setShow(index);
  }
  return (
    <div className="container">
      <ul className={styles.personalMenu}>
        <li>
          <button
            onClick={() => showHandler(1)}
            className={`${show === 1 && styles.activeItem} ${
              styles.personalMenuItem
            }`}
          >
            Add New Property
          </button>
        </li>
        <li>
          <button
            onClick={() => showHandler(2)}
            className={`${show === 2 && styles.activeItem} ${
              styles.personalMenuItem
            }`}
          >
            My Information
          </button>
        </li>
        <li>
          <button
            onClick={() => showHandler(3)}
            className={`${show === 3 && styles.activeItem} ${
              styles.personalMenuItem
            }`}
          >
            Settings
          </button>
        </li>
        <li>
          <button
            onClick={() => showHandler(4)}
            className={`${show === 4 && styles.activeItem} ${
              styles.personalMenuItem
            }`}
          >
            My Properties
          </button>
        </li>
      </ul>
      <div className={styles.settingHolder}>
        {show === 1 && <AddProperty />}
        {show === 2 && <MyInformation />}
        {show === 4 && <MyProperties />}
      </div>
    </div>
  );
}

export default AccountMenu;
