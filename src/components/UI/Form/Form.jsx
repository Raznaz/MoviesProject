import React from 'react';

function Form({ children, ...props }) {
	return (
		<form noValidate {...props}>
			{children}
		</form>
	);
}

export default Form;
