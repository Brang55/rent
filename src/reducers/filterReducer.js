export const filterReducer = (state, action) => {
  const CHANGED = "CITY_CHANGED";
  switch (action.type) {
    case CHANGED:
      return [...action.payload];

    default:
      return state;
  }
};
