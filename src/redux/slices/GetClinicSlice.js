import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.BASE_URL + 'clinics/';

export const getClinic = createAsyncThunk(
  'getClinic',
  async function ({ city, searchValue, idService, currentPage }) {
    try {
      const response = await axios.get(
        `${URL}?search=${searchValue}&city=${city}&subservice_clinic=${idService}&page=${currentPage}`,
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

const initialState = { data: [], error: '', loading: false, idService: '', nameService: '' };

const getClinicSlice = createSlice({
  name: 'getClinicSlice',
  initialState,
  reducers: {
    setIdService: (state, action) => {
      state.idService = action.payload;
    },
    setNameService: (state, action) => {
      state.nameService = action.payload;
    },
  },
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
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
  },
});
export const { setIdService, setNameService } = getClinicSlice.actions;
export default getClinicSlice.reducer;
