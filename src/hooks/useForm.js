import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const [errors, setErrors] = useState(initialValues);

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onBlurChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        value.trim().length < 2
          ? setErrors((prevState) => ({
              ...prevState,
              name: "Name must be at least 2 characters long",
            }))
          : setErrors((prevState) => ({
              ...prevState,
              name: "",
            }));
        break;

      case "address":
        value.trim().length < 10 || value.trim() > 60
          ? setErrors((prevState) => ({
              ...prevState,
              address: "Adress must be between 10 and 60 characters",
            }))
          : setErrors((prevState) => ({
              ...prevState,
              address: "",
            }));
        break;

      case "square":
        if (value === "") {
          setErrors((prevState) => ({
            ...prevState,
            square: "Please enter square",
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            square: "",
          }));
        }
        break;

      case "city":
        if (name === "---" && value === "") {
          setErrors((prevState) => ({
            ...prevState,
            city: "Please Select City",
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            city: "",
          }));
        }
        break;

      case "area":
        if (name === "---" && value === "") {
          setErrors((prevState) => ({
            ...prevState,
            area: "Please Select Area",
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            area: "",
          }));
        }
        break;

      case "price":
        if (value === "") {
          setErrors((prevState) => ({
            ...prevState,
            price: "Please enter price",
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            price: "",
          }));
        }
        break;

      case "description":
        if (value === "") {
          setErrors((prevState) => ({
            ...prevState,
            description: "Please enter description",
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            description: "",
          }));
        }
        break;

      case "firstName":
        const nameRegex = /^[a-zA-Z]+$/;
        if (values.firstName.length < 2) {
          setErrors((prevState) => ({
            ...prevState,
            firstName: "Name is too short",
          }));
        } else if (!nameRegex.test(values.firstName)) {
          setErrors((prevState) => ({
            ...prevState,
            firstName: "Must not contain any numbers",
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            firstName: "",
          }));
        }
        break;

      case "lastName":
        const lastNameReg = /^[a-zA-Z]+$/;
        if (values.lastName.length < 2) {
          setErrors((prevState) => ({
            ...prevState,
            lastName: "Name is too short",
          }));
        } else if (!lastNameReg.test(values.lastName)) {
          setErrors((prevState) => ({
            ...prevState,
            lastName: "Must not contain any numbers",
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            lastName: "",
          }));
        }
        break;

      case "email":
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        !emailRegex.test(value)
          ? setErrors((prevState) => ({
              ...prevState,
              email: "Please enter a valid email address",
            }))
          : setErrors((prevState) => ({
              ...prevState,
              email: "",
            }));
        break;
      case "password":
        const passUpperCase = /^(?=.*[A-Z])$/;
        const passNoUpperCase = /^[^A-Z]*$/;
        const passLowerCase = /^(?=.*[a-z])$/;
        const passNoLowerCase = /^[^a-z]*$/;
        if (
          !passUpperCase.test(values.password) &&
          passNoUpperCase.test(values.password)
        ) {
          setErrors((prevState) => ({
            ...prevState,
            password: "Must contain atleast one uppercase character",
          }));
        } else if (
          !passLowerCase.test(values.password) &&
          passNoLowerCase.test(values.password)
        ) {
          setErrors((prevState) => ({
            ...prevState,
            password: "Must contain atleast one lowercase character",
          }));
        } else if (values.password.length < 8) {
          setErrors((prevState) => ({
            ...prevState,
            password: "Password must be atleast 8 characters",
          }));
        } else {
          setErrors((prevState) => ({
            ...prevState,
            password: "",
          }));
        }

        break;

      case "confirmPassword":
        value !== values.password
          ? setErrors((prevState) => ({
              ...prevState,
              confirmPassword: "Password Does not Match",
            }))
          : setErrors((prevState) => ({
              ...prevState,
              confirmPassword: "",
            }));
        break;
      default:
        break;
    }
  };

  return {
    values,
    setValues,
    changeHandler,
    onBlurChange,
    errors,
  };
};
