import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import { Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { getImage } from '../../helper/getImage';

function User() {
	const { currentUser } = useSelector((state) => state.usersArr);

	const image = getImage(currentUser.avatar.tmdb.avatar_path);

	return (
		<Container maxWidth="lg">
			<Box
				sx={{
					backgroundImage: `URL(${image})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundColor: '#212121',
					height: 100,
					p: 1,
				}}
			>
				<Typography variant="p" color="#fff">
					Name:
				</Typography>
				<Typography variant="h4" component="h4" color="#fff">
					{currentUser.name}
				</Typography>
			</Box>
			<Grid
				container
				sx={{
					display: 'flex',
					flexDirection: { xs: 'column', sm: 'row' },
				}}
			>
				<Grid item xs={12} sm={4}>
					<Card sx={{ maxWidth: 345 }}>
						<CardHeader
							avatar={
								<Avatar
									sx={{ bgcolor: red[500] }}
									aria-label="recipe"
									alt="Remy Sharp"
									src={image}
								>
									R
								</Avatar>
							}
							title={currentUser.username}
							subheader={`ID: ${currentUser.id}`}
						/>
						<CardMedia
							component="img"
							height="194"
							image={image}
							alt="Paella dish"
						/>
						<CardContent>
							<Typography variant="body2" color="text.secondary">
								This impressive paella is a perfect party dish and a
								fun meal to cook together with your guests. Add 1 cup
								of frozen peas along with the mussels, if you like.
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item xs={12} sm={8}>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit.
					Iusto in id ducimus delectus placeat cum atque totam
					suscipit! Mollitia, quisquam. Pariatur ab excepturi velit
					dolore veniam. Odit saepe quam autem?
				</Grid>
			</Grid>
		</Container>
	);
}

export default User;
