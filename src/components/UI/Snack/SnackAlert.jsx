import React from 'react';
import { Alert, Snackbar } from '@mui/material';

function SnackAlert(props) {
	const { isOpen, handleClose, error } = props;

	return (
		<Snackbar
			open={isOpen}
			onClose={handleClose}
			autoHideDuration={10000}
			sx={{ width: '90%' }}
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
		>
			<Alert
				severity="error"
				variant="filled"
				sx={{
					width: '100%',
				}}
			>
				{error.name}: {error.message}
			</Alert>
		</Snackbar>
	);
}

export default SnackAlert;
