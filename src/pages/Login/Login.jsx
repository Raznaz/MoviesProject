import { Container, Typography } from '@mui/material';
import React from 'react';
import LoginForm from '../../components/Login/LoginForm';

function Login() {
	return (
		<Container maxWidth="lg">
			<Typography
				component="h1"
				variant="h1"
				color="error.dark"
				sx={{ fontWeight: '700', textAlign: 'center', mt: '2rem' }}
			>
				Welcome to Universal Movies Page
			</Typography>
			<LoginForm />
		</Container>
	);
}

export default Login;
