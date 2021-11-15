import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { LocalMovies } from '@mui/icons-material';
import {
	Collapse,
	ListItemText,
	ListItemIcon,
	ListItemButton,
	List,
	ListSubheader,
	Button,
	MenuItem,
	TextField,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import {
	changePageNumber,
	createFilterGenres,
	createFilterLanguage,
	resetFilter,
} from '../../redux/actions/movieActinos';
import {
	filterMovie,
	listGenres,
	listLanguages,
} from '../../redux/actions/thunk';

export default function Filter() {
	const [open, setOpen] = useState(false);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(listGenres());
		dispatch(listLanguages());
		return () => {
			dispatch(resetFilter());
		};
	}, [dispatch]);

	const { genres, languages, filter } = useSelector(
		(state) => state.moviesArr,
	);

	const handleClick = () => {
		setOpen(!open);
	};

	const handleChange = (event) => {
		dispatch(createFilterLanguage(event.target.value));
	};

	const handleGenreChoose = (e, id) => {
		dispatch(createFilterGenres(id));
	};

	const startFilter = () => {
		dispatch(filterMovie(filter));
		dispatch(changePageNumber(1));
	};

	const handleResetFilter = () => {
		dispatch(resetFilter());
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
						mb: 2,
					}}
				>
					GENRES
				</Typography>
				{genres.map((genre) => {
					let id = filter.genres.find((item) => item === genre.id);
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
					sx={{ mb: 1 }}
					noValidate
					autoComplete="off"
				>
					<TextField
						id="filled-select-currency"
						select
						label="Select language"
						value={filter.language}
						onChange={handleChange}
						variant="outlined"
						fullWidth
					>
						{languages
							.sort(function (a, b) {
								if (
									a.english_name.toLowerCase() <
									b.english_name.toLowerCase()
								)
									return -1;
								if (
									a.english_name.toLowerCase() >
									b.english_name.toLowerCase()
								)
									return 1;
								return 0;
							})
							.map((lang, i) => (
								<MenuItem key={i} value={lang.iso_639_1}>
									{lang.english_name}
								</MenuItem>
							))}
					</TextField>
				</Box>
				<Box
					sx={{ display: 'flex', justifyContent: 'space-between' }}
				>
					<Button
						// fullWidth
						variant="contained"
						color="success"
						onClick={() => startFilter()}
						disabled={!filter.language && !filter.genres.length}
						sx={{ flexBasis: '45%' }}
					>
						Confirm
					</Button>
					<Button
						// fullWidth
						variant="contained"
						sx={{ bgcolor: 'error.light', flexBasis: '45%' }}
						onClick={() => handleResetFilter()}
						disabled={!filter.language && !filter.genres.length}
					>
						Reset
					</Button>
				</Box>
			</Collapse>
		</List>
	);
}
