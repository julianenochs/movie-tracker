export const selectMovie = (state = {}, action) => {
  switch (action.type) {
    case 'SELECT_MOVIE':
      console.log('action', action);
      console.log(action.movie);
      return action.movie;
    default:
      return state;
  }
};
