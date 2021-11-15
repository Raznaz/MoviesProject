import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	closeAlertSnackMsg,
	toggleSnackMessage,
} from '../../redux/actions/appActions';

import MoviesList from '../Movies/MoviesList';
import Snack from '../UI/Snack/Snack';
import Aside from './Aside';
import SnackAlert from '../UI/Snack/SnackAlert';

function Main() {
	const dispatch = useDispatch();

	const { isOpenSnack, isOpenAlert, errorMsg } = useSelector(
		(state) => state.app,
	);

	return (
		<Container maxWidth="lg">
			<Typography
				component="h1"
				variant="h4"
				sx={{ textAlign: 'center', my: 2 }}
			>
				Movies
			</Typography>
			<Grid
				container
				spacing={2}
				sx={{
					mb: 2,
					display: 'flex',
					flexDirection: { sm: 'column', md: 'row' },
				}}
			>
				<Grid item xs={12} md={3}>
					<Aside />
				</Grid>
				<Grid item xs={12} md={9}>
					<MoviesList />
				</Grid>
			</Grid>
			<Snack
				isOpen={isOpenSnack}
				handleClose={() => dispatch(toggleSnackMessage())}
			/>
			<SnackAlert
				isOpen={isOpenAlert}
				handleClose={() => dispatch(closeAlertSnackMsg())}
				error={errorMsg}
			/>
		</Container>
	);
}

export default Main;
