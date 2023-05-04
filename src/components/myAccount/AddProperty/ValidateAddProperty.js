export const validateAddProperty = (values) => {
  let errors = {};

  if (!values.name) {
    errors.name = "This field is required";
  } else if (values.name.length > 60) {
    errors.name = "Title is long";
  }

  if (!values.square) {
    errors.square = "This field is required";
  }

  if (!values.address) {
    errors.address = "This field is required";
  }

  if (!values.city) {
    errors.city = "This field is required";
  }

  if (!values.roomType) {
    errors.roomType = "This field is required";
  }

  if (!values.price) {
    errors.price = "This field is required";
  }

  if (values.description.length < 100) {
    errors.description = "Description is too short";
  } else if (!values.description) {
    errors.description = "This field is required";
  }

  return errors;
};
