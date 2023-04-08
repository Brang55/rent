import { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";

import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../../config/firebase";

import { useAuthContext } from "../../context/AuthContext";
import { commentReducer } from "../../reducers/commentReducer";
import { useForm } from "../../hooks/useForm";

import styles from "./Comments.module.css";

function CommentList() {
  const { propertyId } = useParams();
  const { userId, isAuthenticated, email } = useAuthContext();

  const { values, changeHandler } = useForm({
    description: "",
    propertyId: propertyId,
    timeStamp: serverTimestamp(),
  });

  const [newComment, dispatch] = useReducer(commentReducer, []);

  console.log(newComment);

  const onCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addDoc(collection(db, "comments"), {
        ...values,
        userId: userId,
        userEmail: email,
      });

      const newCommentData = {
        ...values,
        userId: userId,
        userEmail: email,
        id: response.id,
      };

      dispatch({
        type: "COMMENT_ADD",
        payload: newCommentData,
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const loadComments = async () => {
      const listComments = [];
      const getComment = query(
        collection(db, "comments"),
        where("propertyId", "==", propertyId)
      );
      const querySnapshot = await getDocs(getComment);
      querySnapshot.forEach((doc) => {
        listComments.push({ id: doc.id, ...doc.data() });
        dispatch({ type: "COMMENT_FETCH", payload: listComments });
        // console.log(doc.id, " => ", doc.data());
      });
    };
    loadComments();
  }, [propertyId]);

  return (
    <>
      <h2>Comments Section</h2>
      <ul>
        {newComment.map((com) => {
          return (
            <li key={com.id}>
              <p>
                <span className={styles.commentUser}>{com.userEmail}: </span>
                {com.description}
              </p>
            </li>
          );
        })}
      </ul>
      {!!isAuthenticated && (
        <form className={styles.commentForm} onSubmit={onCommentSubmit}>
          <label>
            <textarea
              className={styles.commentArea}
              placeholder="Leave your comment here..."
              name="description"
              value={values.description}
              onChange={changeHandler}
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

export default CommentList;
