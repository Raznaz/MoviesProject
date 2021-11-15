import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import {
	Card,
	CardActionArea,
	CardContent,
	CardMedia,
	ListItem,
	Typography,
} from '@mui/material';
import { getImage } from '../../helper/getImage';

export default function FavMovieItem(props) {
	const { id, title, overview, poster_path } = props;

	const image = getImage(poster_path);

	const history = useHistory();

	return (
		<ListItem alignItems="flex-start">
			<Card
				sx={{
					display: 'flex',
					width: '100%',
					flexDirection: { xs: 'column', sm: 'row' },
				}}
			>
				<CardActionArea
					onClick={() => history.push(`/movie/${id}`)}
					sx={{ width: '151px' }}
				>
					<CardMedia
						component="img"
						sx={{ width: 151, alignSelf: { xs: 'center' } }}
						image={image}
						alt={title}
					/>
				</CardActionArea>
				<Box>
					<CardContent sx={{ flex: '1 0 auto', py: 0 }}>
						<Typography component="div" variant="h5">
							{title}
						</Typography>
						<Typography component="p" variant="p">
							ID:{id}
						</Typography>
						<Typography
							variant="subtitle1"
							color="text.secondary"
							component="div"
						>
							{overview}
						</Typography>
					</CardContent>
				</Box>
			</Card>
		</ListItem>
	);
}

FavMovieItem.propTypes = {
	id: PropTypes.number,
	title: PropTypes.string,
	overview: PropTypes.string,
	poster_path: PropTypes.string,
};
