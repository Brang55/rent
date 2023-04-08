import { useState } from "react";

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  const changeHandler = (e) => {
    setValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const changeValues = (newValues) => {
    // TODO: Validate newValues shape (like initialValues)

    setValues(newValues);
  };

  return {
    values,
    changeHandler,
    changeValues,
  };
};