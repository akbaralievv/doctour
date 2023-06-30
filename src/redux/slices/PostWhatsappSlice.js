import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.WHATSAPP_URL;

export const postWhatsAppSlice = createAsyncThunk('postWhatsAppSlice', async function (value) {
  try {
    const response = await axios.post(URL, value);
    if (response.status === 200) {
      const data = await response.data;
      return data.results;
    } else {
      throw Error(`error ${response.status}`);
    }
  } catch (err) {
    return console.error(err.message);
  }
});

const initialState = { data: {}, error: '', loading: false };

const whatsAppSlice = createSlice({
  name: 'createAccSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(postWhatsAppSlice.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(postWhatsAppSlice.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(postWhatsAppSlice.pending, (state) => {
      state.loading = true;
    });
  },
});
export default whatsAppSlice.reducer;
