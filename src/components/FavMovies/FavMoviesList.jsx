import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { List, Typography } from '@mui/material';
import FavMovieItem from './FavMovieItem';
import { showFavoriteMovies } from '../../redux/actions/thunk';
import Loader from '../UI/Loader/Loader';

function FavMoviesList() {
	const dispatch = useDispatch();

	useEffect(() => {
		const sessionId = localStorage.getItem('session_id');
		const { id: accountId } = JSON.parse(
			localStorage.getItem('user'),
		);
		dispatch(showFavoriteMovies(accountId, sessionId));
	}, [dispatch]);

	const { favoriteMovies } = useSelector((state) => state.moviesArr);
	const { isLoading } = useSelector((state) => state.app);

	if (isLoading) {
		return <Loader />;
	}

	if (!favoriteMovies.results || !favoriteMovies.results.length) {
		return (
			<Typography
				component="p"
				variant="h6"
				color="error.dark"
				sx={{ fontWeight: '700', textAlign: 'center', mt: '3rem' }}
			>
				You don't have any favorite movies.
			</Typography>
		);
	}

	return (
		<List
			sx={{
				width: '100%',
				bgcolor: 'background.paper',
			}}
		>
			{favoriteMovies.results &&
				favoriteMovies.results.map((movie) => (
					<FavMovieItem key={movie.id} {...movie} />
				))}
		</List>
	);
}

export default FavMoviesList;
