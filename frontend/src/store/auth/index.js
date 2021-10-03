import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {
  isAuthenticated: true,
  userInfo: {},
};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    testMe(currentState, action) {
      console.log(currentState, action);
    },
  },
});

// add thunk actions like this:
// authSlice.actions.login = login;


export const authActions = authSlice.actions;

export default authSlice.reducer;
