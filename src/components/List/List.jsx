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
	fetchMovie,
	filterMovie,
	listGenres,
	listLanguages,
} from '../../redux/actions/thunk';
import { useDispatch } from 'react-redux';
import {
	Button,
	MenuItem,
	TextField,
	Typography,
} from '@mui/material';
import { LocalMovies } from '@mui/icons-material';
import './list.scss';
import { Box } from '@mui/system';
import {
	changePageNumber,
	createFilterGenres,
	createFilterLanguage,
	resetFilter,
} from '../../redux/actions/movieActinos';

export default function NestedList() {
	const [open, setOpen] = useState(false);
	// const [filter, setFilter] = useState({
	// 	genres: [],
	// 	language: '',
	// });

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listGenres());
		dispatch(listLanguages());
	}, [dispatch]);

	// useEffect(() => {
	// 	dispatch(createFilter(filter));
	// }, [filter]);

	const { genres, languages, filter } = useSelector(
		(state) => state.moviesArr,
	);

	// console.log('FILTER:', filter);
	// console.log('LIST', mainFilter);
	const handleClick = () => {
		setOpen(!open);
	};

	// Languages

	const handleChange = (event) => {
		// setFilter({ ...filter, language: event.target.value });

		dispatch(createFilterLanguage(event.target.value));
	};

	const handleGenreChoose = (e, id) => {
		console.log('id', id);
		dispatch(createFilterGenres(id));
		// if (filter.genres.find((item) => id === item)) {
		// 	setFilter({
		// 		...filter,
		// 		genres: filter.genres.filter((item) => item !== id),
		// 	});
		// } else {
		// 	setFilter({ ...filter, genres: [...filter.genres, id] });
		// }
	};

	const startFilter = () => {
		// console.log('START FILTER', filter.genres);
		// dispatch(createFilter(filter));
		dispatch(filterMovie(filter));
		dispatch(changePageNumber(1));
	};

	const handleResetFilter = () => {
		dispatch(resetFilter());
		// setFilter({ genres: [], language: '' });
		dispatch(fetchMovie());
	};

	return (
		<List
			sx={{
				width: '100%',
				maxWidth: '100%',
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
			<ListItemButton
				onClick={handleClick}
				sx={{ bgcolor: 'info.main' }}
			>
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
					sx={{
						textAlign: 'center',
						bgcolor: 'warning.dark',
					}}
				>
					GENRES
				</Typography>
				{genres.map((genre) => {
					let id = filter.genres.find((item) => item === genre.id);
					// console.log('ID:', id);

					if (id === genre.id) {
						return (
							<Button
								key={genre.id}
								variant="outlined"
								sx={{
									borderRadius: '20px',
									margin: '1px',
									bgcolor: 'text.primary',
								}}
								onClick={(e) => handleGenreChoose(e, genre.id)}
							>
								{genre.name}
							</Button>
						);
					}

					return (
						<Button
							key={genre.id}
							variant="outlined"
							sx={{
								borderRadius: '20px',
								margin: '1px',
								bgcolor: 'background.default',
							}}
							onClick={(e) => handleGenreChoose(e, genre.id)}
						>
							{genre.name}
						</Button>
					);
				})}
				<Typography
					component="h3"
					variant="h5"
					sx={{
						textAlign: 'center',
						bgcolor: 'warning.dark',
						my: 2,
					}}
				>
					LANGUAGE
				</Typography>
				<Box
					component="form"
					// sx={{
					// 	'& .MuiTextField-root': { mb: 2 },
					// }}
					sx={{ mb: 2 }}
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
				<Box sx={{ display: 'flex' }}>
					<Button
						fullWidth
						variant="contained"
						color="success"
						onClick={() => startFilter()}
					>
						Confirm
					</Button>
					<Button
						fullWidth
						variant="contained"
						sx={{ bgcolor: 'error.light' }}
						onClick={() => handleResetFilter()}
					>
						Reset
					</Button>
				</Box>
			</Collapse>
		</List>
	);
}
