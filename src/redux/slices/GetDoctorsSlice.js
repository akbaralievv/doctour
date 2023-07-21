import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import { links } from './links';

const URL = links.BASE_URL + 'doctors/';

export const getDoctors = createAsyncThunk(
  'getDoctors',
  async function ({ city, value, idSpecialty, searchValue, currentPage }) {
    try {
      const response = await axios.get(
        `${URL}?search=${searchValue}&city=${city}&specialties=${idSpecialty}${
          searchValue ? '' : `&page=${currentPage}`
        }`,
      );
      if (response.status === 200) {
        const data = await response.data;
        return data;
      }
    } catch (err) {
      throw err.response.status;
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
      state.error = '';
      state.data = action.payload ? action.payload : [];
    });
    builder.addCase(getDoctors.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = [];
    });
    builder.addCase(getDoctors.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
  },
});
export const { setIdSpecialty, setNameSpecialty } = getDoctorsSlice.actions;
export default getDoctorsSlice.reducer;
