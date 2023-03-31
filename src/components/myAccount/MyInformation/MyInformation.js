import styles from "../AddProperty/AddProperty.module.css";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";
import { useEffect, useState } from "react";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import AccountMenu from "../AccountMenu/AccountMenu";
import { useAuthContext } from "../../../context/AuthContext";
import { useLocation } from "react-router-dom";

function MyInformation() {
  const myInfoLocation = useLocation();
  const [userData, setUser] = useState({});

  console.log(userData);

  const { userId } = useAuthContext();

  useEffect(() => {
    const getUser = async () => {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setUser(docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };

    getUser();
  }, [userId]);

  return (
    <>
      {myInfoLocation.pathname === "/my-account" ? "" : <Header />}
      <main>
        <section className={styles.properties}>
          <div className="container">
            <AccountMenu />
            <form className={styles.addPropertyForm}>
              <h2 className={styles.addPropertyHeading}>
                Personal Information
              </h2>
              <div className={styles.addPropInput}>
                <label htmlFor="name">First Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter Name"
                  defaultValue={userData.firstName}
                  name="name"
                  readOnly
                />
              </div>
              <div className={styles.addPropInput}>
                <label htmlFor="last">Last Name</label>
                <input
                  type="text"
                  id="last"
                  placeholder="Enter Name"
                  defaultValue={userData.lastName}
                  name="name"
                  readOnly
                />
              </div>
              <div className={styles.addPropInput}>
                <label htmlFor="address">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Address"
                  defaultValue={userData.email}
                  name="address"
                  readOnly
                />
              </div>
              <div className={styles.addPropInput}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  placeholder="Enter Address"
                  defaultValue={userData.address}
                  name="address"
                  readOnly
                />
              </div>
              <div className={styles.description}>
                <label htmlFor="description">About Me</label>
                <textarea
                  id="description"
                  placeholder="About Me"
                  name="description"
                  readOnly
                />
              </div>
            </form>
          </div>
        </section>
      </main>
      {myInfoLocation.pathname === "/my-account" ? null : <Footer />}
    </>
  );
}

export default MyInformation;
