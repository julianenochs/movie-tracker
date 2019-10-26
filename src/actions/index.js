export const addMovies = movies => ({
  type: 'ADD_MOVIES',
  movies
});

//tempUser actions
export const updateUserInfo = (name, email, password) => ({
  type: 'UPDATE_USER_INFO',
  name,
  email,
  password
});

//isLoggedInActions
export const updateIsLoggedIn = boolean => ({
  type: 'UPDATE_IS_LOGGED_IN',
  boolean
});


//error actions
export const updateError = errorMessage => ({
  type: 'UPDATE_ERROR',
  errorMessage
});

export const resetError = () => ({
  type: 'RESET_ERROR'
})

export const updateUser = ( email ) => ({
  type: 'UPDATE_USER',
  email,
});
