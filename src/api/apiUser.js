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
