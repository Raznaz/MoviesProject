import { Container } from '@mui/material';
import { Provider } from 'react-redux';
import {
	Switch,
	Route,
	BrowserRouter,
	Redirect,
} from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Kinoafisha from './pages/Kinoafisha/Kinoafisha';
import Login from './pages/Login/Login';
import MovieById from './pages/MovieById/MovieById';
import Registration from './pages/Registration/Registration';
// import Session from './pages/Session';
import { store } from './redux/store';

function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Container maxWidth="lg">
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/movies" component={Kinoafisha} />
							<Route path="/movie/:movieId" component={MovieById} />
							<Route path="/registration" component={Registration} />
							<Route path="/login" component={Login} />
							<Route path="/error" component={Error} />
							<Redirect to="/error" />
						</Switch>
					</Container>
					<Footer />
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
