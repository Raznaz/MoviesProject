import {
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
	SHOW_FAVORITE_MOVIES,
	PAGE_NUMBER_PAGINATION,
	STATUS_MOVIE,
} from '../actions/movieActinos';

const initialState = {
	movies: [],
	movieById: {},
	searchMovies: [],
	favoriteMovies: [],
	// amountFavMovies: 0,
	typeList: '',
	pageNumberPagination: 1,
	searchValue: '',
	genres: [],
	languages: [],
	filter: {
		genres: [],
		language: '',
	},
	statusMovie: [],
};

export const movieReducer = (state = initialState, action) => {
	switch (action.type) {
		case INFO_MOVIE_BY_ID:
			return { ...state, movieById: action.payload.currentMovie };
		case FETCH_MOVIES_SUCCESS:
			// console.log('movie reducer', action.payload.movies);
			return {
				...state,
				movies: action.payload.movies,
				typeList: 'popular',
			};
		case SEARCH_MOVIES:
			return { ...state, searchValue: action.payload.value };
		case SEARCH_MOVIES_ARR:
			return {
				...state,
				movies: action.payload.searchArr,
				typeList: 'search',
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
				pageNumberPagination: 1,
			};
		case FILTER_MOVIES:
			return {
				...state,
				movies: action.payload.filteredArr,
				searchValue: '',
				typeList: 'filtered',
			};
		case LIST_GENRES:
			return { ...state, genres: action.payload.genres };
		case LIST_LANGUAGES:
			return { ...state, languages: action.payload.lang };
		case SHOW_FAVORITE_MOVIES:
			return { ...state, favoriteMovies: action.payload.favMovies };
		case PAGE_NUMBER_PAGINATION:
			return {
				...state,
				pageNumberPagination: action.payload.pageNumber,
			};
		case STATUS_MOVIE:
			return {
				...state,
				statusMovie: action.payload.movie,
			};

		default:
			return state;
	}
};
