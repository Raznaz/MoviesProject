import {
	fetchMovies,
	filterMovies,
	findMovies,
	getInformationMovieById,
	getListGenres,
	getListLanguages,
	getFavoriteMovies,
	getMovieStatusById,
} from '../../api/api';
import {
	getAccount,
	markFavoriteMovie,
	generateSessionID,
} from '../../api/apiUser';
import {
	hideLoader,
	openAlertSnackMsg,
	showLoader,
} from './appActions';
import {
	fetchMoviesSuccess,
	filterMoviesByGenre,
	searchMovieArr,
	showFavoriteMoviesSuccess,
	showInfoMovieById,
	showListGenres,
	showListLanguages,
	statusMovieById,
} from './movieActinos';
import { fetchUserSuccess } from './userActions';

// POPULAR MOVIES
export const fetchMovie = (page = 1) => {
	return async (dispatch) => {
		try {
			dispatch(showLoader());
			const movies = await fetchMovies(page);
			dispatch(fetchMoviesSuccess(movies.data));
			dispatch(hideLoader());
		} catch (error) {
			dispatch(openAlertSnackMsg(error));
		}
	};
};

// FIND
export const findMovie = (searchValue, page) => {
	return async (dispatch) => {
		try {
			dispatch(showLoader());
			const movies = await findMovies(searchValue, page);
			dispatch(searchMovieArr(movies.data));
			dispatch(hideLoader());
		} catch (error) {
			dispatch(openAlertSnackMsg(error));
		}
	};
};

// FILTER
export const filterMovie = (filter, page) => {
	return async (dispatch) => {
		try {
			dispatch(showLoader());
			const filteredMovies = await filterMovies(filter, page);
			dispatch(filterMoviesByGenre(filteredMovies.data));
			dispatch(hideLoader());
		} catch (error) {
			dispatch(openAlertSnackMsg(error));
		}
	};
};

// GENRES
export const listGenres = () => {
	return async (dispatch) => {
		try {
			const genres = await getListGenres();
			dispatch(showListGenres(genres.data.genres));
		} catch (error) {
			dispatch(openAlertSnackMsg(error));
		}
	};
};

// LANGUAGES
export const listLanguages = () => {
	return async (dispatch) => {
		try {
			dispatch(showLoader());
			const languages = await getListLanguages();
			dispatch(showListLanguages(languages.data));
			dispatch(hideLoader());
		} catch (error) {
			dispatch(openAlertSnackMsg(error));
		}
	};
};

// SHOW INFO MOVIE
export const getInfoAboutMovieById = (movieId) => {
	return async (dispatch) => {
		try {
			dispatch(showLoader());
			const currentMovie = await getInformationMovieById(movieId);
			dispatch(showInfoMovieById(currentMovie.data));
			dispatch(hideLoader());
		} catch (error) {
			dispatch(openAlertSnackMsg(error));
		}
	};
};

// auth

export const generateSessionAndGetUser = (requestToken) => {
	return async (dispatch) => {
		try {
			const { session_id } = await generateSessionID(requestToken);
			localStorage.setItem('session_id', session_id);
			const user = await getAccount(session_id);
			dispatch(fetchUserSuccess(user));
		} catch (error) {
			dispatch(openAlertSnackMsg(error));
		}
	};
};

// mark favorite

export const addToFavoriteMovie = (accountId, sessionId, movieId) => {
	return async (dispatch) => {
		try {
			await markFavoriteMovie(accountId, sessionId, movieId);
		} catch (error) {
			dispatch(openAlertSnackMsg(error));
		}
	};
};

// get favorite movies

export const showFavoriteMovies = (accountId, sessionId) => {
	return async (dispatch) => {
		try {
			dispatch(showLoader());
			const data = await getFavoriteMovies(accountId, sessionId);

			dispatch(showFavoriteMoviesSuccess(data));
			dispatch(hideLoader());
		} catch (error) {
			dispatch(openAlertSnackMsg(error));
		}
	};
};

// get status movie

export const showStatusMovieById = (sessionId, movieId) => {
	return async (dispatch) => {
		try {
			const data = await getMovieStatusById(sessionId, movieId);
			dispatch(statusMovieById(data));
		} catch (error) {
			dispatch(openAlertSnackMsg(error));
		}
	};
};
