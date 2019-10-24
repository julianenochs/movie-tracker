export const addUser = ({ email, password }) => ({
  type: 'ADD_USER',
  email,
  password
});

export const addMovies = movies => ({
  type: 'ADD_MOVIES',
  movies
});

export const login = (email, password, error) => ({
  type: 'LOGIN',
  email,
  password,
  error
});

export const register = (name, email, password) => ({
  type: 'REGISTER',
  name,
  email,
  password
});

export const updateUserInfo = (name, email, password) => ({
  type: 'UPDATE_USER_INFO',
  name,
  email,
  password
});

export const updateIsLoggedIn = boolean => ({
  type: 'UPDATE_IS_LOGGED_IN',
  boolean
});

export const updateError = errorMessage => ({
  type: 'UPDATE_ERROR',
  errorMessage
});
