export const FETCH_MOVIES_SUCCESS = '[MOVIE] Fetch movies success';
export const SEARCH_MOVIES = '[MOVIE] Search movies';
export const SEARCH_MOVIES_ARR = '[MOVIE] Search movies arr';

export const fetchMoviesSuccess = (movies) => ({
	type: FETCH_MOVIES_SUCCESS,
	payload: { movies },
});

export const searchMovies = (value) => ({
	type: SEARCH_MOVIES,
	payload: { value },
});

export const searchMovieArr = (searchArr = []) => ({
	type: SEARCH_MOVIES_ARR,
	payload: { searchArr },
});
