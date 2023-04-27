import Backdrop from "../../Backdrop/Backdrop";
import styles from "./Confirmation.module.css";

function Confirmation({
  cancelConfirmation,
  deleteProperty,
  propertyId,
  clickedProperty,
  backDropHolder,
  name,
}) {
  return (
    <>
      <Backdrop backDropHolder={backDropHolder} />
      <div className={styles.confirmBox}>
        <p
          className={styles.confirmText}
        >{`You are about to delete ${name}`}</p>
        <div className={styles.confirmBtnContainer}>
          <button className={styles.confirmBtn} onClick={cancelConfirmation}>
            Cancel
          </button>
          <button
            className={styles.confirmBtn}
            onClick={() => deleteProperty(propertyId || clickedProperty)}
            style={{ marginRight: 0 }}
          >
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
