import React from 'react';
import { useSelector } from 'react-redux';
import Movie from './Movie';

function MoviesList() {
	const { movies } = useSelector((state) => state.moviesArr);

	return (
		<div>
			{movies.map((movie) => {
				return <Movie key={movie.id} {...movie} />;
			})}
		</div>
	);
}

export default MoviesList;
