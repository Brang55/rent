import styles from "./AddProperty.module.css";

function AddProperty() {
  return (
    <section className={styles.addProperty}>
      <div className="container">
        <form className={styles.addPropertyForm}>
          <h2 className={styles.addPropertyHeading}>Add New Property</h2>
          <div className={styles.addPropInput}>
            <label htmlFor="name">
              Name<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Name"
              value={null}
              name="name"
            />
          </div>
          <div className={styles.addPropInput}>
            <label htmlFor="address">
              Address<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="address"
              placeholder="Enter Address"
              value={null}
              name="address"
            />
          </div>
          <div className={styles.addPropInput}>
            <label htmlFor="unit">
              Unit Number<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="unit"
              placeholder="Enter Unit"
              value={null}
              name="unit"
            />
          </div>
          <div className={styles.addPropInput}>
            <label htmlFor="city">
              City<span className={styles.required}>*</span>
            </label>
            <select name="city" id="city">
              <option value="sofia">Sofia</option>
              <option value="plovdiv">Plovdiv</option>
              <option value="varna">Varna</option>
              <option value="burgas">Burgas</option>
            </select>
          </div>
          <div className={styles.addPropInput}>
            <label htmlFor="room">
              Room Type<span className={styles.required}>*</span>
            </label>
            <select name="room" id="room">
              <option value="private-room">Private Room</option>
              <option value="apartment">Apartment</option>
              <option value="house">House</option>
            </select>
          </div>
          <div className={styles.addPropInput}>
            <label htmlFor="price">
              Price<span className={styles.required}>*</span>
            </label>
            <input
              type="text"
              id="price"
              placeholder="Enter Price"
              value={null}
              name="price"
            />
          </div>
          <div className={styles.description}>
            <label htmlFor="description">
              Description<span className={styles.required}>*</span>
            </label>
            <textarea
              id="description"
              placeholder="Enter Description"
              value={null}
              name="description"
            />
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddProperty;
