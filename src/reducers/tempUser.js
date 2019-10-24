export const tempUser = (state = {}, action) => {
  switch(action.case) {
    case 'UPDATE_USER_INFO':
      const { name, email, password } = action;
      return { name, email, password };
    default:
      return state;
  };
};