import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovie, findMovie } from '../../redux/actions/thunk';
import MoviesList from '../Movies/MoviesList';
import Aside from './Aside';

function Main() {
	const dispatch = useDispatch();
	const { searchValue } = useSelector((state) => state.moviesArr);

	// console.log('search movies val', searchValue);

	useEffect(() => {
		dispatch(fetchMovie());
		searchValue && dispatch(findMovie(searchValue));
	}, [searchValue, dispatch]);
	return (
		<>
			<Typography component="h1" variant="h2">
				Welcome to MAIN COMPONENT
			</Typography>
			<Grid container spacing={2} sx={{ mb: 2 }}>
				<Grid item xs={3} sx={{ bgcolor: '#eee', p: 2 }}>
					<Aside />
				</Grid>
				<Grid item xs={9}>
					<MoviesList />
				</Grid>
			</Grid>
		</>
	);
}

export default Main;
