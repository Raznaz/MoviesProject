import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';
// import Main from '../../components/Layout/Main';
import poster from '../../theme/images/poster.jpg';

const sectionStyle = {
	height: 'calc(100vh - 70px)',
	backgroundImage: `url(${poster})`,
	backgroundRepeat: 'no-repeat',
	backgroundSize: 'cover',
};

function Home() {
	return (
		<Grid style={sectionStyle}>
			<Typography
				component="h1"
				variant="h1"
				sx={{
					fontWeight: 900,
					color: 'background.default',
					textAlign: 'center',
				}}
			>
				MOVIE UNIVERSE
			</Typography>
		</Grid>
	);
}

export default Home;
