import { Container, Typography } from '@mui/material';
import React from 'react';
import RegistrationForm from '../../components/Registration/RegistrationForm';

function Registration() {
	return (
		<Container maxWidth="lg">
			<Typography
				component="h1"
				variant="h3"
				color="info.dark"
				sx={{ fontWeight: '700', textAlign: 'center', mt: '2rem' }}
			>
				REGISTRATION PAGE
			</Typography>{' '}
			<RegistrationForm />
		</Container>
	);
}

export default Registration;
