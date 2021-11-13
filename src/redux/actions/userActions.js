export const FETCH_USER_SUCCESS = '[User] Fetch user Success';
export const USER_LOGOUT = '[User] User LogOut';

export const fetchUserSuccess = (user) => ({
	type: FETCH_USER_SUCCESS,
	payload: { user },
});

export const userLogOut = () => ({
	type: USER_LOGOUT,
});
