import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import PropertyList from "./Property/PropertyList/PropertyList";
import AccountMenu from "./myAccount/AccountMenu";

function MyProperties() {
  return (
    <>
      <Header />
      <main>
        <AccountMenu />
        <PropertyList />
      </main>
      <Footer />
    </>
  );
}

export default MyProperties;
