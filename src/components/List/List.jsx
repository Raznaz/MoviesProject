import React, { useEffect, useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useSelector } from 'react-redux';
import {
	filterMovie,
	listGenres,
	listLanguages,
} from '../../redux/actions/thunk';
import { useDispatch } from 'react-redux';
import {
	Button,
	Divider,
	MenuItem,
	TextField,
	Typography,
} from '@mui/material';
import { LocalMovies } from '@mui/icons-material';
import './list.scss';
import { Box } from '@mui/system';

export default function NestedList() {
	const [open, setOpen] = useState(true);
	const [filter, setFilter] = useState({
		genres: [],
		language: '',
	});

	const dispatch = useDispatch();

	// console.log(filter);

	useEffect(() => {
		dispatch(listGenres());
		dispatch(listLanguages());
	}, [dispatch]);

	const { genres, languages } = useSelector(
		(state) => state.moviesArr,
	);

	const handleClick = () => {
		setOpen(!open);
	};

	// Languages

	const handleChange = (event) => {
		setFilter({ ...filter, language: event.target.value });
	};

	const handleGenreChoose = (e, id) => {
		e.target.classList.toggle('select');
		if (e.target.classList.contains('select')) {
			setFilter({ ...filter, genres: [...filter.genres, id] });
		} else {
			setFilter({
				...filter,
				genres: [...filter.genres.filter((genre) => genre !== id)],
			});
		}
	};

	const startFilter = () => {
		console.log('START FILTER', filter.genres);
		dispatch(filterMovie(filter));
	};

	return (
		<List
			sx={{
				width: '100%',
				maxWidth: 360,
				bgcolor: 'background.paper',
				mt: 2,
			}}
			component="nav"
			aria-labelledby="nested-list-subheader"
			subheader={
				<ListSubheader
					component="div"
					id="nested-list-subheader"
				></ListSubheader>
			}
		>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<LocalMovies />
				</ListItemIcon>
				<ListItemText primary="FILTER" />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				<Typography
					component="h3"
					variant="h5"
					sx={{ textAlign: 'center', bgcolor: '#ffe4a9' }}
				>
					GENRES
				</Typography>
				{genres.map((genre) => (
					<Button
						key={genre.id}
						variant="outlined"
						sx={{ borderRadius: '20px', margin: '1px' }}
						onClick={(e) => handleGenreChoose(e, genre.id)}
					>
						{genre.name}
					</Button>
				))}
				<Typography
					component="h3"
					variant="h5"
					sx={{ textAlign: 'center', bgcolor: '#ffe4a9' }}
				>
					LANGUAGE
				</Typography>
				<Box
					component="form"
					// sx={{
					// 	'& .MuiTextField-root': { mb: 2 },
					// }}
					noValidate
					autoComplete="off"
				>
					<TextField
						id="filled-select-currency"
						select
						label="Select language"
						value={filter.language}
						onChange={handleChange}
						// helperText="Please select language"
						variant="outlined"
						fullWidth
					>
						{languages.map((lang, i) => (
							<MenuItem key={i} value={lang.iso_639_1}>
								{lang.english_name}
							</MenuItem>
						))}
					</TextField>
				</Box>
				<Divider />
				<Button
					fullWidth
					variant="contained"
					color="success"
					onClick={() => startFilter()}
				>
					START FILTER
				</Button>
			</Collapse>
		</List>
	);
}
