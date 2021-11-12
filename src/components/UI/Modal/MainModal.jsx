import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModalWindow } from '../../../redux/actions/appActions';
import { useHistory } from 'react-router';

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	bgcolor: 'background.paper',
	border: '2px solid #000',
	boxShadow: 24,
	p: 4,
};

export default function MainModal() {
	// const [open, setOpen] = React.useState(false);
	// const handleOpen = () => setOpen(true);
	const history = useHistory();
	const dispatch = useDispatch();

	const handleClose = () => {
		dispatch(toggleModalWindow());
		history.push('/login');
	};
	const { isOpenModalWindow } = useSelector((state) => state.app);
	// console.log(isOpenModalWindow);

	return (
		<div>
			{/* <Button onClick={handleOpen}>Open modal</Button> */}
			<Modal
				open={isOpenModalWindow}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style}>
					<Typography
						id="modal-modal-title"
						variant="h4"
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
		</div>
	);
}
