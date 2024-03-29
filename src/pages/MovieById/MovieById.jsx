import React, { useEffect } from 'react';
import noImage from '../../theme/images/noImage.png';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getInfoAboutMovieById } from '../../redux/actions/thunk';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import {
	CircularProgress,
	Container,
	Divider,
	Grid,
	Typography,
} from '@mui/material';
import Loader from '../../components/UI/Loader/Loader';
import { getImage } from '../../helper/getImage';
import { Box } from '@mui/system';
import {
	AttachMoney,
	MonetizationOn,
	PushPin,
} from '@mui/icons-material';
import { showInfoMovieById } from '../../redux/actions/movieActinos';

function MovieById() {
	const { movieId } = useParams();
	const dispatch = useDispatch();
	const { movieById } = useSelector((state) => state.moviesArr);

	useEffect(() => {
		dispatch(getInfoAboutMovieById(movieId));
		return () => {
			dispatch(showInfoMovieById({}));
		};
	}, [movieId, dispatch]);

	const { isLoading } = useSelector((state) => state.app);

	const imgPoster = getImage(movieById.poster_path, noImage);
	const bgImage = getImage(movieById.backdrop_path, noImage);

	if (isLoading) {
		return <Loader />;
	}

	if (!movieById.title) {
		return (
			<Typography
				component="p"
				variant="h6"
				color="error.dark"
				sx={{ fontWeight: '700', textAlign: 'center', mt: '3rem' }}
			>
				Loading ...
			</Typography>
		);
	}

	return (
		<Container maxWidth="lg">
			<Typography
				component="h2"
				variant="h2"
				sx={{
					textAlign: 'center',
					fontWeight: '700',
					fontSize: { xs: '30px', sm: '60px' },
				}}
			>
				{movieById.original_title}
			</Typography>
			<Grid
				container
				spacing={2}
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'row' },
				}}
			>
				<Grid item xs={12}></Grid>
				<Grid item xs={12} sm={6}>
					<Card sx={{ maxWidth: '100%' }}>
						<CardMedia
							component="img"
							alt="green iguana"
							height="100%"
							image={imgPoster}
						/>
						<CardContent>
							<Typography component="div" variant="h5">
								{movieById.homepage}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{movieById.release_date}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={6}>
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<PushPin />
						<Typography>Status:</Typography>
						<Typography sx={{ fontWeight: 700 }}>
							{movieById.status}
						</Typography>
					</Box>
					<Divider />
					<Box>
						<Typography component="div" variant="h5">
							Overview:
						</Typography>
						<Typography component="div" variant="p">
							{movieById.overview}
						</Typography>
					</Box>
					<Box
						component="img"
						sx={{
							// height: 233,
							width: '100%',
							// maxHeight: { xs: 233, md: 167 },
							// maxWidth: { xs: 350, md: 250 },
						}}
						alt="The house from the offer."
						src={bgImage}
					></Box>
					<Divider />
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<Typography>User score:</Typography>
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
								value={movieById.vote_average * 10}
								size="5rem"
								color="success"
								sx={{
									bgcolor: '#ccc',
									borderRadius: '50%',
								}}
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
									sx={{ fontSize: '20px' }}
								>
									{movieById.vote_average * 10}%
								</Typography>
							</Box>
						</Box>
					</Box>
					<Divider />
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<MonetizationOn />
						<Typography>Budget:</Typography>
						<Typography sx={{ fontWeight: 700 }}>
							{movieById.budget}
						</Typography>
					</Box>
					<Divider />
					<Box sx={{ display: 'flex', alignItems: 'center' }}>
						<AttachMoney />
						<Typography>Revenue:</Typography>
						<Typography sx={{ fontWeight: 700 }}>
							{movieById.revenue}
						</Typography>
					</Box>
					<Divider />
					{/* <img src={bgImage} alt={movieById.original_title} /> */}
					{/* <ImageList
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
					</ImageList> */}
				</Grid>
			</Grid>
		</Container>
	);
}

export default MovieById;
