import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { rootReducer } from '../reducers';
import {
	fetchUserSuccess,
	FETCH_USER_SUCCESS,
} from '../actions/userActions';
import { getAccount } from '../../api/apiUser';

const userMiddleware = (store) => (next) => async (action) => {
	if (
		action.type !== FETCH_USER_SUCCESS &&
		localStorage.getItem('session_id')
	) {
		const sessionId = localStorage.getItem('session_id');
		const user = await getAccount(sessionId);
		store.dispatch(fetchUserSuccess(user));
	}
	next(action);
};

const middlewares = [thunk, userMiddleware];

export const store = createStore(
	rootReducer,
	composeWithDevTools(applyMiddleware(...middlewares)),
);
