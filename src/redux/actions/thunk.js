import {
	fetchMovies,
	filterMovies,
	findMovies,
	getListGenres,
	getListLanguages,
} from '../../api/api';
import {
	fetchMoviesSuccess,
	filterMoviesByGenre,
	searchMovieArr,
	showListGenres,
	showListLanguages,
} from './movieActinos';

export const fetchMovie = () => {
	return async (dispatch) => {
		const movies = await fetchMovies();
		// console.log('movies thunk', movies);
		dispatch(fetchMoviesSuccess(movies.data.results));
	};
};

export const findMovie = (searchValue) => {
	return async (dispatch) => {
		const movies = await findMovies(searchValue);
		// console.log('FILTER movie thunk', movies);
		dispatch(searchMovieArr(movies.data.results));
	};
};

export const listGenres = () => {
	return async (dispatch) => {
		const genres = await getListGenres();
		// console.log('LIST genres thunk', genres.data);
		dispatch(showListGenres(genres.data.genres));
	};
};

export const listLanguages = () => {
	return async (dispatch) => {
		const languages = await getListLanguages();
		// console.log('LIST LANG thunk', languages.data);
		dispatch(showListLanguages(languages.data));
	};
};

export const filterMovie = (filter) => {
	console.log('111 filter:', filter);
	return async (dispatch) => {
		const filteredMovies = await filterMovies(filter);
		console.log('FILTERED genres thunk', filteredMovies.data.results);
		dispatch(filterMoviesByGenre(filteredMovies.data.results));
	};
};
