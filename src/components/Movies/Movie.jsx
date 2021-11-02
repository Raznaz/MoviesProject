import { FavoriteBorder } from '@mui/icons-material';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CircularProgress,
	Grid,
	IconButton,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useDispatch } from 'react-redux';
import { getInfoAboutMovieById } from '../../redux/actions/thunk';

function Movie(props) {
	const { id, title, poster_path, release_date, vote_average } =
		props;
	const dispatch = useDispatch();

	const handleShowInfoById = (id) => {
		console.log('MOVIE', id);
		dispatch(getInfoAboutMovieById(id));
	};
	return (
		<Grid item xs={12} md={4}>
			<Card
				sx={{
					height: '100%',
					display: 'flex',
					flexDirection: 'column',
				}}
			>
				<CardMedia
					image={`https://image.tmdb.org/t/p/w500${poster_path}`}
					title={title}
					alt={title}
					sx={{ height: 400 }}
				/>
				<CardContent sx={{ flexGrow: 1 }}>
					<Typography variant="h6" component="h3">
						{title}
					</Typography>
					<Typography>{release_date}</Typography>
				</CardContent>
				<CardActions sx={{ justifyContent: 'space-between' }}>
					<IconButton>
						<FavoriteBorder />
					</IconButton>
					<Button onClick={() => handleShowInfoById(id)}>
						Show info
					</Button>
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
