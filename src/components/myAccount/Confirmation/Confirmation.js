import styles from "./Confirmation.module.css";

function Confirmation({
  cancelConfirmation,
  deleteProperty,
  propertyId,
  clickedProperty,
}) {
  return (
    <>
      <div className={styles.confirmBg}></div>
      <div className={styles.confirmBox}>
        <p className={styles.confirmText}>Are you sure?</p>
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
