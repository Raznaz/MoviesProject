import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
	fetchMovie,
	filterMovie,
	findMovie,
} from '../../redux/actions/thunk';
import Loader from '../UI/Loader/Loader';
import Movie from './Movie';
import { changePageNumber } from '../../redux/actions/movieActinos';
import PaginationMovies from '../UI/Pagination/PaginationMovies';

function MoviesList() {
	const { movies } = useSelector((state) => state.moviesArr);
	const { isLoading } = useSelector((state) => state.app);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovie());
		dispatch(changePageNumber(1));
	}, [dispatch]);

	const { searchValue, filter, typeList, pageNumberPagination } =
		useSelector((state) => state.moviesArr);

	const handleChange = (event, value) => {
		dispatch(changePageNumber(value));

		if (typeList === 'search') {
			dispatch(findMovie(searchValue, value));
		}
		if (typeList === 'popular') {
			dispatch(fetchMovie(value));
		}
		if (typeList === 'filtered') {
			dispatch(filterMovie(filter, value));
		}
	};

	if (isLoading) {
		return <Loader />;
	}
	if (movies.results && !movies.results.length) {
		return (
			<Grid
				container
				direction="column"
				alignItems="center"
				justifyContent="center"
				style={{ minHeight: '50vh' }}
			>
				<Grid item xs={3} sx={{ textAlign: 'center' }}>
					<Typography component="h3" variant="h6">
						WE HAVE SEARCHED AND SEARCHED, BUT COULD NOT FIND IT.
					</Typography>
					<Typography component="p" variant="p">
						Try to change your request
					</Typography>
				</Grid>
			</Grid>
		);
	}

	return (
		<>
			<PaginationMovies
				totalPages={movies.total_pages}
				currentPage={pageNumberPagination}
				handleChange={handleChange}
			/>
			<Grid container spacing={2}>
				{movies.results &&
					movies.results.map((movie) => {
						return <Movie key={movie.id} {...movie} />;
					})}
			</Grid>
			<PaginationMovies
				totalPages={movies.total_pages}
				currentPage={pageNumberPagination}
				handleChange={handleChange}
			/>
		</>
	);
}

export default MoviesList;
