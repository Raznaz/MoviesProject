import { Container } from '@mui/material';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import { store } from './redux/store';
import Routes from './Routes/Routes';

function App() {
	return (
		<>
			<Provider store={store}>
				<BrowserRouter>
					<Header />
					<Container maxWidth="lg">
						<Routes />
					</Container>
					<Footer />
				</BrowserRouter>
			</Provider>
		</>
	);
}

export default App;
