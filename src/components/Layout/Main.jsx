import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchMovieArr } from '../../redux/actions/movieActinos';
import { fetchMovie, filterMovie } from '../../redux/actions/thunk';
import MoviesList from '../Movies/MoviesList';
import Search from '../Search/Search';
import Aside from './Aside';

function Main() {
	const dispatch = useDispatch();
	const { searchValue } = useSelector((state) => state.moviesArr);
	console.log('search movies val', searchValue);

	useEffect(() => {
		console.log(searchValue.length);
		if (searchValue.length) {
			dispatch(filterMovie(searchValue));
		}
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
