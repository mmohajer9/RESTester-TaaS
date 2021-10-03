import { configureStore } from '@reduxjs/toolkit';
import authReducer from './auth/';
import commonReducer from './common/';

const store = configureStore({
  reducer: {
    auth: authReducer,
    common: commonReducer,
  },
});

export default store;
