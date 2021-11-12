import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_KEY;

// export const testAPI = `${API_URL}`;

const movieAPI = axios.create({
	baseURL: API_URL,
	params: {
		api_key: API_KEY,
		language: 'en-US',
	},
});

// TEST MOVIE
// export const getMovie = async (movieId) => {
// 	const { data } = await movieAPI.get(`/movie/${movieId}`);
// 	return data;
// };

// POPULAR MOVIES
export function fetchMovies(page) {
	return movieAPI.get('/movie/popular', {
		params: {
			page: page,
		},
	});
}

//FIND MOVIE
// TODO: Исправить значение по умолчанию при поиске
export function findMovies(str, page) {
	return movieAPI.get('/search/movie', {
		params: {
			query: str,
			page: page,
		},
	});
}

export function getListGenres() {
	return movieAPI.get('/genre/movie/list');
}

export function getListLanguages() {
	return movieAPI.get('/configuration/languages');
}

// FILTER TODO:Преобразовать массив в строку
export function filterMovies(filter, page) {
	const genresStr = filter.genres.join(',');
	// console.log(genresStr, filter.language);
	return movieAPI.get('/discover/movie', {
		params: {
			sort_by: 'popularity.desc',
			with_genres: genresStr,
			with_original_language: filter.language,
			page: page,
		},
	});
}

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
