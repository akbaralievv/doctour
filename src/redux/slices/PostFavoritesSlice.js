import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { createAuthorizedRequest } from '../../Functions/RefreshToken';

import { links } from './links';

const URL = links.POST_FAVORITES;

export const postFavorites = createAsyncThunk('postFavorites', async function (data) {
  try {
    const config = {
      method: 'POST',
      url: URL,
      data: { doctor: data },
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

const postFavoritesSlice = createSlice({
  name: 'postFavoritesSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postFavorites.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    });
    builder.addCase(postFavorites.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = '';
    });
    builder.addCase(postFavorites.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = '';
    });
  },
});
export default postFavoritesSlice.reducer;
