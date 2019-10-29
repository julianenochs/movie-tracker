export const displayFavorites = (state = [], action) => {
  switch (action.type) {
    case 'DISPLAY_FAVORITES':
      return state.map(movie => movie.isFavorite === true);
    default:
      return state;
  }
};
