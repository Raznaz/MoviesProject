import { Typography } from '@mui/material';
import { Box, width } from '@mui/system';
import React from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../UI/Button/MyButton';
import Form from '../UI/Form/Form';
import { MyInput } from '../UI/Input/MyInput';

function LoginForm() {
	const handleRegister = () => {
		console.log('LOG IN');
	};

	return (
		<Box sx={{ width: '300px', margin: '100px auto' }}>
			<Typography component="h2" variant="h3">
				LOG IN
			</Typography>
			<Form>
				<MyInput label="Login" />
				<MyInput label="Password" />
				<Typography
					component="span"
					variant="p"
					sx={{ color: '#ccc' }}
				>
					Go to
					<Link to="/registration">REGISTRATION </Link>
				</Typography>
				<MyButton
					onClick={() => {
						handleRegister();
					}}
				>
					Log in
				</MyButton>
			</Form>
		</Box>
	);
}

export default LoginForm;
