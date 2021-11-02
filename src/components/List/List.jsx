import React, { useEffect, useState } from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import DraftsIcon from '@mui/icons-material/Drafts';
// import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
// import StarBorder from '@mui/icons-material/StarBorder';
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
import Filter from '../Filter/Filter';
import { Box } from '@mui/system';

export default function NestedList() {
	const [open, setOpen] = useState(true);
	const [filter, setFilter] = useState({
		genres: [],
		language: '',
	});
	const dispatch = useDispatch();
	console.log(filter);
	useEffect(() => {
		dispatch(listGenres());
		dispatch(listLanguages());
	}, [dispatch]);

	const { genres, languages } = useSelector(
		(state) => state.moviesArr,
	);
	// console.log('LIST', genres);

	const handleClick = () => {
		setOpen(!open);
	};

	// Languages
	// const [currency, setCurrency] = useState('EUR');

	const handleChange = (event) => {
		// setCurrency(event.target.value);
		setFilter({ ...filter, language: event.target.value });
	};

	const handleGenreChoose = (e, id) => {
		console.log(id);
		e.target.classList.toggle('select');
		if (e.target.classList.contains('select')) {
			setFilter({ ...filter, genres: [...filter.genres, id] });
		} else {
			// setFilter([...filter.filter((genre) => genre !== id)]);
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
					sx={{ textAlign: 'center', bgcolor: '#eee' }}
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
					sx={{ textAlign: 'center', bgcolor: '#eee' }}
				>
					LANGUAGE
				</Typography>
				<Box
					component="form"
					sx={{
						'& .MuiTextField-root': { mb: 2 },
					}}
					noValidate
					autoComplete="off"
				>
					<div></div>
					<div>
						<TextField
							id="filled-select-currency"
							select
							label="Select language"
							value={filter.language}
							onChange={handleChange}
							helperText="Please select language"
							variant="outlined"
							fullWidth
						>
							{languages.map((lang, i) => (
								<MenuItem key={i} value={lang.iso_639_1}>
									{lang.english_name}
								</MenuItem>
							))}
						</TextField>
					</div>
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
