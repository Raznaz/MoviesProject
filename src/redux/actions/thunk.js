import {
	fetchMovies,
	filterMovies,
	findMovies,
	getInformationMovieById,
	getListGenres,
	getListLanguages,
	generateToken,
	generateSessionID,
	getAccount,
	getFavoriteMovies,
} from '../../api/api';
import { markFavoriteMovie } from '../../api/apiUser';
import { hideLoader, showLoader } from './appActions';
import {
	fetchMoviesSuccess,
	filterMoviesByGenre,
	searchMovieArr,
	showFavoriteMoviesSuccess,
	showInfoMovieById,
	showListGenres,
	showListLanguages,
} from './movieActinos';
import { fetchUserSuccess } from './userActions';

// POPULAR MOVIES
export const fetchMovie = (page = 1) => {
	return async (dispatch) => {
		dispatch(showLoader());
		const movies = await fetchMovies(page);
		// console.log('movies thunk', movies);

		dispatch(fetchMoviesSuccess(movies.data));
		dispatch(hideLoader());
	};
};

// FIND
export const findMovie = (searchValue, page) => {
	return async (dispatch) => {
		dispatch(showLoader());
		const movies = await findMovies(searchValue, page);
		// console.log('FILTER movie thunk', movies);
		dispatch(searchMovieArr(movies.data));
		dispatch(hideLoader());
	};
};

// FILTER
export const filterMovie = (filter, page) => {
	// console.log('111 filter:', filter);
	return async (dispatch) => {
		dispatch(showLoader());
		const filteredMovies = await filterMovies(filter, page);
		// console.log('FILTERED genres thunk', filteredMovies.data.results);
		dispatch(filterMoviesByGenre(filteredMovies.data));
		dispatch(hideLoader());
	};
};

// GENRES
export const listGenres = () => {
	return async (dispatch) => {
		const genres = await getListGenres();
		// console.log('LIST genres thunk', genres.data);
		dispatch(showListGenres(genres.data.genres));
	};
};

// LANGUAGES
export const listLanguages = () => {
	return async (dispatch) => {
		const languages = await getListLanguages();
		// console.log('LIST LANG thunk', languages.data);
		dispatch(showListLanguages(languages.data));
	};
};

// SHOW INFO MOVIE
export const getInfoAboutMovieById = (movieId) => {
	return async (dispatch) => {
		dispatch(showLoader());
		const currentMovie = await getInformationMovieById(movieId);
		dispatch(showInfoMovieById(currentMovie.data));
		dispatch(hideLoader());
	};
};

// auth

export const generateSessionAndGetUser = (requestToken) => {
	return async (dispatch) => {
		const { session_id } = await generateSessionID(requestToken);
		localStorage.setItem('session_id', session_id);

		const user = await getAccount(session_id);
		dispatch(fetchUserSuccess(user));
	};
};

// mark favorite

export const addToFavoriteMovie = (accountId, sessionId, movieId) => {
	return async (dispatch) => {
		const info = await markFavoriteMovie(
			accountId,
			sessionId,
			movieId,
		);
		console.log(info);
	};
};

// get favorite movies

export const showFavoriteMovies = (accountId, sessionId) => {
	return async (dispatch) => {
		dispatch(showLoader());
		const { results } = await getFavoriteMovies(accountId, sessionId);
		// console.log(results);

		dispatch(showFavoriteMoviesSuccess(results));
		dispatch(hideLoader());
	};
};
