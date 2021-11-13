import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Layout/Footer';
import Header from './components/Layout/Header';
import Theme from './components/UI/Theme/Theme';
import { store } from './redux/store';
import Routes from './Routes/Routes';

function App() {
	return (
		<Provider store={store}>
			<Theme>
				<BrowserRouter>
					<Header />
					<Routes />
					<Footer />
				</BrowserRouter>
			</Theme>
		</Provider>
	);
}

export default App;
