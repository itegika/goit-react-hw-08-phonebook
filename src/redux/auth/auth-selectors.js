export const checkIsLoggedIn = (state) => state.auth.isLoggedIn;
export const getUserName = (state) => state.auth.user?.name;
export const fetchCurrentUser = (state) => state.auth.isFetchingCurrentUser;
