import React from 'react';
import { Container, Typography } from '@mui/material';
import FavMoviesList from '../../components/FavMovies/FavMoviesList';

function FavoriteMovies() {
	return (
		<Container maxWidth="lg">
			<Typography
				component="h1"
				variant="h2"
				sx={{ mb: 2, fontWeight: 700, textAlign: 'center' }}
			>
				FAVORITE MOVIES
			</Typography>
			<FavMoviesList />
		</Container>
	);
}

export default FavoriteMovies;
