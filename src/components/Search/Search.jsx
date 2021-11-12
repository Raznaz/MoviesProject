import React from 'react';
import { useDispatch } from 'react-redux';
import {
	resetFilter,
	searchMovies,
	searchValueStr,
} from '../../redux/actions/movieActinos';
import { IconButton, InputAdornment, TextField } from '@mui/material';
// import { useSelector } from 'react-redux';
import { findMovie } from '../../redux/actions/thunk';
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from 'react-hook-form';
import Form from '../UI/Form/Form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
	search: yup.string().min(3, 'Should be most then 3 letter'),
});

function MySearch() {
	const dispatch = useDispatch();
	// const { searchValue } = useSelector((state) => state.moviesArr);

	// useEffect(() => {
	// 	// searchValue && dispatch(findMovie(searchValue));
	// }, [dispatch, searchValue]);

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = (data) => {
		console.log(data);
		dispatch(resetFilter());
		dispatch(findMovie(data.search));
		// dispatch(searchMovies(data.search));
		dispatch(searchValueStr(data.search));
	};

	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<TextField
				{...register('search')}
				label="Search"
				fullWidth
				InputProps={{
					endAdornment: (
						<InputAdornment position="start">
							<IconButton onClick={handleSubmit(onSubmit)}>
								<SearchIcon />
							</IconButton>
						</InputAdornment>
					),
				}}
				// onKeyDown={handleKey}
				error={!!errors.search}
				helperText={errors?.search?.message}
			/>
			{/* <Button
				variant="contained"
				color="success"
				fullWidth
				type="submit"
			>
				Search
			</Button> */}
			{/* <MyInput
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
			</Button> */}
		</Form>
	);
}

export default MySearch;
