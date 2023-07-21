import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { createAuthorizedRequest } from '../../Functions/RefreshToken';

import { links } from './links';

const URL = links.POST_FAVORITES;

export const deleteFavorites = createAsyncThunk('deleteFavorites', async function (data) {
  try {
    const config = {
      method: 'DELETE',
      url: URL + data,
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

const deleteFavoritesSlice = createSlice({
  name: 'deleteFavoritesSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(deleteFavorites.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    });
    builder.addCase(deleteFavorites.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = '';
    });
    builder.addCase(deleteFavorites.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = '';
    });
  },
});
export default deleteFavoritesSlice.reducer;
