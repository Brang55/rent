import { useLocation } from "react-router-dom";

import Navigation from "../Navigation/Navigation";

import styles from "./Header.module.css";

function Header() {
  let homeLoc = useLocation();
  return (
    <header
      className={
        homeLoc.pathname === "/" ? styles.diffHeader : styles.diffHeader
      }
    >
      <Navigation />
    </header>
  );
}

export default Header;
