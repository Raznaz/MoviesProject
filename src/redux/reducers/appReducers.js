import {
	CLOSE_ALERT_SNACK,
	HIDE_LOADER,
	OPEN_ALERT_SNACK,
	SHOW_LOADER,
	TOGGLE_ALERT_SNACK,
	TOGGLE_SNACK,
} from '../actions/appActions';

const initialState = {
	isLoading: false,
	isOpenSnack: false,
	isOpenAlert: false,
	errorMsg: '',
};

export const appReducers = (state = initialState, action) => {
	switch (action.type) {
		case SHOW_LOADER:
			return { ...state, isLoading: true };
		case HIDE_LOADER:
			return { ...state, isLoading: false };
		case TOGGLE_SNACK:
			return { ...state, isOpenSnack: !state.isOpenSnack };
		case OPEN_ALERT_SNACK:
			return {
				...state,
				isOpenAlert: true,
				errorMsg: action.payload.error,
			};
		case CLOSE_ALERT_SNACK:
			return { ...state, isOpenAlert: false };
		default:
			return state;
	}
};
