import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'), () => {
	// eslint-disabled-next-line no-console
	console.log(
		'%c Приложение успешно запущено',
		'background : #00ff00; color: #000000; padding: 2.5px',
	);
});
