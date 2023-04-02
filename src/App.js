import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/HomePage";
import Login from "./components/Account/Login/Login";
import Logout from "./components/Account/Logout/Logout";

import MyAccount from "./components/myAccount/MyAccount";

import { AuthProvider } from "./context/AuthContext";

import "./style.css";
import RegistrationForm from "./components/Account/Register/RegistrationForm";
import DetailedItem from "./components/Property/DetailedItem/DetailedItem";
import AddProperty from "./components/myAccount/AddProperty/AddProperty";
import MyInformation from "./components/myAccount/MyInformation/MyInformation";
import MyProperties from "./components/myAccount/MyInformation/MyProperties";
import PropertyList from "./components/Property/PropertyList/PropertyList";
import { RouteGuard } from "./components/Routes/RouterGuard";

import ScrollToTop from "./components/Routes/ScrollToTop";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/properties" element={<PropertyList />} />
        <Route path="/properties/:propertyId" element={<DetailedItem />} />
        <Route path=":propertyId/preview" element={<DetailedItem />} />
        <Route element={<RouteGuard />}>
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/my-account/add-property" element={<AddProperty />} />
          <Route
            path="/my-account/my-information"
            element={<MyInformation />}
          />
          <Route path="/my-account/my-properties" element={<MyProperties />} />
        </Route>

        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <ScrollToTop />
    </AuthProvider>
  );
}

export default App;
