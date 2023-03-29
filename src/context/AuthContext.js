import { useEffect, useState, createContext } from "react";

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

  //   const contextValues = {
  //     userId: userData.uid,
  //   };

  return (
    <AuthContext.Provider value={{ userData }}>{children}</AuthContext.Provider>
  );
};
