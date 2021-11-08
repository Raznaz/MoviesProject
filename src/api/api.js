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

export function getListGenres() {
	return movieAPI.get('/genre/movie/list');
}

export function getListLanguages() {
	return movieAPI.get('/configuration/languages');
}

// TODO:Преобразовать массив в строку
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
