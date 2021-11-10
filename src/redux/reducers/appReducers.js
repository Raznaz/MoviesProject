import {
	HIDE_LOADER,
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
		case TOGGLE_ALERT_SNACK:
			return {
				...state,
				isOpenAlert: !state.isOpenAlert,
				errorMsg: action.payload.error,
			};
		default:
			return state;
	}
};
