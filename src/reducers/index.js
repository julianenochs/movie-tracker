import { combineReducers } from 'redux';
import { Login } from './Login';
import { movies } from './addMovies';

export const rootReducer = combineReducers({
    Login,
    movies,
});