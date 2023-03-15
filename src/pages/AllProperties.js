import PropertyList from "../components/PropertyList";
import Header from "../components/Header";
import Footer from "../components/Footer";

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
