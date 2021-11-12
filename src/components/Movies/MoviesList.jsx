import { Grid, Typography } from '@mui/material';
// import React from 'react';
// import { useSelector } from 'react-redux';
import Loader from '../UI/Loader/Loader';
import Movie from './Movie';

// import { Grid, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changePageNumber } from '../../redux/actions/movieActinos';
import {
	closeAlertSnackMsg,
	toggleSnackMessage,
} from '../../redux/actions/appActions';
import {
	fetchMovie,
	filterMovie,
	findMovie,
} from '../../redux/actions/thunk';
// import MoviesList from '../Movies/MoviesList';
import PaginationMovies from '../UI/Pagination/PaginationMovies';
import { Box } from '@mui/system';
// import Snack from '../UI/Snack/Snack';
// import Aside from './Aside';
// import SnackAlert from '../UI/Snack/SnackAlert';

function MoviesList() {
	const { movies } = useSelector((state) => state.moviesArr);
	const { isLoading } = useSelector((state) => state.app);

	// useEffect(() => {
	// 	const sessionId = localStorage.getItem('session_id');
	// 	dispatch(showStatusMovieById(sessionId, id));
	// }, [dispatch, id]);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchMovie());
		dispatch(changePageNumber(1));
	}, [dispatch]);

	const { searchValue, filter, typeList, pageNumberPagination } =
		useSelector((state) => state.moviesArr);

	const handleChange = (event, value) => {
		// setPage(value);
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
			<>
				<Grid
					container
					spacing={0}
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
			</>
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
