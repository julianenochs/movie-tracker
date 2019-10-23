import { combineReducers } from 'redux';
import { login } from './Login';
import { movies } from './addMovies';
import {user} from './user';

export const rootReducer = combineReducers({
    login,
    movies,
    user,
});