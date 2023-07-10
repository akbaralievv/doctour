import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.BASE_URL + 'doctors/';
const refresh_URL = 'https://bekbolsun.pythonanywhere.com/api/v1/users/login/token/refresh/';

const refreshToken = async () => {
  try {
    const refresh_token = localStorage.getItem('refresh_token')?.replace(/"/g, '');
    const response = await axios.post(refresh_URL, { refresh: refresh_token });
    const { access } = response.data;
    localStorage.setItem('access_token', access);
    return access;
  } catch (error) {
    throw error;
  }
};

const createAuthorizedRequest = async (config) => {
  const access_token = localStorage.getItem('access_token')?.replace(/"/g, '');
  if (config.headers) {
    config.headers.Authorization = `Bearer ${access_token}`;
  } else {
    config.headers = { Authorization: `Bearer ${access_token}` };
  }
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    if (error.response && error.response.status === 401) {
      const new_access_token = await refreshToken();
      config.headers.Authorization = `Bearer ${new_access_token}`;
      return await axios(config);
    }
    throw error;
  }
};

export const getDoctors = createAsyncThunk(
  'getDoctors',
  async function ({ city, value, idSpecialty, searchValue, currentPage }) {
    try {
      const config = {
        method: 'get',
        url: `${URL}/?search=${searchValue}&city=${city}&specialties=${idSpecialty}&page=${currentPage}`,
      };
      const response = await createAuthorizedRequest(config);
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
