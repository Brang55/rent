export const commentReducer = (state, action) => {
  switch (action.type) {
    case "COMMENT_FETCH":
      return action.payload;
    case "COMMENT_ADD":
      return [...state, action.payload];
    default:
      return state;
  }
};
