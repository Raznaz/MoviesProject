import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import {
	fetchUserSuccess,
	FETCH_USER_SUCCESS,
} from '../actions/userActions';
import { getAccount } from '../../api/api';

// export const history = createBrowserHistory();

const userMiddleware = (store) => (next) => async (action) => {
	const { currentUser } = store.getState().usersArr;
	console.log(currentUser);
	if (action.type !== FETCH_USER_SUCCESS) {
		console.log('MY MIDDLEWARE');
		const sessionId = localStorage.getItem('session_id');
		const user = await getAccount(sessionId);
		console.log(user);
		// store.dispatch(fetchUserSuccess(user));
	}
	next(action);
};

const middlewares = [thunk, logger, userMiddleware];

const isDevelopmentMode = process.env.NODE_ENV === 'development';

if (isDevelopmentMode) {
	// middlewares.push(logger, routerMiddlware(history));
}

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares)),
);
