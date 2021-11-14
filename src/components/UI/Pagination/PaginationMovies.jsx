import React from 'react';
import { Stack, Pagination } from '@mui/material';

function PaginationMovies({ totalPages, currentPage, handleChange }) {
	return (
		<Stack spacing={{ xs: 1, sm: 2 }}>
			<Pagination
				sx={{
					display: 'flex',
					justifyContent: 'center',
					my: 1,
				}}
				count={totalPages}
				page={currentPage}
				onChange={handleChange}
			/>
		</Stack>
	);
}

export default PaginationMovies;
