import styles from "./AddProperty/AddProperty.module.css";
import { doc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../../config/firebase";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AccountMenu from "./AccountMenu";

function MyInformation() {
  const [user, setUser] = useState({});
  const docRef = doc(db, "users", "hciUFjXftlYg9LkgHtx7alTyAW83");

  useEffect(() => {
    onSnapshot(docRef, (doc) => {
      setUser(doc.data(), doc.id);
    });
  }, []);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <AccountMenu />
          <form className={styles.addPropertyForm}>
            <h2 className={styles.addPropertyHeading}>Personal Information</h2>
            <div className={styles.addPropInput}>
              <label htmlFor="name">First Name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter Name"
                defaultValue={user.firstName}
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
                defaultValue={user.lastName}
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
                defaultValue={user.email}
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
                defaultValue={user.address}
                name="address"
                readOnly
              />
            </div>
            <div className={styles.description}>
              <label htmlFor="description">About Me</label>
              <textarea
                id="description"
                placeholder="About Me"
                value={null}
                name="description"
                readOnly
              />
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default MyInformation;
