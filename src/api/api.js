import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_KEY;

export const testAPI = `${API_URL}`;

const movieAPI = axios.create({
	baseURL: testAPI,
	params: {
		api_key: API_KEY,
		language: 'en-US',
	},
});

export function fetchMovies() {
	return movieAPI.get('/movie/popular', {
		params: {},
	});
}

export function findMovies(str) {
	return movieAPI.get('/search/movie', {
		params: {
			query: str,
		},
	});
}

export function getListGenres() {
	return movieAPI.get('/genre/movie/list');
}

export function getListLanguages() {
	return movieAPI.get('/configuration/languages');
}

// TODO:Преобразовать массив в строку
export function filterMovies(filter) {
	const genresStr = filter.genres.join(',');
	console.log(genresStr, filter.language);
	return movieAPI.get('discover/movie', {
		params: {
			sort_by: 'popularity.desc',
			with_genres: genresStr,
			// with_genres: filter.genres[0],
			with_original_language: filter.language,
		},
	});
}
