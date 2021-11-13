import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { changePageNumber } from '../../redux/actions/movieActinos';
import {
	closeAlertSnackMsg,
	toggleSnackMessage,
} from '../../redux/actions/appActions';
// import {
// 	fetchMovie,
// 	filterMovie,
// 	findMovie,
// } from '../../redux/actions/thunk';
import MoviesList from '../Movies/MoviesList';
// import PaginationMovies from '../UI/Pagination/PaginationMovies';
import Snack from '../UI/Snack/Snack';
import Aside from './Aside';
import SnackAlert from '../UI/Snack/SnackAlert';

function Main() {
	// const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(fetchMovie());
	// 	dispatch(changePageNumber(1));
	// }, [dispatch]);

	// const {
	// 	searchValue,
	// 	movies,
	// 	filter,
	// 	typeList,
	// 	pageNumberPagination,
	// } = useSelector((state) => state.moviesArr);

	const { isOpenSnack, isOpenAlert, errorMsg } = useSelector(
		(state) => state.app,
	);

	// const handleChange = (event, value) => {
	// 	// setPage(value);
	// 	dispatch(changePageNumber(value));
	// 	if (typeList === 'search') {
	// 		dispatch(findMovie(searchValue, value));
	// 	}
	// 	if (typeList === 'popular') {
	// 		dispatch(fetchMovie(value));
	// 	}
	// 	if (typeList === 'filtered') {
	// 		dispatch(filterMovie(filter, value));
	// 	}
	// };

	return (
		<>
			<Container maxWidth="lg">
				<Typography component="h1" variant="h2">
					Welcome to MAIN COMPONENT
				</Typography>
				<Grid container spacing={2} sx={{ mb: 2 }}>
					<Grid item xs={3}>
						<Aside />
					</Grid>
					<Grid item xs={9}>
						{/* <PaginationMovies
						totalPages={movies.total_pages}
						currentPage={pageNumberPagination}
						handleChange={handleChange}
					/> */}
						<MoviesList />
						{/* <PaginationMovies
						totalPages={movies.total_pages}
						currentPage={pageNumberPagination}
						handleChange={handleChange}
					/> */}
					</Grid>
				</Grid>
				<Snack
					isOpen={isOpenSnack}
					handleClose={() => dispatch(toggleSnackMessage())}
				/>
				<SnackAlert
					isOpen={isOpenAlert}
					handleClose={() => dispatch(closeAlertSnackMsg())}
					error={errorMsg}
				/>
			</Container>
		</>
	);
}

export default Main;
