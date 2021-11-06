import { FETCH_USER_SUCCESS } from '../actions/userActions';

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

		default:
			return state;
	}
};
