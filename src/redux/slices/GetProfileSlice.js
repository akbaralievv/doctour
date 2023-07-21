import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.BASE_URL + 'doctors/';

export const getProfile = createAsyncThunk('getProfile', async function (id) {
  try {
    const response = await axios.get(`${URL}${id}`);
    if (response.status === 200) {
      const data = await response.data;
      return data;
    }
  } catch (err) {
    throw err.response.status;
  }
});

const initialState = { data: [], error: '', loading: false };

const getProfileSlice = createSlice({
  name: 'getProfileSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload ?? [];
    });
    builder.addCase(getProfile.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = [];
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
  },
});

export default getProfileSlice.reducer;
