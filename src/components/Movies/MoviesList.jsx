import { Grid } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import Movie from './Movie';

function MoviesList() {
	const { movies } = useSelector((state) => state.moviesArr);

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
			{movies.map((movie) => {
				return <Movie key={movie.id} {...movie} />;
			})}
		</Grid>
	);
}

export default MoviesList;
