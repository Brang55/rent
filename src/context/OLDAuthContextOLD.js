// import {
//   createContext,
//   useContext,
//   useEffect,
//   useReducer,
//   useState,
// } from "react";
// import { auth } from "../config/firebase";
// import { onAuthStateChanged } from "firebase/auth";

// import AuthReducer from "./AuthReducer";

// const INITIAL_STATE = {
//   currentUser: JSON.parse(localStorage.getItem("user")) || null,
// };

// export const AuthContext = createContext(INITIAL_STATE);

// export const AuthContextProvider = ({ children }) => {
//   const [user, setUser] = useState(null);

//   const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

//   useEffect(() => {
//     onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const uId = user.uid;
//         setUser(user);
//       } else {
//         console.log("User is signed out");
//       }
//     });
//     localStorage.setItem("user", JSON.stringify(state.currentUser));
//   }, [state.currentUser]);

//   return (
//     <AuthContext.Provider value={{ currentUser: state.current, dispatch }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export const useAuthContext = () => {
//   const context = useContext(AuthContext);

//   return context;
// };
