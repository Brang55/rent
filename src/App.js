import { Navigate, Route, Routes } from "react-router-dom";
import { useContext } from "react";

import { AuthContextProvider } from "./context/AuthContext";

import Home from "./pages/Home";
import AllProperties from "./pages/AllProperties";
import MyAccount from "./pages/MyAccount";
import Login from "./components/register/Login";
import { AuthContext } from "./context/AuthContext";

import "./style.css";
import RegistrationForm from "./components/register/RegistrationForm";

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to="/login" />;
  };

  // console.log(currentUser);

  return (
    <div>
      <AuthContextProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<AllProperties />} />
          <Route
            path="/my-account"
            element={
              <RequireAuth>
                <MyAccount />
              </RequireAuth>
            }
          />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
