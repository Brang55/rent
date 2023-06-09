import { Link, useLocation } from "react-router-dom";

import styles from "./AccountMenu.module.css";

function AccountMenu(props) {
  const myAccLocation = useLocation();

  return (
    <div className="container">
      <ul className={styles.personalMenu}>
        <li>
          {myAccLocation.pathname === "/my-account/add-property" ||
          myAccLocation.pathname === "/my-account" ? (
            <span className={styles.activeItem}>Add New Property</span>
          ) : (
            <Link to="/my-account/add-property">
              <span className={styles.personalMenuItem}>Add New Property</span>
            </Link>
          )}
        </li>
        <li>
          {myAccLocation.pathname === "/my-account/my-information" ? (
            <span className={styles.activeItem}>My Information</span>
          ) : (
            <Link to="/my-account/my-information">
              <span className={styles.personalMenuItem}>My Information</span>
            </Link>
          )}
        </li>
        <li>
          {myAccLocation.pathname === "/my-account/my-properties" ? (
            <span className={styles.activeItem}>My Properties</span>
          ) : (
            <Link to="/my-account/my-properties">
              <span className={styles.personalMenuItem}>My Properties</span>
            </Link>
          )}
        </li>
      </ul>
    </div>
  );
}

export default AccountMenu;
