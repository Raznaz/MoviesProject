export const FETCH_MOVIES_SUCCESS = '[MOVIE] Fetch movies success';
export const SEARCH_MOVIES = '[MOVIE] Search movies';
export const SEARCH_MOVIES_ARR = '[MOVIE] Search movies arr';
export const LIST_GENRES = '[MOVIE] List genres';
export const LIST_LANGUAGES = '[MOVIE] List languages';
export const FILTER_MOVIES = '[MOVIE] Filter movies';
export const CREATE_FILTER_LANGUAGE =
	'[MOVIE] Create filter language';
export const CREATE_FILTER_GENRES = '[MOVIE] Create filter genres';
export const RESET_FILTER = '[MOVIE] Reset filter';
export const INFO_MOVIE_BY_ID = '[MOVIE] Show info movie by ID';
export const SHOW_FAVORITE_MOVIES = '[MOVIE] Show favorite movies';
export const PAGE_NUMBER_PAGINATION =
	'[MOVIES] Page number pagination';

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
export const searchMovieArr = (searchArr) => ({
	type: SEARCH_MOVIES_ARR,
	payload: { searchArr },
});

export const showListGenres = (genres) => ({
	type: LIST_GENRES,
	payload: { genres },
});

export const showListLanguages = (lang) => ({
	type: LIST_LANGUAGES,
	payload: { lang },
});

//  TODO:Возможно не нужен этот action creator
export const createFilterLanguage = (lang) => ({
	type: CREATE_FILTER_LANGUAGE,
	payload: { lang },
});
export const createFilterGenres = (id) => ({
	type: CREATE_FILTER_GENRES,
	payload: { id },
});

export const resetFilter = () => ({
	type: RESET_FILTER,
});

export const filterMoviesByGenre = (filteredArr) => ({
	type: FILTER_MOVIES,
	payload: { filteredArr },
});

export const showInfoMovieById = (id) => ({
	type: INFO_MOVIE_BY_ID,
	payload: { id },
});

export const showFavoriteMoviesSuccess = (favMovies) => ({
	type: SHOW_FAVORITE_MOVIES,
	payload: { favMovies },
});

export const changePageNumber = (pageNumber) => ({
	type: PAGE_NUMBER_PAGINATION,
	payload: { pageNumber },
});

// amount favorite movies
