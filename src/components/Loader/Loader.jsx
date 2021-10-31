import { CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Loader() {
	return (
		<Box sx={{ display: 'flex' }}>
			<CircularProgress />
		</Box>
	);
}

export default Loader;
