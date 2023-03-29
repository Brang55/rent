import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import styles from "./Navigation.module.css";

import Logo from "./images/logo.png";

function Navigation() {
  const { userData } = useContext(AuthContext);

  const userId = userData.uid;

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
          <NavLink to="/properties">Properties</NavLink>
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
            <NavLink to="/login">Login</NavLink>{" "}
          </li>
        ) : (
          ""
        )}
        {userId ? (
          <li>
            {" "}
            <NavLink to="/logout">Logout</NavLink>{" "}
          </li>
        ) : (
          ""
        )}
        {!userId ? (
          <li>
            {" "}
            <NavLink to="/register">Register</NavLink>{" "}
          </li>
        ) : (
          ""
        )}
      </ul>
    </nav>
  );
}

export default Navigation;
