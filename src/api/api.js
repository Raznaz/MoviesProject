import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_KEY;

const movieAPI = axios.create({
	baseURL: API_URL,
	params: {
		api_key: API_KEY,
		language: 'en-US',
	},
});

// POPULAR MOVIES
export function fetchMovies(page) {
	return movieAPI.get('/movie/popular', {
		params: {
			page: page,
		},
	});
}

//FIND MOVIE
export function findMovies(str, page) {
	return movieAPI.get('/search/movie', {
		params: {
			query: str,
			page: page,
		},
	});
}

// LIST GENRES
export function getListGenres() {
	return movieAPI.get('/genre/movie/list');
}

// LIST LANGUAGES
export function getListLanguages() {
	return movieAPI.get('/configuration/languages');
}

// FILTER
export function filterMovies(filter, page) {
	const genresStr = filter.genres.join(',');
	return movieAPI.get('/discover/movie', {
		params: {
			sort_by: 'popularity.desc',
			with_genres: genresStr,
			with_original_language: filter.language,
			page: page,
		},
	});
}

// MOVIE BY ID
export function getInformationMovieById(movieId) {
	return movieAPI.get(`/movie/${movieId}`);
}

// SHOW FAVORITE MOVIES
export const getFavoriteMovies = async (accountId, sessionId) => {
	const { data } = await movieAPI.get(
		`/account/${accountId}/favorite/movies`,
		{
			params: {
				session_id: sessionId,
				sort_by: 'created_at.desc',
			},
		},
	);

	return data;
};

// GET MOVIE STATUS
export const getMovieStatusById = async (session_id, movieId) => {
	const { data } = await movieAPI.get(
		`/movie/${movieId}/account_states`,
		{
			params: {
				session_id,
			},
		},
	);
	return data;
};
