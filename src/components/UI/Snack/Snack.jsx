import { Alert, Snackbar } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';

function Snack(props) {
	const { isOpen, handleClose } = props;
	return (
		<Snackbar
			open={isOpen}
			onClose={handleClose}
			autoHideDuration={3000}
			anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
		>
			<Alert severity="success">Movie add to favorite.</Alert>
		</Snackbar>
	);
}

export default Snack;

Snack.defaultProps = {
	isOpen: false,
};
Snack.propTypes = {
	isOpen: PropTypes.bool.isRequired,
	handleClose: PropTypes.func,
};
