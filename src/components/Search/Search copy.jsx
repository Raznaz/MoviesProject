import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import {
	resetFilter,
	searchMovies,
} from '../../redux/actions/movieActinos';
import { MyInput } from '../UI/Input/MyInput';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';
import { findMovie } from '../../redux/actions/thunk';

function Search() {
	const valInpRef = useRef();
	const dispatch = useDispatch();
	const { searchValue } = useSelector((state) => state.moviesArr);

	useEffect(() => {
		searchValue && dispatch(findMovie(searchValue));
	}, [dispatch, searchValue]);

	const handleKey = (e) => {
		if (e.key === 'Enter') {
			dispatch(resetFilter());
			dispatch(searchMovies(valInpRef.current.value));
		}
	};

	const handleClick = () => {
		// dispatch(searchMovies(valInpRef.current.value));
		dispatch(resetFilter());
		dispatch(searchMovies(valInpRef.current.value));

		// TODO: Исправить
		dispatch(findMovie(valInpRef.current.value));
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
				onClick={() => handleClick()}
			>
				Search
			</Button>
		</>
	);
}

export default Search;