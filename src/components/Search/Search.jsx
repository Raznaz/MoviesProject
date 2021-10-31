import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../../redux/actions/movieActinos';
import { MyInput } from '../UI/Input/MyInput';

function Search() {
	const valInpRef = useRef();
	const dispatch = useDispatch();
	return (
		<MyInput
			type="search"
			placeholder="Search..."
			onChange={() => dispatch(searchMovies(valInpRef.current.value))}
			ref={valInpRef}
		/>
	);
}

export default Search;
