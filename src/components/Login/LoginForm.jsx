import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import MyButton from '../UI/Button/MyButton';
import Form from '../UI/Form/Form';
import { MyInput } from '../UI/Input/MyInput';
import { generateToken } from '../../api/api';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { useFetching } from '../../hooks/useFetching';
import { generateSessionAndGetUser } from '../../redux/actions/thunk';

function LoginForm() {
	const search = useLocation().search;
	const [fetchToken] = useFetching(async () => {
		const token = await generateToken();
		const redirectURL = `https://www.themoviedb.org/authenticate/${token}?redirect_to=http://localhost:3000/login`;
		window.open(redirectURL, '_blank', 'noopener noreferrer');
	});
	const history = useHistory();
	const dispatch = useDispatch();
	const usersArr = useSelector((state) => state.usersArr);

	useEffect(() => {
		const requestToken = new URLSearchParams(search).get(
			'request_token',
		);
		if (requestToken) {
			dispatch(generateSessionAndGetUser(requestToken));
		}
	}, [search, dispatch]);

	useEffect(() => {
		if (usersArr.isLoggedIn) {
			history.push('/movies');
		}
	}, [usersArr.isLoggedIn, history]);

	const handleRegister = (e) => {
		e.preventDefault();
		// const request_token = await fetchToken();
		// console.log(request_token);
		fetchToken();
		// dispatch(generateTokenID);

		// console.log('LOG IN');
		// const response = await generateToken();
		// console.log('response', response);
		// localStorage.setItem('request_token', response.request_token);

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
