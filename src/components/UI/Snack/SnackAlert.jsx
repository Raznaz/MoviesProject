import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Alert, Snackbar } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

function SnackAlert(props) {
	const { isOpen, handleClose, error } = props;
	return (
		<Snackbar
			open={isOpen}
			onClose={handleClose}
			autoHideDuration={2000}
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
				{error}
			</Alert>
		</Snackbar>
	);
}

export default SnackAlert;
