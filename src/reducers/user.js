export const user = (state = {}, action) => {
  switch (action.type) {
    case 'RESET_USER':
      return { email: '', userId: null };
    case 'UPDATE_USER':
      return { email: action.email, userId: action.userId };
    default:
      return state;
  }
};
