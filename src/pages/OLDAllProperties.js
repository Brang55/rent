import PropertyList from "../components/Property/PropertyList/PropertyList";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function AllProperties() {
  return (
    <>
      <Header />
      <div className="big-container">
        <PropertyList />
        <Footer />
      </div>
    </>
  );
}

export default AllProperties;
