export const Login = ( state = {}, action ) => {
    switch (action.type) {
        case 'ADD_USER' :
            return {...state, ...action.email, ...action.password};
        default:
          return state;
    }
}