export const FETCH_USER_SUCCESS = '[User] Fetch user Success';

export const fetchUserSuccess = (user) => ({
	type: FETCH_USER_SUCCESS,
	payload: { user },
});
