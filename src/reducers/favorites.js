export const favorites = (state = [], action) => {
  switch (action.type) {
    case 'UPDATE_FAVORITES':
      return action.favorites.favorites;
    default:
      return state;
  }
};
