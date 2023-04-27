export const fileReducer = (state, action) => {
  const UPLOAD = "FILE_UPLOAD";
  const DELETE = "FILE_DELETE";
  const UPDATE = "FILE_UPDATE";
  const EDIT = "FILE_EDIT";

  switch (action.type) {
    case UPLOAD:
      return [...state, action.payload];
    case EDIT:
      return [...state, ...action.payload];
    case DELETE:
      const updatedItems = state.filter((image) => image !== action.payload);
      return [...updatedItems];
    case UPDATE:
      return [...state, action.payload];
    default:
      return state;
  }
};
