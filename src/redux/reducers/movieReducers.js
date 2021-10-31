import {
	FETCH_MOVIES_SUCCESS,
	SEARCH_MOVIES,
	SEARCH_MOVIES_ARR,
} from '../actions/movieActinos';

const initialState = {
	movies: [],
	searchMovies: [],
	searchValue: '',
};

export const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MOVIES_SUCCESS:
			console.log('movie reducer', action.payload.movies);
			return { ...state, movies: action.payload.movies };
		case SEARCH_MOVIES:
			return { ...state, searchValue: action.payload.value };
		case SEARCH_MOVIES_ARR:
			console.log('search reducer', action.payload.searchArr);
			return {
				...state,
				searchMovies: [...action.payload.searchArr],
			};
		default:
			return state;
	}
};
