import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const servicesURL = 'https://64877e44beba62972790bb18.mockapi.io/';

export const getServices = createAsyncThunk('getServices', async function (city) {
  try {
    const response = await axios.get(servicesURL + city);
    if (response.status === 200) {
      const users = await response.data;
      return users[0].services;
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
