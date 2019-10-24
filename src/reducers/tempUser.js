export const tempUser = (state = { name: '', email: '', password:''}, action) => {
  switch(action.type) {
    case 'UPDATE_USER_INFO':
      const { name, email, password } = action;
      return { name, email, password };
    default:
      return state;
  };
};