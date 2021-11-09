import { Alert, Snackbar } from '@mui/material';
import React from 'react';

function Snack(props) {
	const { isOpen, handleClose } = props;
	return (
		<Snackbar
			open={isOpen}
			onClose={handleClose}
			autoHideDuration={3000}
		>
			<Alert severity="success">Movie add to favorite.</Alert>
		</Snackbar>
	);
}

export default Snack;
