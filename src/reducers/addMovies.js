export const movies = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      return [...action.movies];
    case 'RESET_MOVIES':
      let movies = state.map(movie => movie);
      movies.forEach(movie => movie.isFavorite = false);
      return movies;
    default:
      return state;
  };
}