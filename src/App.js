import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import Home from "./pages/Home";
import AllProperties from "./pages/AllProperties";
import MyAccount from "./pages/MyAccount";
import Login from "./components/Account/Login/Login";
import Logout from "./components/Account/Logout/Logout";

import { AuthContext } from "./context/AuthContext";

import "./style.css";
import RegistrationForm from "./components/Account/Register/RegistrationForm";
import DetailedItem from "./components/Property/DetailedItem/DetailedItem";

function App() {
  const { userData } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return userData ? children : <Navigate to="/login" />;
  };

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<AllProperties />} />
      <Route path="/properties/:propertyId" element={<DetailedItem />} />
      <Route
        path="/my-account"
        element={
          <RequireAuth>
            <MyAccount />
          </RequireAuth>
        }
      />
      <Route path="/register" element={<RegistrationForm />} />
      <Route path="/logout" element={<Logout />} />
    </Routes>
  );
}

export default App;
