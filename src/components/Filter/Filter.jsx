import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

function Filter() {
	useEffect(() => {}, []);
	const currencies = [
		{
			value: 'USD',
			label: '$',
		},
		{
			value: 'EUR',
			label: '€',
		},
		{
			value: 'BTC',
			label: '฿',
		},
		{
			value: 'JPY',
			label: '¥',
		},
	];

	const [currency, setCurrency] = useState('EUR');

	const handleChange = (event) => {
		setCurrency(event.target.value);
	};

	return (
		<Box
			component="form"
			sx={{
				'& .MuiTextField-root': { mb: 2 },
			}}
			noValidate
			autoComplete="off"
		>
			<div></div>
			<div>
				<TextField
					id="filled-select-currency"
					select
					label="Select language"
					value={currency}
					onChange={handleChange}
					helperText="Please select language"
					variant="outlined"
					fullWidth
				>
					{currencies.map((option) => (
						<MenuItem key={option.value} value={option.value}>
							{option.label}
						</MenuItem>
					))}
				</TextField>
			</div>
		</Box>
	);
}

export default Filter;
