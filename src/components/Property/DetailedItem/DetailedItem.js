import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ImageGallery from "react-image-gallery";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../config/firebase";

import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import CommentList from "../../Comments/CommentList";

import styles from "./DetailedItem.module.css";
import "react-image-gallery/styles/css/image-gallery.css";
import { BackButton } from "../../Buttons/Buttons";

function DetailedItem(props) {
  const { propertyId } = useParams();

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

  const images = detailedPage
    .map((detail) => {
      return detail.urls.map((url) => ({
        original: url,
        thumbnail: url,
      }));
    })
    .flat(); // Flatten the array

  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <section className={styles.detailedSection}>
            <BackButton />

            {detailedPage.map((detail) => {
              return (
                <article className={styles.detailedPage} key={propertyId}>
                  <div className={styles.gallery}>
                    <ImageGallery items={images} />
                  </div>
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
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default DetailedItem;
