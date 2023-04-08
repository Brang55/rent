import { useLocation } from "react-router-dom";

import Header from "../Header/Header";
import Map from "../Map/Map";
import Info from "../Info/Info";
import PropertyList from "../Property/PropertyList/PropertyList";
import Roommate from "../Roommate/Roommate";
import Footer from "../Footer/Footer";

function HomePage() {
  const mainLoc = useLocation();
  return (
    <>
      <Header />
      <div className="big-container">
        <Map />
      </div>
      <main>
        {mainLoc.pathname === "/" && <Info />}
        {mainLoc.pathname === "/" || mainLoc.pathname === "/properties" ? (
          <PropertyList />
        ) : null}
        {mainLoc.pathname === "/" && <Roommate />}
      </main>
      <div className="big-container">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
