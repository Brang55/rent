// import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// import { db } from "../../config/firebase";

// import { useAuthContext } from "../../context/AuthContext";
// import { useReducer, useState } from "react";
// import { useParams } from "react-router-dom";

// import { commentReducer } from "../../reducers/commentReducer";

// import styles from "./Comments.module.css";

// function Comments() {
//   const { propertyId } = useParams();
//   const { userId, isAuthenticated, email } = useAuthContext();

//   const [newComment, dispatch] = useReducer(commentReducer, {});

//   const [comment, setComment] = useState({
//     description: "",
//     propertyId: propertyId,
//     userId: userId,
//     userEmail: email,
//     timeStamp: serverTimestamp(),
//   });

//   const onChangeComment = (e) => {
//     const { name, value } = e.target;
//     setComment((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const onCommentSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await addDoc(collection(db, "comments"), {
//         ...comment,
//       });

//       dispatch({
//         type: "COMMENT_ADD",
//         payload: response,
//       });
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   return (
//     <>
//       {!!isAuthenticated && (
//         <form className={styles.commentForm} onSubmit={onCommentSubmit}>
//           <label>
//             <textarea
//               className={styles.commentArea}
//               placeholder="Leave your comment here..."
//               name="description"
//               value={comment.description}
//               onChange={onChangeComment}
//             ></textarea>
//             <input
//               className={styles.commentSubmit}
//               type="submit"
//               value="Submit Comment"
//             />
//           </label>
//         </form>
//       )}
//     </>
//   );
// }

// export default Comments;
