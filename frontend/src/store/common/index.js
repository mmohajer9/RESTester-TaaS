import { createSlice } from '@reduxjs/toolkit';
import createTestPlan from './createTestPlan';

const initialCommonState = {
  isCreateOpen: false,
  testPlans : [],
  testSuites : [],
};

const commonSlice = createSlice({
  name: 'common',
  initialState: initialCommonState,
  reducers: {
    openCreateModal(currState) {
      currState.isCreateOpen = true;
    },
    closeCreateModal(currState) {
      currState.isCreateOpen = false;
    },
  },
});

// add thunk actions like this:
commonSlice.actions.createTestPlan = createTestPlan;

export const commonActions = commonSlice.actions;

export default commonSlice.reducer;
