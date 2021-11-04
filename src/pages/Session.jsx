import React, { useEffect } from 'react';
import { generateSessionID } from '../api';

function Session() {
	useEffect(() => {
		generateSession();
	}, []);

	const generateSession = async () => {
		const request_token = localStorage.getItem('request_token');
		const sessionResponse = await generateSessionID(request_token);
		console.log(sessionResponse);

		localStorage.setItem('session_id', sessionResponse.session_id);

		return () => {
			localStorage.removeItem('request_token');
		};
	};

	return (
		<div>
			<h2>Hello session page</h2>
		</div>
	);
}

export default Session;
