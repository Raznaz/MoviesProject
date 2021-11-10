import React, { useEffect } from 'react';
import noImage from '../../theme/images/noImage.png';
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
	CircularProgress,
	Divider,
	Grid,
	ImageList,
	ImageListItem,
	Typography,
} from '@mui/material';
import Loader from '../../components/UI/Loader/Loader';
import { getImage } from '../../helper/getImage';
import { makeStyles } from '@mui/styles';
import { Box } from '@mui/system';
import {
	AttachMoney,
	MonetizationOn,
	Money,
	PushPin,
} from '@mui/icons-material';

const useStylesBase = makeStyles({
	root: {
		backgroundColor: 'red',
	},
});

function MovieById() {
	const classes = useStylesBase();

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

	const imgPoster = getImage(movieById.poster_path, noImage);
	const bgImage = getImage(movieById.backdrop_path, noImage);

	if (isLoading) {
		return <Loader />;
	}

	return (
		<>
			<Typography
				component="h2"
				variant="h2"
				sx={{
					textAlign: 'center',
					fontWeight: '700',
				}}
			>
				{movieById.original_title}
			</Typography>
			<Grid
				container
				spacing={2}
				// sx={{ backgroundImage: `url(${imgPoster})` }}
			>
				<Grid
					item
					xs={12}
					// sx={{
					// 	backgroundImage: `url(https://image.tmdb.org/t/p/original/rhLspFB1B8ZCkWEHFYmc3NKagzq.jpg)`,
					// 	backgroundSize: 'cover',
					// 	backgroundRepeat: 'no-repeat',
					// 	backgroundColor: '#212121',
					// }}
				></Grid>
				<Grid item xs={6}>
					<Card sx={{ maxWidth: '100%' }}>
						<CardMedia
							component="img"
							alt="green iguana"
							height="100%"
							// image={`https://image.tmdb.org/t/p/w500/${movieById.poster_path}`}
							image={imgPoster}
						/>
						<CardContent>
							{/* TODO: исправить этот текст */}
							<Typography component="div" variant="h5">
								{movieById.homepage}
							</Typography>
							<Typography variant="body2" color="text.secondary">
								{movieById.release_date}
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={6}>
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
		</>
	);
}

export default MovieById;
