import { Login } from '@mui/icons-material';
import { Link as LinkRoute } from 'react-router-dom';

import {
	AppBar,
	Container,
	IconButton,
	Link,
	Toolbar,
	Typography,
} from '@mui/material';
import React from 'react';

function Header() {
	return (
		<AppBar position="static">
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
				</Toolbar>
			</Container>
		</AppBar>
	);
}

export default Header;
