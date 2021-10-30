export const FETCH_MOVIES_SUCCESS = '[MOVIE] Fetch movies success';

export const fetchMoviesSuccess = (movies) => ({
	type: FETCH_MOVIES_SUCCESS,
	payload: { movies },
});
