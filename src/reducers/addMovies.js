export const movies = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MOVIES':
      return [...action.movies];
    case 'RESET_MOVIES':
      state.forEach(movie => movie.isFavorite = false);
      return state;
    default:
      return state;
  }
}