export const selectMovie = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_MOVIE':
      console.log('action', action);
      return { ...action.movies };
    default:
      return state;
  }
};
