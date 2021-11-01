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
import { listGenres } from '../../redux/actions/thunk';
import { useDispatch } from 'react-redux';
import { Button } from '@mui/material';
import { LocalMovies } from '@mui/icons-material';
import { set } from 'react-hook-form';
import './list.scss';

export default function NestedList() {
	const [open, setOpen] = useState(true);
	const [filter, setFilter] = useState([]);
	const dispatch = useDispatch();
	console.log(filter);
	useEffect(() => {
		dispatch(listGenres());
	}, []);

	const { genres } = useSelector((state) => state.moviesArr);
	// console.log('LIST', genres);

	const handleClick = () => {
		setOpen(!open);
	};

	const handleGenreChoose = (e, id) => {
		console.log(id);
		e.target.classList.toggle('select');
		if (e.target.classList.contains('select')) {
			setFilter([...filter, id]);
		} else {
			setFilter([...filter.filter((genre) => genre !== id)]);
		}
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
				<ListSubheader component="div" id="nested-list-subheader">
					FILTER
				</ListSubheader>
			}
		>
			<ListItemButton onClick={handleClick}>
				<ListItemIcon>
					<LocalMovies />
				</ListItemIcon>
				<ListItemText primary="GENRES" />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
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
			</Collapse>
		</List>
	);
}
