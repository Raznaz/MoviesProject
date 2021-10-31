import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovieArr } from '../../redux/actions/movieActinos';
import { fetchMovie } from '../../redux/actions/thunk';
import MoviesList from '../Movies/MoviesList';
import Search from '../Search/Search';
import Aside from './Aside';

function Main() {
	const dispatch = useDispatch();
	const { searchValue } = useSelector((state) => state.moviesArr);
	console.log('search movies val', searchValue);

	useEffect(() => {
		fetch(
			`https://api.themoviedb.org/3/search/movie?api_key=868ccff9b112bafa6fc5b459b7d845a5&language=en-US&query=${searchValue}&page=1&include_adult=false`,
		)
			.then((response) => response.json())
			.then((data) => dispatch(searchMovieArr(data.results)));
		// .then((data) => console.log(data.results));

		dispatch(fetchMovie());
	}, [searchValue]);
	return (
		<div>
			<h1>Main</h1>
			<Grid container spacing={2} sx={{ mb: 2 }}>
				<Grid item xs={3} sx={{ bgcolor: '#eee', p: 2 }}>
					<Aside />
				</Grid>
				<Grid item xs={9}>
					<MoviesList />
				</Grid>
			</Grid>
		</div>
	);
}

export default Main;
