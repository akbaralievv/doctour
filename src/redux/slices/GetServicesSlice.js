import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.BASE_URL + '/service/';

export const getServices = createAsyncThunk('getServices', async function (city) {
  try {
    const response = await axios.get(URL);
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

const initialState = { data: [], error: '', loading: false };

const getServicesSlice = createSlice({
  name: 'getServicesSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getServices.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});
export default getServicesSlice.reducer;