import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.BASE_URL + 'speciality/';

export const getSpecialty = createAsyncThunk('getSpecial', async function (city) {
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

const getSpecialtySlice = createSlice({
  name: 'getSpecialtySlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getSpecialty.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload
        ? [...action.payload].sort((a, b) => a.name.localeCompare(b.name))
        : [];
    });
    builder.addCase(getSpecialty.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = [];
    });
    builder.addCase(getSpecialty.rejected, (state, action) => {
      state.loading = true;
      state.error = action.error.message;
      state.data = [];
    });
  },
});
export default getSpecialtySlice.reducer;
