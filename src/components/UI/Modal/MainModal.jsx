import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { toggleModalWindow } from '../../../redux/actions/appActions';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 320,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function MainModal() {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(toggleModalWindow());
		history.push('/login');
	};
	const { isOpenModalWindow } = useSelector((state) => state.app);

	return (
		<Modal
			open={isOpenModalWindow}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
		>
			<Box sx={style}>
				<Typography
					id="modal-modal-title"
					variant="h5"
					component="h2"
				>
					Congratulation !!!
				</Typography>
				<Typography
					id="modal-modal-description"
					sx={{ mt: 2, color: 'success.main' }}
				>
					The registration was successfully
				</Typography>
				<Typography
					id="modal-modal-description"
					sx={{ mt: 2, color: 'success.main' }}
					onClick={() => handleClose()}
				>
					Move to{' '}
					<Typography
						variant="p"
						component="span"
						id="modal-modal-description"
						sx={{
							mt: 2,
							color: 'info.main',
							'&:hover': {
								cursor: 'pointer',
							},
						}}
						onClick={() => handleClose()}
					>
						LOG IN
					</Typography>
				</Typography>
			</Box>
		</Modal>
	);
}
