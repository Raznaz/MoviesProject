import {
	fetchMovies,
	filterMovies,
	findMovies,
	getInformationMovieById,
	getListGenres,
	getListLanguages,
	// generateToken,
	generateSessionID,
	getAccount,
	getFavoriteMovies,
	getMovieStatusById,
} from '../../api/api';
import { markFavoriteMovie } from '../../api/apiUser';
import {
	hideLoader,
	openAlertSnackMsg,
	showLoader,
} from './appActions';
import {
	// fetchMovieReject,
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
			// console.log('movies thunk', movies);

			dispatch(fetchMoviesSuccess(movies.data));
			dispatch(hideLoader());
			// dispatch(toggleAlertSnackMsg('its my error for example'));
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
			// console.log('FILTER movie thunk', movies);
			dispatch(searchMovieArr(movies.data));
			dispatch(hideLoader());
		} catch (error) {
			dispatch(openAlertSnackMsg(error));
		}
	};
};

// FILTER
export const filterMovie = (filter, page) => {
	// console.log('111 filter:', filter);
	return async (dispatch) => {
		try {
			dispatch(showLoader());
			const filteredMovies = await filterMovies(filter, page);
			// console.log('FILTERED genres thunk', filteredMovies.data.results);
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
			// console.log('LIST genres thunk', genres.data);
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
			const languages = await getListLanguages();
			// console.log('LIST LANG thunk', languages.data);
			dispatch(showListLanguages(languages.data));
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
			const info = await markFavoriteMovie(
				accountId,
				sessionId,
				movieId,
			);
			console.log(info);
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
			console.log('get favorite movies', data);

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
			console.log('STATUS', data);
			dispatch(statusMovieById(data));
		} catch (error) {
			dispatch(openAlertSnackMsg(error));
		}
	};
};
