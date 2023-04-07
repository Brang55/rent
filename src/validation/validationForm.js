export const validateForms = (values) => {
  let errors = {};

  // Register Validation

  const isEmail = (email) => {
    /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  };

  if (!values.firstName.trim()) {
    errors.firstName = "First Name is required";
  } else if (values.firstName === "") {
    errors.firstName = "First Name is required";
  }

  if (!values.lastName.trim()) {
    errors.lastName = "Last Name is required";
  } else if (values.lastName === "") {
    errors.lastName = "Last Name is required";
  }

  if (!isEmail(values.email)) {
    errors.email = "Email address is invalid";
  } else if (!values.email) {
    errors.email = "Email address is required";
  }

  if (!values.password) {
    errors.password = "Password is required";
  } else if (values.password.length < 5) {
    errors.password = "Password needs to be 5 characters or more";
  }

  if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords do not match";
  } else if (!values.confirmPassword) {
    errors.confirmPassword = "Password is required";
  }

  return errors;
};
