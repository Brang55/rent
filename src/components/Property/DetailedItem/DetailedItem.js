import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import CommentList from "../../Comments/CommentList";

import styles from "./DetailedItem.module.css";
import { useAuthContext } from "../../../context/AuthContext";

function DetailedItem(props) {
  const { propertyId } = useParams();

  const { userId, isAuthenticated } = useAuthContext();

  const [detailedPage, setDetailedPage] = useState([]);

  useEffect(() => {
    const getItem = async () => {
      const docRef = doc(db, "properties", propertyId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setDetailedPage((prevState) => [...prevState, data]);
        // console.log("Document data:", docSnap.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    };
    getItem();
  }, [propertyId]);

  return (
    <div>
      <Header />
      <main className="container">
        <section>
          {detailedPage.map((detail) => {
            return (
              <article className={styles.detailedPage} key={propertyId}>
                <ul className={styles.gallery}>
                  {detail.urls.map((url) => {
                    return (
                      <li key={url}>
                        <img src={url} alt="text" />
                      </li>
                    );
                  })}
                </ul>
                <div className={styles.info}>
                  <h3 className={styles.name}>{detail.name}</h3>
                  <h2 className={styles.city}>
                    {detail.city}, {detail.address}{" "}
                  </h2>

                  <span
                    className={styles.square}
                  >{`Square: ${detail.square}`}</span>
                  <span
                    className={styles.type}
                  >{`Type: ${detail.roomType}`}</span>
                  <span
                    className={styles.price}
                  >{`$${detail.price}/Month`}</span>
                </div>

                <p className={styles.description}>{detail.description}</p>
              </article>
            );
          })}
          <CommentList />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default DetailedItem;
