import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovie } from '../../redux/actions/thunk';
import MoviesList from '../Movies/MoviesList';

function Main() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovie());
	}, [dispatch]);
	return (
		<div>
			<h1>Main</h1>
			<MoviesList />
		</div>
	);
}

export default Main;
