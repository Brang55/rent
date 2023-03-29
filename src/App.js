import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import Home from "./components/Home/HomePage";
import Login from "./components/Account/Login/Login";
import Logout from "./components/Account/Logout/Logout";

import MyAccount from "./components/myAccount/MyAccount";

import { AuthContext } from "./context/AuthContext";

import "./style.css";
import RegistrationForm from "./components/Account/Register/RegistrationForm";
import DetailedItem from "./components/Property/DetailedItem/DetailedItem";
import AddProperty from "./components/myAccount/AddProperty/AddProperty";
import MyInformation from "./components/myAccount/MyInformation";
import MyProperties from "./components/MyProperties";
import PropertyList from "./components/Property/PropertyList/PropertyList";

function App() {
  const { userData } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return userData ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<PropertyList />} />
      <Route path="/properties/:propertyId" element={<DetailedItem />} />
      <Route
        path="/my-account"
        element={
          <RequireAuth>
            <MyAccount />
          </RequireAuth>
        }
      />
      <Route
        path="/my-account/add-property"
        element={
          <RequireAuth>
            <AddProperty />
          </RequireAuth>
        }
      />
      <Route
        path="/my-account/my-information"
        element={
          <RequireAuth>
            <MyInformation />
          </RequireAuth>
        }
      />
      <Route
        path="/my-account/my-properties"
        element={
          <RequireAuth>
            <MyProperties />
          </RequireAuth>
        }
      />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

export default App;
