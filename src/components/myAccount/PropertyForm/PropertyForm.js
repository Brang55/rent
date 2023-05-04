import { useConfirm } from "../../../hooks/useConfirm";
import Confirmation from "../Confirmation/Confirmation";
import styles from "./PropertyForm.module.css";

function PropertyForm({
  name,
  address,
  square,
  city,
  roomType,
  price,
  description,
  urls,
  per,
  formOnChangleHandler,
  handleImageChange,
  edit,
  addPropertySubmit,
  onEditSubmit,
  errors,
  goBack,
  imageDelete,
  onBlurChange,
}) {
  const {
    submitDelete,
    triggerConfirmation,
    cancelConfirmation,
    deleteProperty,
    backDropHolder,
  } = useConfirm();

  return (
    <form
      className={styles.addPropertyForm}
      onSubmit={edit ? onEditSubmit : addPropertySubmit}
    >
      <h2 className={styles.addPropertyHeading}>
        {edit ? `${name}` : "Add New Property"}
      </h2>
      <div className={styles.addPropInput}>
        <label htmlFor="name">
          Name<span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="name"
          placeholder="Enter Name"
          value={name}
          name="name"
          onChange={formOnChangleHandler}
          onBlur={onBlurChange}
        />
        {errors.name && <span className={styles.invalid}>{errors.name}</span>}
      </div>
      <div className={styles.addPropInput}>
        <label htmlFor="address">
          Address<span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="address"
          placeholder="Enter Address"
          value={address}
          name="address"
          onChange={formOnChangleHandler}
          onBlur={onBlurChange}
        />
        {errors.address && (
          <span className={styles.invalid}>{errors.address}</span>
        )}
      </div>
      <div className={styles.addPropInput}>
        <label htmlFor="square">
          Square<span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="square"
          placeholder="Enter Square"
          value={square}
          name="square"
          onChange={formOnChangleHandler}
          onBlur={onBlurChange}
        />
        {errors.square && (
          <span className={styles.invalid}>{errors.square}</span>
        )}
      </div>
      <div className={styles.addPropInput}>
        <label htmlFor="city">
          City<span className={styles.required}>*</span>
        </label>
        <select
          name="city"
          id="city"
          value={city}
          onChange={formOnChangleHandler}
          onBlur={onBlurChange}
          required
        >
          <option value="select" selected>
            ---
          </option>
          <option value="sofia">Sofia</option>
          <option value="plovdiv">Plovdiv</option>
          <option value="varna">Varna</option>
          <option value="burgas">Burgas</option>
        </select>
        {errors.city && <span className={styles.invalid}>{errors.city}</span>}
      </div>
      <div className={styles.addPropInput}>
        <label htmlFor="room">
          Room Type<span className={styles.required}>*</span>
        </label>
        <select
          name="roomType"
          id="room"
          value={roomType}
          onChange={formOnChangleHandler}
          onBlur={onBlurChange}
          required
        >
          <option value="select" selected>
            ----
          </option>
          <option value="private-room">Private Room</option>
          <option value="apartment">Apartment</option>
          <option value="house">House</option>
        </select>
        {errors.roomType && (
          <span className={styles.invalid}>{errors.roomType}</span>
        )}
      </div>
      <div className={styles.addPropInput}>
        <label htmlFor="price">
          Price<span className={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="price"
          placeholder="Enter Price"
          value={price}
          name="price"
          onChange={formOnChangleHandler}
          onBlur={onBlurChange}
        />
        {errors.price && <span className={styles.invalid}>{errors.price}</span>}
      </div>
      <div className={styles.description}>
        <label htmlFor="description">
          Description<span className={styles.required}>*</span>
        </label>
        <textarea
          id="description"
          placeholder="Enter Description"
          value={description}
          name="description"
          onChange={formOnChangleHandler}
          onBlur={onBlurChange}
        />
        {errors.description && (
          <span className={styles.invalid}>{errors.description}</span>
        )}
      </div>
      <ul className={styles.images}>
        {urls.map((url) => {
          return (
            <li key={url}>
              <img src={url} alt="testImg" className={styles.uploadedImages} />
              <span
                className={styles.removeImg}
                onClick={() => imageDelete(url)}
              ></span>
            </li>
          );
        })}
      </ul>

      <div>
        <label htmlFor="images" className={styles.dropContainer}>
          <span className={styles.dropTitle}>
            Drop files here or
            <input
              type="file"
              id="images"
              accept="image/*"
              multiple
              onChange={handleImageChange}
            />
          </span>
        </label>
      </div>

      {edit ? (
        <>
          <div className={styles.btnContainer}>
            <span
              className={`${styles.newProperty} ${styles.editProperty}`}
              onClick={goBack}
            >
              Cancel
            </span>
            <input
              type="submit"
              className={`${styles.newProperty} ${styles.editProperty}`}
              value="Save"
            />
            <span
              className={`${styles.newProperty} ${styles.editProperty}`}
              style={{ marginRight: 0 }}
              onClick={triggerConfirmation}
            >
              Delete
            </span>
          </div>
          {submitDelete && (
            <Confirmation
              cancelConfirmation={cancelConfirmation}
              deleteProperty={deleteProperty}
              backDropHolder={backDropHolder}
              name={name}
            />
          )}
        </>
      ) : (
        <div className={styles.btnContainer}>
          <input
            type="submit"
            className={styles.newProperty}
            value="Add New Property"
            disabled={per !== null && per < 100}
          />
        </div>
      )}
    </form>
  );
}

export default PropertyForm;
