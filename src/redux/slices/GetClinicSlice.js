import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.BASE_URL + 'clinics/';

export const getClinic = createAsyncThunk('getClinic', async function ({ city, searchValue }) {
  try {
    const response = await axios.get(`${URL}?search=${searchValue}&city=${city}`);
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
      state.error = '';
      state.data = action.payload ? action.payload : [];
    });
    builder.addCase(getClinic.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = [];
    });
    builder.addCase(getClinic.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message;
      state.data = [];
    });
  },
});
export default getClinicSlice.reducer;
