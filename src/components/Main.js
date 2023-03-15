import Info from "./Info";
import PropertyList from "./PropertyList";
import Roommate from "./Roommate";

import { useLocation } from "react-router-dom";
import Account from "./myAccount/Account";

import styles from "./Main.module.css";

function Main() {
  const mainLoc = useLocation();

  return (
    <main className={styles.main}>
      {mainLoc.pathname === "/" && <Info />}
      {mainLoc.pathname === "/" || mainLoc.pathname === "/properties" ? (
        <PropertyList />
      ) : null}
      {mainLoc.pathname === "/" && <Roommate />}
      {mainLoc.pathname === "/my-account" && <Account />}
    </main>
  );
}

export default Main;