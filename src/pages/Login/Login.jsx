import { Container, Typography } from '@mui/material';
import React from 'react';
import LoginForm from '../../components/Login/LoginForm';

function Login() {
	return (
		<Container maxWidth="lg">
			<Typography
				component="h2"
				variant="h5"
				color="error.dark"
				sx={{ fontWeight: '700', textAlign: 'center', mt: '2rem' }}
			>
				Please, enter your login and password.
			</Typography>
			<LoginForm />
		</Container>
	);
}

export default Login;
