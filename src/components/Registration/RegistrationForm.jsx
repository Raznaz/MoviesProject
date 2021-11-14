import React from 'react';
import { Box } from '@mui/system';
import Form from '../UI/Form/Form';
import { Controller, useForm } from 'react-hook-form';
import {
	FormControl,
	FormControlLabel,
	Radio,
	RadioGroup,
	Typography,
} from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import MyButton from '../UI/Button/MyButton';
import MainModal from '../UI/Modal/MainModal';
import { MyInput } from '../UI/Input/MyInput';
import { toggleModalWindow } from '../../redux/actions/appActions';
import { useDispatch } from 'react-redux';
import { schemaRegistrationForm } from '../../helper/validationSchema';

function RegistrationForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		control,
		reset,
	} = useForm({
		mode: 'onBlur',
		resolver: yupResolver(schemaRegistrationForm),
		defaultValues: {
			gender: 'man',
			birthDay: '2000-01-01',
		},
	});

	const dispatch = useDispatch();

	const onSubmit = (data) => {
		dispatch(toggleModalWindow());
		reset();
	};

	return (
		<Box
			sx={{
				textAlign: 'center',
				maxWidth: '400px',
				margin: '0 auto',
				mb: 5,
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
					sx={{ mb: 1 }}
					error={!!errors.firstName}
					helperText={errors?.firstName?.message}
				/>
				<MyInput
					{...register('lastName')}
					id="lastName"
					type="text"
					label="Last Name"
					name="lastName"
					sx={{ mb: 1 }}
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
				<FormControl fullWidth component="fieldset">
					<Controller
						control={control}
						// rules={{ required: true }}
						name="gender"
						defaultValue="man"
						render={({ field: { onChange, value } }) => (
							<RadioGroup
								row
								sx={{ justifyContent: 'center' }}
								value={value}
								onChange={onChange}
							>
								<FormControlLabel
									value="man"
									label="Man"
									control={<Radio color="success" />}
								/>
								<FormControlLabel
									value="woman"
									control={<Radio color="secondary" />}
									label="Woman"
								/>
							</RadioGroup>
						)}
					/>
				</FormControl>

				<MyInput
					{...register('birthDay')}
					id="birthDay"
					type="date"
					name="birthDay"
					defaultValue=""
					sx={{ mb: 2 }}
					error={!!errors.birthDay}
					helperText={errors?.birthDay?.message}
				/>
				<MyInput
					{...register('userName')}
					id="userName"
					type="text"
					label="User name"
					name="userName"
					sx={{ mb: 2 }}
					error={!!errors.userName}
					helperText={errors?.userName?.message}
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
				<MyInput
					{...register('confirmPassword')}
					type="password"
					label="Confirm Password"
					name="confirmPassword"
					sx={{ mb: 2 }}
					error={!!errors.confirmPassword}
					helperText={errors?.confirmPassword?.message}
				/>
				<MyButton color="success">Registration</MyButton>
			</Form>
			<MainModal />
		</Box>
	);
}

export default RegistrationForm;
