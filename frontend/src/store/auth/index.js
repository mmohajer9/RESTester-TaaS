import { createSlice } from '@reduxjs/toolkit';

const initialAuthState = {};

const authSlice = createSlice({
  name: 'auth',
  initialState: initialAuthState,
  reducers: {
    testMe(currentState, action) {
      console.log(currentState, action);
    },
  },
});


export const authActions = authSlice.actions;

export default authSlice.reducer;
