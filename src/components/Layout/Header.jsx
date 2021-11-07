import {
	Favorite,
	Login,
	LoginOutlined,
	Logout,
} from '@mui/icons-material';
import { Link as LinkRoute } from 'react-router-dom';
import {
	AppBar,
	Avatar,
	Button,
	Container,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { fetchUserSuccess } from '../../redux/actions/userActions';

function Header() {
	const dispatch = useDispatch();
	// useEffect(() => {
	// 	const user = JSON.parse(localStorage.getItem('user'));
	// 	console.log('USE EFFECT');

	// 	dispatch(fetchUserSuccess(user));
	// }, []);

	const usersArr = useSelector((state) => state.usersArr);

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
		console.log(tmdb);
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
						</Typography>
						<Link
							component={LinkRoute}
							to="/favorite"
							color="inherit"
						>
							Favorite Movies
						</Link>
						<IconButton
							color="inherit"
							component={LinkRoute}
							to="/login"
						>
							<Favorite />
						</IconButton>

						<Typography>{`Hello, ${usersArr.currentUser.username}`}</Typography>
						{/* 
						<Avatar
							alt={username}
							src={`https://image.tmdb.org/t/p/w500${tmdb.avatar_path}`}
							sx={{ width: 56, height: 56, cursor: 'pointer' }}
							onClick={() => history.push(`/user/${id}`)}
						/> */}

						<Avatar
							alt={usersArr.currentUser.username}
							src={`https://image.tmdb.org/t/p/w500${tmdb.avatar_path}`}
							sx={{ width: 56, height: 56, cursor: 'pointer' }}
							onClick={() => history.push(`/user/${id}`)}
						/>

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
