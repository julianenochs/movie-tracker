export const displayFavorites = (state = [], action) => {
  switch (action.type) {
    case 'DISPLAY_FAVORITES':
      let movies = state.map(movie => movie.isFavorite === true);
      return movies;
    default:
      return state;
  }
};
