import { Favorite, Login, Logout } from '@mui/icons-material';
import { Link as LinkRoute } from 'react-router-dom';
import {
	AppBar,
	Avatar,
	Badge,
	Container,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchUserSuccess } from '../../redux/actions/userActions';
import ThemeSwitch from '../UI/Switch/Switch';
import Box from '@mui/material/Box';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { showFavoriteMovies } from '../../redux/actions/thunk';

function Header() {
	const dispatch = useDispatch();
	useEffect(() => {
		const sessionId = localStorage.getItem('session_id');
		const { id: accountId } = JSON.parse(
			localStorage.getItem('user'),
		);
		// console.log('FAV', accountId, sessionId);
		dispatch(showFavoriteMovies(accountId, sessionId));
	}, [dispatch]);

	const { favoriteMovies } = useSelector((state) => state.moviesArr);
	const usersArr = useSelector((state) => state.usersArr);
	// console.log(favoriteMovies);
	const history = useHistory();
	// console.log(usersArr.currentUser.username);

	const handleLogOut = () => {
		console.log('LOGOUT');
		history.push('/');
		// localStorage.removeItem('session_id');
	};

	if (!usersArr.isLoggedIn && localStorage.getItem('session_id')) {
		console.log('FALSE');
		const user = JSON.parse(localStorage.getItem('user'));
		dispatch(fetchUserSuccess(user));
	}

	if (localStorage.getItem('session_id')) {
		const {
			id,
			avatar: { tmdb },
		} = JSON.parse(localStorage.getItem('user'));
		// console.log(tmdb);

		return (
			<AppBar position="static" sx={{ mb: 5 }}>
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
								sx={{ textDecoration: 'none' }}
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
								mr: 2,
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
						{/* FAVORITE */}
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
							<Badge
								color="secondary"
								badgeContent={favoriteMovies.total_results}
								sx={{
									'& .MuiBadge-badge': {
										right: 30,
										top: 27,
										border: `2px solid background.paper`,
										padding: '0 4px',
									},
								}}
							>
								<Favorite sx={{ width: 56, height: 56 }} />
							</Badge>

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
		<AppBar position="static" sx={{ mb: 5 }}>
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
					{/* <IconButton
						color="inherit"
						component={LinkRoute}
						to="/login"
					>
						<AccountCircle />
					</IconButton> */}
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Header;
