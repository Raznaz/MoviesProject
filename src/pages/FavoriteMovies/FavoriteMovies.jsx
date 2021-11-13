import React from 'react';
import { Container, Typography } from '@mui/material';
import FavMoviesList from '../../components/FavMovies/FavMoviesList';

function FavoriteMovies() {
	return (
		<Container maxWidth="lg">
			<Typography component="h1" variant="h6" sx={{ mb: 2 }}>
				Favorites movies
			</Typography>
			<FavMoviesList />
		</Container>
	);
}

export default FavoriteMovies;
