import { combineReducers } from 'redux';
import { Login } from './Login';
import { movies } from './addMovies';
import {user} from './user';

export const rootReducer = combineReducers({
    Login,
    movies,
    user,
});