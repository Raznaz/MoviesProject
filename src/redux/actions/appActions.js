export const SHOW_LOADER = '[APP] Show loader';
export const HIDE_LOADER = '[APP] Hide loader';
export const TOGGLE_SNACK = '[APP] Toggle snack message';
// export const TOGGLE_ALERT_SNACK = '[APP] Toggle alert snack';
export const OPEN_ALERT_SNACK = '[APP] Open alert snack';
export const CLOSE_ALERT_SNACK = '[APP] Close alert snack';
export const MODAL_TOGGLE = '[APP] Toggle modal window';

export const showLoader = (params) => ({
	type: SHOW_LOADER,
});

export const hideLoader = (params) => ({
	type: HIDE_LOADER,
});

export const toggleSnackMessage = () => ({
	type: TOGGLE_SNACK,
});

export const openAlertSnackMsg = (error) => ({
	type: OPEN_ALERT_SNACK,
	payload: { error },
});
export const closeAlertSnackMsg = (error) => ({
	type: CLOSE_ALERT_SNACK,
	payload: { error },
});

export const toggleModalWindow = () => ({
	type: MODAL_TOGGLE,
});
