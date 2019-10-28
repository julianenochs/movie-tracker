export const addMovies = movies => ({
  type: 'ADD_MOVIES',
  movies
});

export const resetMovies = () => ({
  type: 'RESET_MOVIES'
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
});

export const updateUser = (email, userId) => ({
  type: 'UPDATE_USER',
  email,
  userId
});

export const resetUser = () => ({
  type: 'RESET_USER'
});

export const updateFavorites = favorites => ({
  type: 'UPDATE_FAVORITES',
  favorites
});

export const selectMovie = movie => ({
  type: 'SELECT_MOVIE',
  movie
});

export const displayFavorites = favoriteMovies => ({
  type: 'DISPLAY_FAVORITES',
  favoriteMovies
});
