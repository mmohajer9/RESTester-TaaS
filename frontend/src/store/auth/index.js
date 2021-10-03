import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import getUserRemoteInfo from './getUserRemoteInfo';
import login from './login';
import register from './register';

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
      toast.info('You have logged out Successfully', {
        position: 'top-right',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: 'colored',
      });
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
authSlice.actions.register = register;

export const authActions = authSlice.actions;

export default authSlice.reducer;
