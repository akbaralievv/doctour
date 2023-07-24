import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createAuthorizedRequest } from '../../Functions/RefreshToken';

import { links } from './links';

const URL = links.USER_PROFILE;

export const getUserProfile = createAsyncThunk('getUserProfile', async function () {
  try {
    const config = {
      method: 'get',
      url: URL,
    };
    const response = await createAuthorizedRequest(config);
    if (response.status === 200) {
      const data = await response.data;
      return data.results;
    }
  } catch (err) {
    throw err.response.status;
  }
});

const initialState = { data: '', error: '', loading: false };

const getUserProfileSlice = createSlice({
  name: 'getUserProfileSlice',
  initialState,
  reducers: {
    clearData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload ?? '';
    });
    builder.addCase(getUserProfile.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = '';
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = '';
    });
  },
});
export const { clearData } = getUserProfileSlice.actions;
export default getUserProfileSlice.reducer;
