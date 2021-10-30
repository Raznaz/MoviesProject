import React from 'react';

function Movie(props) {
	const { id, title, overview, poster_path } = props;
	return (
		<div>
			<h1>Movie: {title}</h1>
			<div>id:{id}</div>
			<div>title: {title}</div>
			<div>overview: {overview}</div>
			<img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
		</div>
	);
}

export default Movie;
