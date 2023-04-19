import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { doc, deleteDoc } from "firebase/firestore";

import { db } from "../config/firebase";

export const useConfirm = () => {
  const { propertyId } = useParams();
  const navigate = useNavigate();

  const [submitDelete, setSubmitDelete] = useState(false);

  const [userProperties, setUserProperties] = useState([]);

  const triggerConfirmation = () => {
    setSubmitDelete(!submitDelete);
  };

  const cancelConfirmation = () => {
    setSubmitDelete(!submitDelete);
  };

  console.log(userProperties);

  const deleteProperty = async (itemId) => {
    await deleteDoc(
      doc(db, "properties", (propertyId && propertyId) || itemId),
      setUserProperties(userProperties.filter((x) => x.id !== itemId)),
      setSubmitDelete(!submitDelete)
    );
    navigate("/my-account/my-properties");
  };

  return {
    submitDelete,
    setSubmitDelete,
    deleteProperty,
    triggerConfirmation,
    cancelConfirmation,
    userProperties,
    setUserProperties,
    propertyId,
  };
};
