export function addMovies(movies) {
  return {
    type: "ADD_MOVIES",
    payload: {
      movies: movies,
    },
  };
}
