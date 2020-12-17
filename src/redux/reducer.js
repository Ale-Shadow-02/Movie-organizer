const initState = {
  movies: [],
  listMovies: [],
};

export default function reduser(state = initState, action) {
  switch (action.type) {
    case "ADD_MOVIES":
      return {
        ...state,
        movies: [...action.payload.movies],
      };
  }
  return state;
}
