import { NavLink } from "react-router-dom";

import { useAuthContext } from "../../context/AuthContext";

import styles from "./Navigation.module.css";

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
