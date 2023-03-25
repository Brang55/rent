import styles from "./Comments.module.css";

import { AuthContext } from "../../context/AuthContext";
import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

function Comments() {
  const { propertyId } = useParams();

  const { userData } = useContext(AuthContext);

  const [comment, setComment] = useState({
    description: "",
  });

  const userId = userData.uid;

  const onChangeComment = (e) => {
    const { name, value } = e.target;
    setComment((prevState) => ({ ...prevState, [name]: value }));
  };

  const onCommentSubmit = (e) => {
    e.preventDefault();
    console.log(comment);
  };

  console.log(propertyId);

  return (
    <>
      <h2>Comments Section</h2>
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
    </>
  );
}

export default Comments;
