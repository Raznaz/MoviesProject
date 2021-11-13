import * as yup from 'yup';

export const schemaRegistrationForm = yup.object().shape({
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
	birthDay: yup
		// .string('correct date DD:MM:YEAR')
		.date()
		.max(new Date())
		.required('Birth of day is required field. '),
	userName: yup
		.string()
		.matches(
			/^([a-z, 0-9, _ ]*)$/,
			'User name should contains just small latter, digits, . or _',
		)
		.required('Should be required'),
	password: yup
		.string()
		.required('Password is required field')
		.min(3, 'Should be more then 3 characters')
		.max(20),
	confirmPassword: yup
		.string()
		.required('Password is required field')
		.oneOf([yup.ref('password'), null], 'Password must match.'),
});

export const schemaLogIn = yup.object().shape({
	login: yup.string().required(),
	password: yup.string().required(),
});

export const schemaSearchForm = yup.object().shape({
	search: yup.string().min(3, 'Should be most then 3 letter'),
});
