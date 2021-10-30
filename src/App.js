import { Container } from '@mui/material';
import { Provider } from 'react-redux';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Error from './pages/Error/Error';
import Home from './pages/Home/Home';
import Kinoafisha from './pages/Kinoafisha/Kinoafisha';
import MovieById from './pages/MovieById/MovieById';
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
							<Route component={Error} />
						</Switch>
					</Container>
					<Footer />
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
