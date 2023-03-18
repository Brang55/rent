import { NavLink } from "react-router-dom";

import styles from "./Navigation.module.css";

import Logo from "./images/logo.png";

function Navigation() {
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
        <li>
          <NavLink to="/my-account">My Account</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
