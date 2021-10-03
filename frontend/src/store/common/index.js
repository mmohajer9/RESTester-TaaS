import { createSlice } from '@reduxjs/toolkit';

const initialCommonState = {
  isCreateOpen: false,
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
// commonSlice.actions.login = login;

export const commonActions = commonSlice.actions;

export default commonSlice.reducer;
