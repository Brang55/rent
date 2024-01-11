import { NavLink } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";

import styles from "./Navigation.module.css";
import "../../style.css";

import Logo from "./images/logo.png";

function Navigation() {
  const { userId } = useAuthContext();

  return (
    <nav className={styles.navHeader}>
      <ul>
        <li>
          <img src={Logo} alt="logo" className={styles.logo} />
        </li>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/for-rent">For Rent</NavLink>
        </li>
        <li>
          <NavLink to="/for-sale">For Sale</NavLink>
        </li>
        <li>
          <NavLink to="/roommate">Roommate</NavLink>
        </li>
        {userId ? (
          <li>
            {" "}
            <NavLink to="/my-account">My Account</NavLink>{" "}
          </li>
        ) : (
          ""
        )}
        {!userId ? (
          <li>
            {" "}
            <NavLink to="/login" className={styles.account}>
              Login
            </NavLink>{" "}
          </li>
        ) : (
          ""
        )}
        {userId ? (
          <li>
            {" "}
            <NavLink to="/logout" className={styles.account}>
              Logout
            </NavLink>{" "}
          </li>
        ) : (
          ""
        )}
        {!userId ? (
          <li>
            {" "}
            <NavLink to="/register" className={styles.account}>
              Register
            </NavLink>{" "}
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
