import { Typography } from '@mui/material';
import React from 'react';
import Search from '../Search/Search';
import List from '../List/List';

function Aside() {
	return (
		<aside>
			<Typography>Aside</Typography>
			<Search />
			<List />
		</aside>
	);
}

export default Aside;
