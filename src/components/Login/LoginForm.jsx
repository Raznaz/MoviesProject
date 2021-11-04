import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../UI/Button/MyButton';
import Form from '../UI/Form/Form';
import { MyInput } from '../UI/Input/MyInput';
import { useHistory } from 'react-router-dom';
import {
	generateSessionID,
	generateToken,
	getMovie,
} from '../../api';

function LoginForm() {
	const history = useHistory();

	const handleRegister = async (e) => {
		e.preventDefault();
		console.log('LOG IN');
		const response = await generateToken();
		console.log('response', response);
		localStorage.setItem('request_token', response.request_token);
		const redirectURL = `https://www.themoviedb.org/authenticate/${response.request_token}?redirect_to=http://localhost:3000/session`;
		window.open(redirectURL, '_blank');

		// const sessionResponse = await generateSessionID(
		// 	response.request_token,
		// );

		// localStorage.setItem('session_id', sessionResponse.session_id);

		// history.push('/');
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
					onClick={(e) => {
						handleRegister(e);
					}}
				>
					Log in
				</MyButton>
			</Form>
		</Box>
	);
}

export default LoginForm;
