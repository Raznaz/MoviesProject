import { Container, Typography } from '@mui/material';
import React from 'react';

function Error() {
	return (
		<Container maxWidth="lg">
			<Typography
				component="h1"
				variant="h1"
				color="error.dark"
				sx={{ fontWeight: '700', textAlign: 'center', mt: '2rem' }}
			>
				ERROR 404
			</Typography>
		</Container>
	);
}

export default Error;
