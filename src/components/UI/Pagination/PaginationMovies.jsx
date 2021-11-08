import React, { useState } from 'react';
import { Stack, Pagination } from '@mui/material';
import { fetchMovie } from '../../../redux/actions/thunk';
import { useDispatch } from 'react-redux';

function PaginationMovies({ totalPages, currentPage, handleChange }) {
	console.log(totalPages, currentPage, handleChange);
	return (
		<>
			<Stack spacing={2}>
				<Pagination
					count={totalPages}
					page={currentPage}
					onChange={handleChange}
				/>
			</Stack>
		</>
	);
}
// 	const [page, setPage] = useState(1);

// 	const dispatch = useDispatch();

// 	const handleChange = (event, value) => {
// 		setPage(value);
// 		dispatch(fetchMovie(value));
// 	};
// 	return (
// 		<>
// 			<Stack spacing={2}>
// 				<Pagination count={500} page={page} onChange={handleChange} />
// 			</Stack>
// 		</>
// 	);
// }

export default PaginationMovies;
