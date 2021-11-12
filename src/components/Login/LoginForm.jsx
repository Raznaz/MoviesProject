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
import { useForm } from 'react-hook-form';
import { Schema } from '@mui/icons-material';

import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
	login: yup.string().required(),
	password: yup.string().required(),
});

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

	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});

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
		fetchToken();
	};

	const onSubmit = (data) => {
		// console.log(data);
		fetchToken();
	};

	return (
		<>
			<Box
				sx={{
					maxWidth: '400px',
					margin: '100px auto',
				}}
			>
				<Typography
					component="h4"
					variant="h4"
					sx={{ fontWeight: 900, textAlign: 'center' }}
				>
					LOG IN
				</Typography>
				<Form onSubmit={handleSubmit(onSubmit)}>
					<MyInput
						{...register('login')}
						type="text"
						label="Login"
						name="login"
						sx={{ mb: 2 }}
						error={!!errors.login}
						helperText={errors?.login?.message}
					/>
					<MyInput
						{...register('password')}
						type="password"
						label="Password"
						name="password"
						sx={{ mb: 2 }}
						error={!!errors.password}
						helperText={errors?.password?.message}
					/>
					<Typography
						component="span"
						variant="p"
						sx={{ color: '#ccc' }}
					>
						Not yet a registered user? Please first Register:
						<Link to="/registration">here</Link>
					</Typography>
					<MyButton
					// onClick={() => {
					// 	onSubmit();
					// }}
					>
						Log in
					</MyButton>
				</Form>
			</Box>
		</>
	);
}

export default LoginForm;
