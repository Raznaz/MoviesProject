import * as React from 'react';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import { Card, CardContent, CardMedia } from '@mui/material';
import { getImage } from '../../helper/getImage';

export default function FavMovieItem(props) {
	const { id, title, overview, poster_path } = props;

	const image = getImage(poster_path);

	return (
		<ListItem alignItems="flex-start">
			<Card sx={{ display: 'flex', width: '100%' }}>
				<CardMedia
					component="img"
					sx={{ width: 151 }}
					image={image}
					alt={title}
				/>
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
