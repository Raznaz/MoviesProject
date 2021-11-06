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
import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, useHistory } from 'react-router';

function Header() {
	const testLocalUser = JSON.parse(localStorage.getItem('user'));
	console.log(testLocalUser);

	const usersArr = useSelector((state) => state.usersArr);

	const history = useHistory();
	// console.log(usersArr.currentUser.username);

	const handleLogOut = () => {
		console.log('LOGOUT');
		history.push('/');
		// localStorage.removeItem('session_id');
	};

	if (localStorage.getItem('session_id')) {
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
						{usersArr.currentUser.username ? (
							<Avatar
								alt="Remy Sharp"
								src={`https://image.tmdb.org/t/p/w500${usersArr.currentUser.avatar.tmdb.avatar_path}`}
								sx={{ width: 56, height: 56, cursor: 'pointer' }}
								onClick={() =>
									history.push(`/user/${usersArr.currentUser.id}`)
								}
							/>
						) : null}
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
