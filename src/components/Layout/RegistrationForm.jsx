import { Box } from '@mui/system';
import React from 'react';
import { MyInput } from '../UI/Input/MyInput';
import Form from '../UI/Form/Form';
import { Controller, useForm } from 'react-hook-form';
import {
	Divider,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from '@mui/material';
import MyButton from '../UI/Button/MyButton';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
	firstName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'First name should not contain numbers.')
		.required('First name is required field'),
	lastName: yup
		.string()
		.matches(/^([^0-9]*)$/, 'Last name should not contain numbers.')
		.required('Last name is required field'),
	email: yup
		.string()
		.max(255)
		.email('Must be a valid email')
		.required('Email is required.'),
	// birthDay: yup
	// 	.string('correct date DD:MM:YEAR')
	// 	.required('Birth of date is required field. '),
	gender: yup.string().required('Should be required'),
	password: yup
		.string()
		.required('Password is required field')
		.min(3, 'Should be more then 3 characters')
		.max(20),
	confirmPassword: yup
		.string()
		.required('Password is required field')
		.min(3, 'Should be more then 3 characters')
		.max(20),
});

function RegistrationForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
	};

	return (
		<Box
			sx={{
				textAlign: 'center',
				maxWidth: '400px',
				margin: '100px auto',
				p: 2,
				boxShadow: '0 0 10px 2px #08005c',
				borderRadius: '20px',
			}}
		>
			<Typography component="h2" variant="h6" sx={{ mb: 3 }}>
				Registration form
			</Typography>
			<Form onSubmit={handleSubmit(onSubmit)}>
				<MyInput
					{...register('firstName')}
					id="firstName"
					type="text"
					label="First Name"
					name="firstName"
					sx={{ mb: 2 }}
					error={!!errors.firstName}
					helperText={errors?.firstName?.message}
				/>
				<MyInput
					{...register('lastName')}
					id="lastName"
					type="text"
					label="Last Name"
					name="lastName"
					sx={{ mb: 2 }}
					error={!!errors.lastName}
					helperText={errors?.lastName?.message}
				/>
				<MyInput
					{...register('email')}
					id="email"
					type="email"
					label="Email"
					name="email"
					sx={{ mb: 2 }}
					error={!!errors.email}
					helperText={errors?.email?.message}
				/>
				{/* ================================================ */}

				<FormControl fullWidth>
					<InputLabel id="demo-simple-select-label">
						Gender
					</InputLabel>
					<Controller
						name="gender"
						render={({ field }) => (
							<Select
								{...field}
								sx={{ mb: 2 }}
								label="gender"
								error={!!errors.gender}
								helpertext={errors?.gender?.message}
							>
								<MenuItem value={'Male'}>Male</MenuItem>
								<MenuItem value={'Female'}>Female</MenuItem>
								<MenuItem value={'Other'}>Other</MenuItem>
							</Select>
						)}
						control={control}
						defaultValue=""
					/>
				</FormControl>

				<MyInput
					{...register('password')}
					// id="password"
					type="password"
					label="Password"
					name="password"
					sx={{ mb: 2 }}
					error={!!errors.password}
					helperText={errors?.password?.message}
				/>
				<MyInput
					{...register('confirmPassword')}
					// id="confirmPassword"
					type="password"
					label="Confirm Password"
					name="confirmPassword"
					sx={{ mb: 2 }}
					error={!!errors.confirmPassword}
					helperText={errors?.confirmPassword?.message}
				/>

				<MyButton color="success">Registration</MyButton>
			</Form>
		</Box>
	);
}

export default RegistrationForm;
