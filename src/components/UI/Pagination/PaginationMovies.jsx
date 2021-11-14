import React from 'react';
import { Stack, Pagination } from '@mui/material';

function PaginationMovies({ totalPages, currentPage, handleChange }) {
	return (
		<>
			<Stack spacing={{ xs: 1, sm: 2, md: 10 }}>
				<Pagination
					count={totalPages}
					page={currentPage}
					onChange={handleChange}
				/>
			</Stack>
		</>
	);
}

export default PaginationMovies;
