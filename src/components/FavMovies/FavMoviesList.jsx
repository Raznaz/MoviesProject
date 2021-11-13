import { List } from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { showFavoriteMovies } from '../../redux/actions/thunk';
import Loader from '../UI/Loader/Loader';
import FavMovieItem from './FavMovieItem';
import { Typography } from '@mui/material';

function FavMoviesList() {
	const dispatch = useDispatch();
	useEffect(() => {
		const sessionId = localStorage.getItem('session_id');
		const { id: accountId } = JSON.parse(
			localStorage.getItem('user'),
		);
		// console.log('FAV', accountId, sessionId);
		dispatch(showFavoriteMovies(accountId, sessionId));
	}, [dispatch]);

	const { favoriteMovies } = useSelector((state) => state.moviesArr);
	const { isLoading } = useSelector((state) => state.app);
	console.log(favoriteMovies.results);
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
		<>
			<List
				sx={{
					width: '100%',
					// maxWidth: 360,
					bgcolor: 'background.paper',
				}}
			>
				{favoriteMovies.results &&
					favoriteMovies.results.map((movie) => (
						// <div key={movie.id}>{movie.title}</div>
						<FavMovieItem key={movie.id} {...movie} />
					))}
			</List>
		</>
	);
}

export default FavMoviesList;
