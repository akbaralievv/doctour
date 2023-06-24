import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.CLINIC_URL;

export const getClinic = createAsyncThunk('getClinic', async function ({ city, value }) {
  try {
    const response = await axios.get(`${URL}?search=${value}&city=${city}`);
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

const getClinicSlice = createSlice({
  name: 'getClinicSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getClinic.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});
export default getClinicSlice.reducer;
