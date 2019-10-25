export const user = (state = {}, action) => {
  switch (action.type) {
    case 'RESET_USER':
      return { email: '' };
    case 'UPDATE_USER':
      return { email: action.email };
    default:
      return state;
  }
};
