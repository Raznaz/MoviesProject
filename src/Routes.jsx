import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Kinoafisha from './pages/Kinoafisha/Kinoafisha';
import Login from './pages/Login/Login';
import MovieById from './pages/MovieById/MovieById';
import Registration from './pages/Registration/Registration';

function Routes() {
	return (
		<>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/movies" component={Kinoafisha} />
				<Route path="/movie/:movieId" component={MovieById} />
				<Route path="/registration" component={Registration} />
				<Route path="/login" component={Login} />
				<Route path="/error" component={Error} />
				<Redirect to="/error" />
			</Switch>
		</>
	);
}

export default Routes;
