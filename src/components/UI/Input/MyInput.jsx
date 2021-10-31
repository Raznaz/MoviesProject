import { TextField } from '@mui/material';
import React, { forwardRef } from 'react';

export const MyInput = forwardRef((props, ref) => {
	return (
		<TextField
			variant="outlined"
			inputRef={ref}
			{...props}
			fullWidth
		/>
	);
});
