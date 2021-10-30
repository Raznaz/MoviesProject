import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { api, test } from '../../api/api';
import { fetchMovie } from '../../redux/actions/thunk';
import MoviesList from '../Movies/MoviesList';

function Main() {
	const [movies, setMovies] = useState([]);

	const dispatch = useDispatch();

	useEffect(() => {
		fetch(
			'https://api.themoviedb.org/3/movie/popular?api_key=868ccff9b112bafa6fc5b459b7d845a5',
		)
			.then((response) => response.json())
			.then((data) => setMovies(data.results));

		// const ax = api
		// 	.getMovies()
		// 	.then((resoponse) => console.log(resoponse));
		// console.log(ax);

		// ====
		dispatch(fetchMovie());
	}, []);
	return (
		<div>
			<h1>Main</h1>
			<MoviesList movies={movies} />
		</div>
	);
}

export default Main;
