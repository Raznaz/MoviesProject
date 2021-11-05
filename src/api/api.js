import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_IMAGE_URL = process.env.REACT_APP_API_IMAGE_URL;
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
export const getMovie = async (movieId) => {
	const { data } = await movieAPI.get(`/movie/${movieId}`);
	return data;
};

// TOKEN
export const generateToken = async () => {
	const {
		data: { request_token },
	} = await movieAPI.get(`/authentication/token/new`);
	// localStorage.setItem('request_token', request_token); //Проверить
	return request_token;
};

// SESSION ID

export const generateSessionID = async (requestToken) => {
	const { data: session_id } = await movieAPI.post(
		'/authentication/session/new',
		{
			request_token: requestToken,
		},
	);
	localStorage.setItem('session_id', session_id);
	return session_id;
};

// GET ACCOUNT
export const getAccount = async (sessionId) => {
	const { data } = await movieAPI.get('/account', {
		params: {
			session_id: sessionId,
		},
	});
	localStorage.setItem('user', JSON.stringify(data));
	return data;
};

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
	// console.log(genresStr, filter.language);
	return movieAPI.get('/discover/movie', {
		params: {
			sort_by: 'popularity.desc',
			with_genres: genresStr,
			with_original_language: filter.language,
		},
	});
}

export function getInformationMovieById(movieId) {
	return movieAPI.get(`/movie/${movieId}`);
}
