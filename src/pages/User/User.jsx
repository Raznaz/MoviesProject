import React from 'react';
// import { useParams } from 'react-router';
// import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
// import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';

import { Container, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { getImage } from '../../helper/getImage';

// const ExpandMore = styled((props) => {
// 	const { expand, ...other } = props;
// 	return <IconButton {...other} />;
// })(({ theme, expand }) => ({
// 	transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
// 	marginLeft: 'auto',
// 	transition: theme.transitions.create('transform', {
// 		duration: theme.transitions.duration.shortest,
// 	}),
// }));

function User() {
	// const { userId } = useParams();
	// const [expanded, setExpanded] = useState(false);
	const { currentUser } = useSelector((state) => state.usersArr);

	const image = getImage(currentUser.avatar.tmdb.avatar_path);

	// const handleExpandClick = () => {
	// 	setExpanded(!expanded);
	// };

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
				<Typography variant="h3" color="#fff">
					{currentUser.name}
				</Typography>
			</Box>
			<Grid container>
				<Grid item xs={4}>
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
				<Grid item xs={8}>
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
