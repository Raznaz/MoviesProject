import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchMovie,
	filterMovie,
	findMovie,
} from '../../redux/actions/thunk';
import MoviesList from '../Movies/MoviesList';
import PaginationMovies from '../UI/Pagination/PaginationMovies';
import Aside from './Aside';

function Main() {
	const [page, setPage] = useState(1);
	const dispatch = useDispatch();
	const { searchValue, movies, filter, typeList } = useSelector(
		(state) => state.moviesArr,
	);

	useEffect(() => {
		dispatch(fetchMovie());
	}, [dispatch]);

	const handleChange = (event, value) => {
		setPage(value);
		if (typeList === 'search') {
			dispatch(findMovie(searchValue, value));
		}
		if (typeList === 'popular') {
			dispatch(fetchMovie(value));
		}
		// dispatch(filterMovie(filter, value));
	};

	return (
		<>
			<Typography component="h1" variant="h2">
				Welcome to MAIN COMPONENT
			</Typography>
			<Grid container spacing={2} sx={{ mb: 2 }}>
				<Grid item xs={3}>
					<Aside />
				</Grid>
				<Grid item xs={9}>
					<PaginationMovies
						totalPages={movies.total_pages}
						currentPage={page}
						handleChange={handleChange}
					/>
					<MoviesList />
				</Grid>
			</Grid>
		</>
	);
}

export default Main;
