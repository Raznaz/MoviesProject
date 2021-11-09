import { combineReducers } from 'redux';
import { appReducers } from './appReducers';
import { movieReducer } from './movieReducers';
import { themeReducer } from './themeReducers';
import { userReducer } from './userReducers';

export const rootReducer = combineReducers({
	usersArr: userReducer,
	moviesArr: movieReducer,
	theme: themeReducer,
	app: appReducers,
});
