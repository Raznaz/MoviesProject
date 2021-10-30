import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_KEY;

export const testAPI = `${API_URL}${API_KEY}`;
// var 1
const instaAPI = axios.create({
	baseURL: testAPI,
});

export function fetchMovies() {
	return instaAPI.get();
}

// var 2
export const api = {
	async getMovies(filter = 'upcoming') {
		const { data } = await axios.get(`${API_URL}${API_KEY}`);
		return data.results;
	},
};
