import {
	AccessAlarmRounded,
	AccountCircle,
	Favorite,
	Login,
	Logout,
	LogoutRounded,
	OutboxSharp,
	VerifiedUser,
} from '@mui/icons-material';
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
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

function Header() {
	// const testLocalUser = JSON.parse(localStorage.getItem('user'));
	// console.log(testLocalUser);

	const usersArr = useSelector((state) => state.usersArr);

	const history = useHistory();
	console.log(usersArr.currentUser.username);

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
						<IconButton
							color="inherit"
							component={LinkRoute}
							to="/login"
						>
							<Favorite />
						</IconButton>
						{/* TODO:Релизовать LOGOUT */}

						<div>{`Hello, ${usersArr.currentUser.username}`}</div>
						{usersArr.currentUser.username ? (
							<Avatar
								alt="Remy Sharp"
								src={`https://image.tmdb.org/t/p/w500${usersArr.currentUser.avatar.tmdb.avatar_path}`}
								sx={{ width: 56, height: 56 }}
								onClick={() => console.log('AVATAR')}
							/>
						) : null}

						<IconButton color="inherit" component={LinkRoute} to="/">
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
