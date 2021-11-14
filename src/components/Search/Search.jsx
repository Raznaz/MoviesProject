import React from 'react';
import { useDispatch } from 'react-redux';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaSearchForm } from '../../helper';
import Form from '../UI/Form/Form';
import { findMovie } from '../../redux/actions/thunk';
import {
	resetFilter,
	searchValueStr,
} from '../../redux/actions/movieActinos';

function MySearch() {
	const dispatch = useDispatch();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schemaSearchForm),
	});

	const onSubmit = (data) => {
		dispatch(resetFilter());
		dispatch(findMovie(data.search));
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
				error={!!errors.search}
				helperText={errors?.search?.message}
			/>
		</Form>
	);
}

export default MySearch;
