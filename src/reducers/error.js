export const error = (state = '', action) => {
  switch (action.type) {
    case 'UPDATE_ERROR':
      return action.errorMessage.message;
    case 'RESET_ERROR':
      return '';
    default:
      return state;
  }
};
