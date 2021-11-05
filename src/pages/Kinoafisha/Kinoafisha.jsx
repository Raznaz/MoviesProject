import { Grid, Typography } from '@mui/material';
import React from 'react';
import Aside from '../../components/Layout/Aside';
import MoviesList from '../../components/Movies/MoviesList';

function Kinoafisha() {
	return (
		<>
			<Typography component="h1" variant="h2"></Typography>
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

export default Kinoafisha;
