export const selectMovie = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_MOVIE':
      return action.movie;
    default:
      return state;
  }
};
