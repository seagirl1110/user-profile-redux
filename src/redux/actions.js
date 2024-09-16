export const SET_USER_INFO = 'SET_USER_INFO';

export const setUserInfo = (userData) => ({
  type: SET_USER_INFO,
  payload: userData,
});
