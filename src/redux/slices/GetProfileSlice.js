import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.BASE_URL + '/doctors/';

export const getProfile = createAsyncThunk('getProfile', async function (id) {
  try {
    const response = await axios.get(`${URL}/${id}`);
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
const initialState = { data: [], error: '', loading: false };

const getProfileSlice = createSlice({
  name: 'getProfileSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getProfile.pending, (state) => {
      state.loading = true;
    });
  },
});

export default getProfileSlice.reducer;
