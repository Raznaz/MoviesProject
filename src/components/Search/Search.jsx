import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../../redux/actions/movieActinos';
import { MyInput } from '../UI/Input/MyInput';
import { Button } from '@mui/material';

function Search() {
	const valInpRef = useRef();
	const dispatch = useDispatch();

	const handleKey = (e) => {
		if (e.key === 'Enter') {
			dispatch(searchMovies(valInpRef.current.value));
		}
	};
	return (
		<>
			<MyInput
				type="search"
				placeholder="Search..."
				ref={valInpRef}
				onKeyDown={handleKey}
			/>
			<Button
				variant="contained"
				color="success"
				fullWidth
				onClick={() => {
					dispatch(searchMovies(valInpRef.current.value));
				}}
			>
				Search
			</Button>
		</>
	);
}

export default Search;
