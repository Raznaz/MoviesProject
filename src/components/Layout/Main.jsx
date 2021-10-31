import { Grid } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../../redux/actions/thunk';
import MoviesList from '../Movies/MoviesList';
import Search from '../Search/Search';
import Aside from './Aside';

function Main() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovie());
	}, [dispatch]);
	return (
		<div>
			<h1>Main</h1>
			<Grid container spacing={2} sx={{ mb: 2 }}>
				<Grid item xs={3} sx={{ bgcolor: '#eee' }}>
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
