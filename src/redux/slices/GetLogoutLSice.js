import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { createAuthorizedRequest } from '../../Functions/RefreshToken';

import { links } from './links';

const URL = links.LOGOUT_URL;

export const getLogout = createAsyncThunk('getLogout', async function () {
  try {
    const config = {
      method: 'get',
      url: URL,
    };
    const response = await createAuthorizedRequest(config);
    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (err) {
    throw err.response.status;
  }
});

const initialState = { data: '', error: '', loading: false };

const getLogoutSlice = createSlice({
  name: 'getLogoutSlice',
  initialState,
  reducers: {
    clearData: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getLogout.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload ?? '';
    });
    builder.addCase(getLogout.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = '';
    });
    builder.addCase(getLogout.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = '';
    });
  },
});
export const { clearData } = getLogoutSlice.actions;
export default getLogoutSlice.reducer;
