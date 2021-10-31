import { fetchMovies, filterMovies } from '../../api/api';
import { fetchMoviesSuccess, searchMovieArr } from './movieActinos';

export const fetchMovie = () => {
	return async (dispatch) => {
		const movies = await Promise.resolve(fetchMovies());
		console.log('movies thunk', movies);
		dispatch(fetchMoviesSuccess(movies.data.results));
	};
};

export const filterMovie = (searchValue) => {
	return async (dispatch) => {
		const movies = await Promise.resolve(filterMovies(searchValue));
		console.log('FILTER movie thunk', movies);
		dispatch(searchMovieArr(movies.data.results));
	};
};
