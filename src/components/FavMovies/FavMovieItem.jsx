import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Card, CardContent, CardMedia } from '@mui/material';

export default function FavMovieItem(props) {
	const { id, title, overview, backdrop_path, poster_path } = props;
	return (
		<ListItem alignItems="flex-start">
			<Card>
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
				<CardMedia
					component="img"
					sx={{ width: 151 }}
					image="/static/images/cards/live-from-space.jpg"
					alt={title}
				/>
			</Card>
		</ListItem>
	);
}
