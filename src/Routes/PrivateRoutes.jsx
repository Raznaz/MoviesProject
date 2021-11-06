import React from 'react';
import { Redirect, Route } from 'react-router';

function PrivateRoutes({ path, component: Component }) {
	return (
		<>
			<Route
				exact
				path={path}
				render={(props) => {
					if (!localStorage.getItem('session_id')) {
						return <Component />;
					}
					return <Redirect to="/login" />;
				}}
			/>
		</>
	);
}

export default PrivateRoutes;
