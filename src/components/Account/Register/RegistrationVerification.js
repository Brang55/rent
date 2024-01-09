import { Link } from "react-router-dom";
import Header from "../../Header/Header";

function RegistrationVerification() {
  return (
    <>
      <Header />
      <p>
        Verification code is sent to your email, please check and follow the
        steps. After verification you can <Link to="/login">login</Link>.
      </p>
    </>
  );
}

export default RegistrationVerification;
