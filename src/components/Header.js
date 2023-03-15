import styles from "./Header.module.css";

import Navigation from "./Navigation";
import { useLocation } from "react-router-dom";

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
