const reducer = (state = {}, action) => {
  switch (action.type) {
    case "FETCH_REQUEST":
      return state;
    case "FETCH_SUCCESS":
      return action.payload;
    default:
      return state;
  }
};
export default reducer;
