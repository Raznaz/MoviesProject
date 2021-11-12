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

export const markFavoriteMovie = async (
	accountId,
	sessionId,
	movieId,
) => {
	const data = await movieAPI.post(
		`/account/${accountId}/favorite`,
		{
			media_type: 'movie',
			media_id: movieId,
			favorite: true,
		},
		{
			params: {
				session_id: sessionId,
			},
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
		},
	);
	console.log(data);
	return data;
};
