import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { border, Box } from '@mui/system';
import { Card, CardContent, CardMedia } from '@mui/material';
import { getImage } from '../../helper/getImage';

export default function FavMovieItem(props) {
	const { id, title, overview, backdrop_path, poster_path } = props;

	const image = getImage(poster_path);

	return (
		<ListItem alignItems="flex-start">
			<Card sx={{ display: 'flex' }}>
				<CardMedia
					component="img"
					sx={{ width: 151 }}
					image={image}
					alt={title}
				/>
				<Box>
					<CardContent sx={{ flex: '1 0 auto' }}>
						<Typography component="div" variant="h5">
							{title}
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
