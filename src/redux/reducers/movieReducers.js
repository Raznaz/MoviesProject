import {
	CREATE_FILTER,
	CREATE_FILTER_GENRES,
	CREATE_FILTER_LANGUAGE,
	FETCH_MOVIES_SUCCESS,
	FILTER_MOVIES,
	LIST_GENRES,
	LIST_LANGUAGES,
	SEARCH_MOVIES,
	SEARCH_MOVIES_ARR,
	RESET_FILTER,
	INFO_MOVIE_BY_ID,
} from '../actions/movieActinos';

const initialState = {
	movies: [],
	movieById: {},
	searchMovies: [],
	searchValue: '',
	genres: [],
	languages: [],
	filter: {
		genres: [],
		language: '',
	},
};

export const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case INFO_MOVIE_BY_ID:
			console.log('Movie ID reducer', action.payload.searchArr);
			return { ...state, movieById: action.payload.id };
		case FETCH_MOVIES_SUCCESS:
			// console.log('movie reducer', action.payload.movies);
			return { ...state, movies: action.payload.movies };
		case SEARCH_MOVIES:
			return { ...state, searchValue: action.payload.value };
		case SEARCH_MOVIES_ARR:
			// console.log('search reducer', action.payload.searchArr);
			// return {
			// 	...state,
			// 	searchMovies: [...action.payload.searchArr],
			// };
			return {
				...state,
				movies: action.payload.searchArr,
			};
		case CREATE_FILTER_GENRES:
			console.log('CREATE FILTER GENRES:', action.payload);
			if (
				state.filter.genres.find(
					(genre) => action.payload.id === genre,
				)
			) {
				return {
					...state,
					filter: {
						...state.filter,
						genres: state.filter.genres.filter(
							(genre) => genre !== action.payload.id,
						),
					},
				};
			}
			return {
				...state,
				filter: {
					...state.filter,
					genres: [...state.filter.genres, action.payload.id],
				},
			};
		case CREATE_FILTER_LANGUAGE:
			console.log('CREATE FILTER LANG:', action.payload);
			return {
				...state,
				filter: {
					...state.filter,
					language: action.payload.lang,
				},
			};
		case RESET_FILTER:
			return {
				...state,
				filter: {
					genres: [],
					language: '',
				},
			};
		case FILTER_MOVIES:
			return {
				...state,
				movies: action.payload.filteredArr,
				searchValue: '',
			};
		case LIST_GENRES:
			return { ...state, genres: action.payload.genres };
		case LIST_LANGUAGES:
			return { ...state, languages: action.payload.lang };
		default:
			return state;
	}
};
