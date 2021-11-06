import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { showFavoriteMovies } from '../../redux/actions/thunk';

function FavMoviesList() {
	const dispatch = useDispatch();
	useEffect(() => {
		const sessionId = localStorage.getItem('session_id');
		const { id: accountId } = JSON.parse(
			localStorage.getItem('user'),
		);
		console.log('FAV', accountId, sessionId);
		dispatch(showFavoriteMovies(accountId, sessionId));
	}, []);

	const { favoriteMovies } = useSelector((state) => state.moviesArr);

	return (
		<div>
			<h1>FAVORITE LIST</h1>
			{favoriteMovies.map((movie) => (
				<div key={movie.id}>{movie.title}</div>
			))}
		</div>
	);
}

export default FavMoviesList;
