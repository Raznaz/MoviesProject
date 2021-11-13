import { Favorite, FavoriteBorder } from '@mui/icons-material';
import noImage from '../../theme/images/noImage.png';
import {
	Card,
	CardActionArea,
	CardActions,
	CardContent,
	CardMedia,
	CircularProgress,
	Grid,
	IconButton,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { getImage } from '../../helper/getImage';
import { toggleSnackMessage } from '../../redux/actions/appActions';
import { addToFavoriteMovie } from '../../redux/actions/thunk';

import { getMovieStatusById } from '../../api/api';
import { useFetching } from '../../hooks/useFetching';

function Movie(props) {
	const { id, title, poster_path, release_date, vote_average } =
		props;
	const dispatch = useDispatch();

	const [status, setStatus] = useState(false);

	const [fetchMovie] = useFetching(async () => {
		const sessionId = localStorage.getItem('session_id');
		const data = await getMovieStatusById(sessionId, id);
		setStatus(data.favorite);
	});
	useEffect(() => {
		fetchMovie();
		return () => {
			setStatus();
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const history = useHistory();
	// const { favoriteMovies, statusMovie } = useSelector(
	// 	(state) => state.moviesArr,
	// );

	const image = getImage(poster_path, noImage);

	const handleAddToFavorite = () => {
		const sessionId = localStorage.getItem('session_id');
		const { id: accountId } = JSON.parse(
			localStorage.getItem('user'),
		);

		console.log('ADD TO FAVORITE');
		dispatch(addToFavoriteMovie(accountId, sessionId, id));
		// NOTE: test show amount fav movies
		// dispatch(showFavoriteMovies(accountId, sessionId));
		dispatch(toggleSnackMessage());
		// check status
		// dispatch(showStatusMovieById(sessionId, id));
		// fetchMovie();
		setStatus(true);
	};
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card
				sx={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<CardActionArea onClick={() => history.push(`movie/${id}`)}>
					<CardMedia
						image={image}
						// image={noImage}
						title={title}
						alt={title}
						sx={{ height: 400 }}
					/>
				</CardActionArea>
				<CardContent sx={{ flexGrow: 1 }}>
					<Typography variant="h6" component="h3">
						{title}
					</Typography>
					<Typography>{release_date}</Typography>
				</CardContent>
				<CardActions sx={{ justifyContent: 'space-between' }}>
					{/* {favoriteMovies.results &&
					favoriteMovies.results.find((item) => item.id === id) ? (
						<Favorite sx={{ color: 'error.dark' }} />
					) : (
						<IconButton onClick={() => handleAddToFavorite()}>
							{status ? (
								<Favorite sx={{ color: 'error.dark' }} />
							) : (
								<FavoriteBorder />
							)}
						</IconButton>
					)} */}
					{status ? (
						<Favorite sx={{ color: 'error.dark' }} />
					) : (
						<IconButton onClick={() => handleAddToFavorite()}>
							<FavoriteBorder />
						</IconButton>
					)}

					{/* <Link
						// onClick={() => handleShowInfoById(id)}
						to={`/movie/${id}`}
					>
						Show info
					</Link> */}
					<Box
						sx={{
							position: 'relative',
							display: 'inline-flex',
							top: 1,
						}}
					>
						<CircularProgress
							variant="determinate"
							thickness={5}
							value={vote_average * 10}
						/>
						<Box
							sx={{
								top: 0,
								left: 0,
								bottom: 0,
								right: 0,
								position: 'absolute',
								display: 'flex',
								alignItems: 'center',
								justifyContent: 'center',
							}}
						>
							<Typography
								variant="caption"
								component="div"
								color="text.secondary"
							>
								{vote_average * 10}%
							</Typography>
						</Box>
					</Box>
				</CardActions>
			</Card>
		</Grid>
	);
}

export default Movie;
