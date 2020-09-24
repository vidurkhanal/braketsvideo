export const initialState = {
  selectedMovie: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SELECT_MOVIE":
      return { ...state, selectedMovie: action.movie };
    default:
      return state;
  }
};

export default reducer;
