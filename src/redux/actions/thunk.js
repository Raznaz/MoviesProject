import { api, fetchMovies } from '../../api/api';
import { fetchMoviesSuccess } from './movieActinos';

export const fetchMovie = () => {
	return async (dispatch) => {
		const movies = await Promise.resolve(fetchMovies());
		console.log('movies thunk', movies);
		dispatch(fetchMoviesSuccess(movies.data.results));
	};
};

export const axiosMovie = () => {
	return async (dispatch) => {
		const mymovies = await Promise.resolve(api.getMovies());
		console.log('axios thunk', mymovies);
	};
};
