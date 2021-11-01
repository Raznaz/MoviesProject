import { Filter } from '@mui/icons-material';

export const FETCH_MOVIES_SUCCESS = '[MOVIE] Fetch movies success';
export const SEARCH_MOVIES = '[MOVIE] Search movies';
export const SEARCH_MOVIES_ARR = '[MOVIE] Search movies arr';
export const LIST_GENRES = '[MOVIE] List genres';
export const FILTER_MOVIES = '[MOVIE] Filter movies';
export const CREATE_FILTER = '[MOVIE] Create filter';

export const fetchMoviesSuccess = (movies) => ({
	type: FETCH_MOVIES_SUCCESS,
	payload: { movies },
});

// TODO:Переименовать ф-ю
export const searchMovies = (value) => ({
	type: SEARCH_MOVIES,
	payload: { value },
});

// TODO:Переименовать ф-ю
export const searchMovieArr = (searchArr = []) => ({
	type: SEARCH_MOVIES_ARR,
	payload: { searchArr },
});

export const showListGenres = (genres) => ({
	type: LIST_GENRES,
	payload: { genres },
});

export const createFilter = (filter) => ({
	type: CREATE_FILTER,
	payload: filter,
});

export const filterMoviesByGenre = (filteredArr) => ({
	type: FILTER_MOVIES,
	payload: { filteredArr },
});
