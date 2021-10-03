import { createSlice } from '@reduxjs/toolkit';
import createTestPlan from './createTestPlan';
import getTestPlans from './getTestPlans';

const initialCommonState = {
  isCreateOpen: false,
  testPlans: [],
  testSuites: [],
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
    setTestPlans(currState, { payload }) {
      currState.testPlans = payload.testPlans;
    },
    setTestSuites(currState, { payload }) {
      currState.testSuites = payload.testSuites;
    },
  },
});

// add thunk actions like this:
commonSlice.actions.createTestPlan = createTestPlan;
commonSlice.actions.getTestPlans = getTestPlans;

export const commonActions = commonSlice.actions;

export default commonSlice.reducer;
