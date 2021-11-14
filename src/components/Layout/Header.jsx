import React from 'react';
import { Favorite, Login, Logout } from '@mui/icons-material';
import { Link as LinkRoute } from 'react-router-dom';
import {
	AppBar,
	Avatar,
	Container,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Box from '@mui/material/Box';
import {
	fetchUserSuccess,
	userLogOut,
} from '../../redux/actions/userActions';
import ThemeSwitch from '../UI/Switch/Switch';

function Header() {
	const dispatch = useDispatch();

	const usersArr = useSelector((state) => state.usersArr);
	const history = useHistory();

	const handleLogOut = () => {
		localStorage.removeItem('session_id');
		dispatch(userLogOut());
		history.push('/');
	};

	if (!usersArr.isLoggedIn && localStorage.getItem('session_id')) {
		const user = JSON.parse(localStorage.getItem('user'));
		dispatch(fetchUserSuccess(user));
	}

	if (localStorage.getItem('session_id')) {
		const {
			id,
			avatar: { tmdb },
		} = JSON.parse(localStorage.getItem('user'));

		return (
			<AppBar position="static" sx={{ mb: 0 }}>
				<Container maxWidth="lg" disableGutters>
					<Toolbar>
						<Typography
							variant="h2"
							component="h1"
							sx={{ flexGrow: 1 }}
						>
							<Link
								component={LinkRoute}
								color="inherit"
								to="/"
								sx={{
									textDecoration: 'none',
									display: { xs: 'none', sm: 'inline-block' },
								}}
							>
								Movie Universe
							</Link>
							<ThemeSwitch />
						</Typography>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								mr: { xs: 0, sm: 2 },
								'&:hover': {
									color: 'error.light',
									cursor: 'pointer',
								},
							}}
							onClick={() => history.push('/movies')}
						>
							<LocalMoviesIcon sx={{ width: 56, height: 56 }} />
							<Typography>Movies</Typography>
						</Box>
						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								mr: 2,
								'&:hover': {
									color: 'error.light',
									cursor: 'pointer',
								},
							}}
							onClick={() => history.push('/favorite')}
						>
							<Favorite sx={{ width: 56, height: 56 }} />

							<Typography>Favorite</Typography>
						</Box>

						<Box
							sx={{
								display: 'flex',
								flexDirection: 'column',
								alignItems: 'center',
								py: 1,
								px: 1,
								bgcolor: 'info.main',
							}}
						>
							<Avatar
								alt={usersArr.currentUser.username}
								src={`https://image.tmdb.org/t/p/w500${tmdb.avatar_path}`}
								sx={{
									width: 56,
									height: 56,
									cursor: 'pointer',
									'&:hover': {
										opacity: 0.8,
									},
								}}
								onClick={() => history.push(`/user/${id}`)}
							/>
							<Typography>{`Hello, ${usersArr.currentUser.username}`}</Typography>
						</Box>

						<IconButton
							color="inherit"
							onClick={() => handleLogOut()}
						>
							<Logout />
						</IconButton>
					</Toolbar>
				</Container>
			</AppBar>
		);
	}

	// NOT LOGIN
	return (
		<AppBar position="static" sx={{ py: 1 }}>
			<Container maxWidth="lg" disableGutters>
				<Toolbar>
					<Link
						component={LinkRoute}
						variant="h2"
						color="inherit"
						to="/"
						sx={{ textDecoration: 'none', flexGrow: 1 }}
					>
						Movie Universe
					</Link>

					<IconButton
						color="inherit"
						component={LinkRoute}
						to="/login"
					>
						<Login />
					</IconButton>
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Header;
