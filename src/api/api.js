import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_KEY;

export const testAPI = `${API_URL}`;

const movieAPI = axios.create({
	baseURL: testAPI,
	params: {
		api_key: API_KEY,
	},
});

export function fetchMovies() {
	return movieAPI.get('movie/popular', {
		params: {},
	});
}

export function filterMovies(str) {
	return movieAPI.get('search/movie', {
		params: {
			language: 'en-US',
			query: str,
		},
	});
}

// var 2
// export const api = {
// 	async getMovies(filter = 'upcoming') {
// 		const { data } = await axios.get(`${API_URL}${API_KEY}`);
// 		return data.results;
// 	},
// };

// Core
// import axios from 'axios';

// Instruments
// import { delay } from '../helpers';

// const API_URL = process.env.REACT_APP_API_URL;

// export const api = {
//     async getMovies(filter = 'upcoming') {
//         await delay(3000); // simulate bad internet

//         const { data: movies } = await axios.get(
//             `${API_URL}/movies?filter=${filter}`,
//         );

//         return movies;
//     },

//     async getMovieById(id) {
//         await delay(3000); // simulate bad internet

//         const { data: movie } = await axios.get(`${API_URL}/movies/${id}`);

//         return movie;
//     },
// };
