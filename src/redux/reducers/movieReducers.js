import { FETCH_MOVIES_SUCCESS } from '../actions/movieActinos';

const initialState = {
	movies: [],
};

export const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MOVIES_SUCCESS:
			console.log('movie reducer', action.payload.movies);
			return { ...state, movies: action.payload.movies };

		default:
			return state;
	}
};
