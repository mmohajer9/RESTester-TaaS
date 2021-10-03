import { createSlice } from '@reduxjs/toolkit';
import getUserRemoteInfo from './getUserRemoteInfo';
import login from './login';

const initialAuthState = {
  isAuthenticated: false,
  userInfo: {},
  token: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    setUserInfo(currentState, { payload }) {
      currentState.userInfo = payload.user;
      localStorage.setItem('userInfo', JSON.stringify(payload.user));
    },
    setLoginInfo(currentState, { payload }) {
      currentState.userInfo = payload.user;
      currentState.token = {
        access: payload.access_token,
        refresh: payload.refresh_token,
      };
      currentState.isAuthenticated = true;
      localStorage.setItem('userInfo', JSON.stringify(payload.user));
      localStorage.setItem('token', JSON.stringify(currentState.token));
    },
    logout(currentState) {
      localStorage.clear();
      currentState.userInfo = {};
      currentState.token = {};
      currentState.isAuthenticated = false;
    },
    getUserLocalInfo(currentState) {
      try {
        const userInfo = JSON.parse(localStorage.getItem('userInfo'));
        currentState.userInfo = userInfo ? userInfo : {};
      } catch (error) {
        currentState.userInfo = {};
      }
    },
    getUserTokenInfo(currentState) {
      try {
        const token = JSON.parse(localStorage.getItem('token'));
        currentState.token = token ? token : {};
        currentState.isAuthenticated = token ? true : false;
      } catch (error) {
        currentState.userInfo = {};
        currentState.isAuthenticated = false;
      }
    },
  },
});

authSlice.actions.login = login;
authSlice.actions.getUserRemoteInfo = getUserRemoteInfo;

export const authActions = authSlice.actions;

export default authSlice.reducer;
