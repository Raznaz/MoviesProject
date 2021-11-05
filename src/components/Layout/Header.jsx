import {
	AccessAlarmRounded,
	AccountCircle,
	Login,
	LogoutRounded,
	OutboxSharp,
	VerifiedUser,
} from '@mui/icons-material';
import { Link as LinkRoute } from 'react-router-dom';

import {
	AppBar,
	Container,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Header() {
	// const testLocalUser = JSON.parse(localStorage.getItem('user'));
	// console.log(testLocalUser);

	const usersArr = useSelector((state) => state.usersArr);
	console.log(usersArr.currentUser.username);

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
							Movie Universal
						</Link>
					</Typography>
					<IconButton
						color="inherit"
						component={LinkRoute}
						to="/registration"
					>
						<Login />
					</IconButton>
					<IconButton
						color="inherit"
						component={LinkRoute}
						to="/login"
					>
						<AccountCircle />
					</IconButton>
					{usersArr.currentUser.username ? (
						<div>{`Hello, ${usersArr.currentUser.username}`}</div>
					) : null}
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Header;
