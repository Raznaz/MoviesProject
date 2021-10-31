import { Button } from '@mui/material';
import React from 'react';

function MyButton({ children, ...props }) {
	return (
		<Button type="submit" fullWidth variant="contained" {...props}>
			{children}
		</Button>
	);
}

export default MyButton;
