import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Loader from '../UI/Loader/Loader';
import Movie from './Movie';

function MoviesList() {
	const { movies } = useSelector((state) => state.moviesArr);
	const { isLoading } = useSelector((state) => state.app);

	if (isLoading) {
		return <Loader />;
	}
	// if (searchValue.length) {
	// 	return (
	// 		<Grid container spacing={2}>
	// 			{searchMovies.map((movie) => {
	// 				return <Movie key={movie.id} {...movie} />;
	// 			})}
	// 		</Grid>
	// 	);
	// }

	return (
		<Grid container spacing={2}>
			{movies.results &&
				movies.results.map((movie) => {
					return <Movie key={movie.id} {...movie} />;
				})}
		</Grid>
	);
}

export default MoviesList;
