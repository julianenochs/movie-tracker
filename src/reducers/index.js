import { combineReducers } from 'redux';
import { login } from './Login';
import { movies } from './addMovies';
import { user } from './user';
import { tempUser } from './tempUser';
import { isLoggedIn } from './isLoggedIn';
import { error } from './error';
import { favorites } from './favorites';
import { selectMovie } from './selectMovie';

export const rootReducer = combineReducers({
  login,
  movies,
  user,
  tempUser,
  isLoggedIn,
  error,
  favorites,
  selectMovie
});
