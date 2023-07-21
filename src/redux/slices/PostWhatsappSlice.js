import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.BASE_URL + 'whatsapp-send/';

export const postWhatsAppSlice = createAsyncThunk('postWhatsAppSlice', async function (value) {
  try {
    const response = await axios.post(URL, value);
    const requestUrl = response.request.responseURL;
    if (response.status === 302) {
      console.log(requestUrl);
      const data = await response.data;
      return data.results;
    }
  } catch (err) {
    throw err.response.status;
  }
});

const initialState = { data: {}, error: '', loading: false };

const whatsAppSlice = createSlice({
  name: 'createAccSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postWhatsAppSlice.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    });
    builder.addCase(postWhatsAppSlice.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = [];
    });
    builder.addCase(postWhatsAppSlice.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
  },
});
export default whatsAppSlice.reducer;
