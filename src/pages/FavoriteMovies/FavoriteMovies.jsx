import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import Aside from '../../components/Layout/Aside';
import MoviesList from '../../components/Movies/MoviesList';
import { fetchMovie, findMovie } from '../../redux/actions/thunk';

function Kinoafisha() {
	// const dispatch = useDispatch();
	// const { searchValue } = useSelector((state) => state.moviesArr);

	// // console.log('search movies val', searchValue);
	// useEffect(() => {
	// 	dispatch(fetchMovie());
	// 	searchValue && dispatch(findMovie(searchValue));
	// }, [searchValue, dispatch]);
	return (
		<>
			<Typography component="h1" variant="h6" sx={{ mb: 2 }}>
				Kino afisha page
			</Typography>
			{/* <Grid container spacing={2} sx={{ mb: 2 }}>
				<Grid item xs={3} sx={{ bgcolor: '#eee', p: 2 }}>
					<Aside />
				</Grid>
				<Grid item xs={9}>
					<MoviesList />
				</Grid>
			</Grid> */}
		</>
	);
}

export default Kinoafisha;
