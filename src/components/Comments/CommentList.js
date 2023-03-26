import { collection, query, where, getDocs } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";

import { AuthContext } from "../../context/AuthContext";
import { useParams } from "react-router-dom";
import { db } from "../../config/firebase";
import Comments from "./Comments";

function CommentList() {
  const { userData } = useContext(AuthContext);

  const { propertyId } = useParams();

  const [comment, setComment] = useState([]);

  console.log(comment);

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
        setComment(listComments);
        // console.log(doc.id, " => ", doc.data());
      });
    };
    loadComments();
  }, [propertyId]);

  return (
    <>
      <h2>Comments Section</h2>
      <ul>
        {comment.map((com) => {
          return (
            <li key={com.id}>
              <p>{com.description}</p>
            </li>
          );
        })}
      </ul>
      <Comments />
    </>
  );
}

export default CommentList;