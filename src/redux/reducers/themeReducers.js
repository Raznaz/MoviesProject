import { THEME_CHANGE } from '../actions/themeActions';

const initialState = {
	isLightMode: true,
};

export const themeReducer = (state = initialState, action) => {
	switch (action.type) {
		case THEME_CHANGE:
			return { ...state, isLightMode: !state.isLightMode };

		default:
			return state;
	}
};
