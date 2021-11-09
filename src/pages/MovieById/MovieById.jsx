import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getInfoAboutMovieById } from '../../redux/actions/thunk';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import {
	Divider,
	Grid,
	ImageList,
	ImageListItem,
	Typography,
} from '@mui/material';
import Loader from '../../components/UI/Loader/Loader';

function MovieById() {
	const { movieId } = useParams();
	// console.log(movieId);
	const dispatch = useDispatch();
	const { movieById } = useSelector((state) => state.moviesArr);
	// console.log(movieById);
	// console.log(movieById.production_companies);
	useEffect(() => {
		dispatch(getInfoAboutMovieById(movieId));
	}, [movieId, dispatch]);

	const { isLoading } = useSelector((state) => state.app);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<>
			<Typography
				component="h2"
				variant="h2"
				sx={{ textAlign: 'center', fontWeight: '700' }}
			>
				{movieById.original_title}
			</Typography>
			<Grid container spacing={2}>
				<Grid item xs={6}>
					<Card sx={{ maxWidth: 345 }}>
						<CardMedia
							component="img"
							alt="green iguana"
							height="100%"
							image={`https://image.tmdb.org/t/p/w500/${movieById.poster_path}`}
						/>
						<CardContent>
							{/* TODO: исправить этот текст */}
							<Typography gutterBottom variant="h5" component="div">
								Lizard
							</Typography>
							<Typography variant="body2" color="text.secondary">
								Lizards are a widespread group of squamate reptiles,
								with over 6,000 species, ranging across all continents
								except Antarctica
							</Typography>
						</CardContent>
						<CardActions>
							<Button size="small">Share</Button>
							<Button size="small">Learn More</Button>
						</CardActions>
					</Card>
				</Grid>
				<Grid item xs={6}>
					<Typography component="div" variant="h5">
						{movieById.homepage}
					</Typography>
					<Divider />
					<Typography component="div" variant="h5">
						{movieById.overview}
					</Typography>
					<img
						src={`https://image.tmdb.org/t/p/w500/${movieById.backdrop_path}`}
						alt={movieById.original_title}
					/>
					<ImageList
						sx={{ width: 500, height: 450 }}
						variant="quilted"
						cols={2}
						// rowHeight={50}
					>
						{movieById.production_companies &&
							movieById.production_companies.map((comp) => (
								<ImageListItem key={comp.name}>
									<img
										src={`https://image.tmdb.org/t/p/w500/${comp.logo_path} `}
										// srcSet={`https://image.tmdb.org/t/p/w500/${comp.logo_path} 5x`}
										alt={comp.name}
										loading="lazy"
									/>
								</ImageListItem>
							))}
					</ImageList>
				</Grid>
			</Grid>
		</>
	);
}

export default MovieById;
