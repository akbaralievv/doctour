import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.BASE_URL + '/doctors/';

export const getDoctors = createAsyncThunk(
  'getDoctors',
  async function ({ city, value, idSpecialty }) {
    try {
      const response = await axios.get(
        `${URL}/?search=${value}&city=${city}&specialties=${idSpecialty}`,
      );
      if (response.status === 200) {
        const data = await response.data;
        return data.results;
      } else {
        throw Error(`error ${response.status}`);
      }
    } catch (err) {
      return console.error(err.message);
    }
  },
);
const initialState = { data: [], error: '', loading: false, idSpecialty: '', nameSpecialty: '' };

const getDoctorsSlice = createSlice({
  name: 'getDoctorsSlice',
  initialState,
  reducers: {
    setIdSpecialty: (state, action) => {
      state.idSpecialty = action.payload;
    },
    setNameSpecialty: (state, action) => {
      state.nameSpecialty = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDoctors.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getDoctors.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
    builder.addCase(getDoctors.pending, (state) => {
      state.loading = true;
    });
  },
});
export const { setIdSpecialty, setNameSpecialty } = getDoctorsSlice.actions;
export default getDoctorsSlice.reducer;
