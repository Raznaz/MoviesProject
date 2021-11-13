import { Container, Typography } from '@mui/material';
import React from 'react';
import RegistrationForm from '../../components/Registration/RegistrationForm';

function Registration() {
	return (
		<Container maxWidth="lg">
			<Typography
				component="h3"
				variant="h4"
				color="info.dark"
				sx={{ fontWeight: '700', textAlign: 'center', my: '2rem' }}
			>
				REGISTRATION PAGE
			</Typography>{' '}
			<RegistrationForm />
		</Container>
	);
}

export default Registration;
