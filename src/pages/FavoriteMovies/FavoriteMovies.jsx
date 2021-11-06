import React from 'react';
import { Typography } from '@mui/material';
import FavMoviesList from '../../components/FavMovies/FavMoviesList';

function FavoriteMovies() {
	return (
		<>
			<Typography component="h1" variant="h6" sx={{ mb: 2 }}>
				Favorites movies
			</Typography>
			<FavMoviesList />
		</>
	);
}

export default FavoriteMovies;
