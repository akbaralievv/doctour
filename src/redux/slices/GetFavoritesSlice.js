import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.POST_FAVORITES;

export const getFavorites = createAsyncThunk('getFavorites', async function () {
  try {
    const response = await axios.get(URL);
    if (response.status === 200) {
      const data = await response.data;
      return data.results;
    }
  } catch (err) {
    throw err.response.status;
  }
});

const initialState = { data: [], error: '', loading: false };

const getFavoritesSlice = createSlice({
  name: 'getFavoritesSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getFavorites.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    });
    builder.addCase(getFavorites.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = [];
    });
    builder.addCase(getFavorites.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
  },
});
export default getFavoritesSlice.reducer;
