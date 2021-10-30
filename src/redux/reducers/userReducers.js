const initialState = {
	users: [],
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'value':
			console.log('userReducer');
			return { ...state, users: action.payload.movies };

		default:
			return state;
	}
};
