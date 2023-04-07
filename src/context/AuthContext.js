import { useEffect, useState, createContext, useContext } from "react";

import { auth } from "../config/firebase";
import { onAuthStateChanged } from "firebase/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      if (data) {
        setUserData(data);
      } else {
        setUserData({});
        console.log("User is signed out");
      }
    });
  }, []);

  const contextValues = {
    userId: userData.uid,
    isAuthenticated: userData.accessToken,
    email: userData.email,
  };

  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);

  return context;
};
