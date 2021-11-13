import {
	FETCH_USER_SUCCESS,
	USER_LOGOUT,
} from '../actions/userActions';

const initialState = {
	isLoggedIn: false,
	currentUser: {},
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USER_SUCCESS:
			return {
				...state,
				currentUser: action.payload.user,
				isLoggedIn: true,
			};
		case USER_LOGOUT:
			return { ...state, isLoggedIn: false };

		default:
			return state;
	}
};
