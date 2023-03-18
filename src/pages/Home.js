import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Main from "../components/Main";
import Map from "../components/Map/Map";

function HomePage() {
  return (
    <>
      <Header />
      <div className="big-container">
        <Map />
      </div>
      <Main />
      <div className="big-container">
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
