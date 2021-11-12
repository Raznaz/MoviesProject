import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useSelector } from 'react-redux';
import { darkTheme, lightTheme } from '../../../theme/themes';
import { CssBaseline } from '@mui/material';

function Theme({ children }) {
	const { isLightMode } = useSelector((state) => state.theme);
	const selectedTheme = createTheme(
		isLightMode ? lightTheme : darkTheme,
	);

	return (
		<ThemeProvider theme={selectedTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}

export default Theme;
