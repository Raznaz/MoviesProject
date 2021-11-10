export const SHOW_LOADER = '[APP] Show loader';
export const HIDE_LOADER = '[APP] Hide loader';
export const TOGGLE_SNACK = '[APP] Toggle snack message';
export const TOGGLE_ALERT_SNACK = '[APP] Toggle alert snack';

export const showLoader = (params) => ({
	type: SHOW_LOADER,
});

export const hideLoader = (params) => ({
	type: HIDE_LOADER,
});

export const toggleSnackMessage = () => ({
	type: TOGGLE_SNACK,
});

export const toggleAlertSnackMsg = (error) => ({
	type: TOGGLE_ALERT_SNACK,
	payload: { error },
});
