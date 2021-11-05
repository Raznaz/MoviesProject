import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import { generateSessionID } from '../api/api';
import { generateSessionAndGetUser } from '../redux/actions/thunk';

function Session() {
	const history = useHistory();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(generateSessionAndGetUser());
		history.push('/');
		return () => {
			localStorage.removeItem('request_token');
		};
	}, [dispatch]);

	// const generateSession = async () => {
	// 	const request_token = localStorage.getItem('request_token');
	// 	const sessionResponse = await generateSessionID(request_token);
	// 	console.log(sessionResponse);

	// 	// localStorage.setItem('session_id', sessionResponse.session_id);
	// 	history.push('/');
	// };

	return (
		<div>
			<h2>Hello session page</h2>
		</div>
	);
}

export default Session;
