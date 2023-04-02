import { collection, addDoc, serverTimestamp } from "firebase/firestore";

import { db } from "../../config/firebase";

import { useAuthContext } from "../../context/AuthContext";
import { useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./Comments.module.css";

function Comments() {
  const { propertyId } = useParams();

  const { userId, isAuthenticated } = useAuthContext();

  const [comment, setComment] = useState({
    description: "",
    propertyId: propertyId,
    timeStamp: serverTimestamp(),
  });

  const onChangeComment = (e) => {
    const { name, value } = e.target;
    setComment((prevState) => ({ ...prevState, [name]: value }));
  };

  const onCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "comments"), {
        ...comment,
        userId: userId,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {!!isAuthenticated && (
        <form className={styles.commentForm} onSubmit={onCommentSubmit}>
          <label>
            <textarea
              className={styles.commentArea}
              placeholder="Leave your comment here..."
              name="description"
              value={comment.description}
              onChange={onChangeComment}
            ></textarea>
            <input
              className={styles.commentSubmit}
              type="submit"
              value="Submit Comment"
            />
          </label>
        </form>
      )}
    </>
  );
}

export default Comments;
