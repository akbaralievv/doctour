import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const specialtyURL = 'https://64877e44beba62972790bb18.mockapi.io/';

export const getSpecialty = createAsyncThunk('getSpecial', async function (city) {
  try {
    const response = await axios.get(specialtyURL + city);
    if (response.status === 200) {
      const users = await response.data;
      return users[0].specialty;
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
      state.data = [...action.payload].sort((a, b) => a.specialty.localeCompare(b.specialty));
    });
  },
});
export default getSpecialtySlice.reducer;
