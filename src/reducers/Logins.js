export const Logins = ( state = {}, action ) => {
    switch (action.type) {
        case 'ADD_USER' :
            return {...state, ...action.email, ...action.password}
    }
}