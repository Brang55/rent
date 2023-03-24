import { Navigate, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../../../config/firebase";

function Logout() {
  const navigate = useNavigate();
  signOut(auth)
    .then(() => {
      navigate("/");
      console.log("Signed out successfully");
    })
    .catch((error) => {
      console.log(error);
    });

  return <Navigate to="/" />;
}

export default Logout;
