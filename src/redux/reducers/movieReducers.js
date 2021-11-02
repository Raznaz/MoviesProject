import {
	FETCH_MOVIES_SUCCESS,
	FILTER_MOVIES,
	LIST_GENRES,
	LIST_LANGUAGES,
	SEARCH_MOVIES,
	SEARCH_MOVIES_ARR,
} from '../actions/movieActinos';

const initialState = {
	movies: [],
	searchMovies: [],
	searchValue: '',
	genres: [],
	languages: [],
	filter: {
		genres: [10402],
		language: ['ru'],
	},
};

export const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MOVIES_SUCCESS:
			// console.log('movie reducer', action.payload.movies);
			return { ...state, movies: action.payload.movies };
		case SEARCH_MOVIES:
			return { ...state, searchValue: action.payload.value };
		case SEARCH_MOVIES_ARR:
			console.log('search reducer', action.payload.searchArr);
			// return {
			// 	...state,
			// 	searchMovies: [...action.payload.searchArr],
			// };
			return {
				...state,
				movies: action.payload.searchArr,
			};
		case FILTER_MOVIES:
			return { ...state, movies: action.payload.filteredArr };
		case LIST_GENRES:
			return { ...state, genres: action.payload.genres };
		case LIST_LANGUAGES:
			return { ...state, languages: action.payload.lang };
		default:
			return state;
	}
};
