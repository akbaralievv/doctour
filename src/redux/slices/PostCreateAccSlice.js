import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.USERS_URL + 'register/';

export const postCreateAccSlice = createAsyncThunk('postCreateAccSlice', async function (value) {
  try {
    const response = await axios.post(URL, value);
    if (response.status === 200) {
      const data = await response.data;
      return data;
    } else {
      throw Error(`error ${response.status}`);
    }
  } catch (err) {
    return console.error(err.message);
  }
});

const initialState = { data: '', error: '', loading: false };

const createAccSlice = createSlice({
  name: 'createAccSlice',
  initialState,
  reducers: {
    setSuccess: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postCreateAccSlice.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload;
    });
    builder.addCase(postCreateAccSlice.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = '';
    });
    builder.addCase(postCreateAccSlice.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message;
      state.data = '';
    });
  },
});
export const { setSuccess } = createAccSlice.actions;
export default createAccSlice.reducer;
