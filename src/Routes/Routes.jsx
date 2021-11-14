import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { Box } from '@mui/system';
import Main from '../components/Layout/Main';
import Error from '../pages/Error/Error';
import FavoriteMovies from '../pages/FavoriteMovies/FavoriteMovies';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import User from '../pages/User/User';
import MovieById from '../pages/MovieById/MovieById';
import Registration from '../pages/Registration/Registration';
import PrivateRoutes from './PrivateRoutes';

function Routes() {
	return (
		<Box sx={{ minHeight: 'calc(100vh - 402px)' }}>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/registration" component={Registration} />
				<Route path="/login" component={Login} />
				<PrivateRoutes path="/movies" component={Main} />
				<PrivateRoutes path="/movie/:movieId" component={MovieById} />
				<PrivateRoutes path="/favorite" component={FavoriteMovies} />
				<PrivateRoutes path="/user/:userId" component={User} />
				<Route path="/error" component={Error} />
				<Redirect to="/error" />
			</Switch>
		</Box>
	);
}

export default Routes;
