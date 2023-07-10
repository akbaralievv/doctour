import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { links } from './links';

const URL = links.SEARCH_URL;

export const getGlobalSearch = createAsyncThunk(
  'getGlobalSearch',
  async function ({ value, city }) {
    try {
      const response = await axios.get(URL + '?search=' + value + '&city=' + city);
      if (response.status === 200) {
        const data = await response.data;
        return data.results;
      }
    } catch (err) {
      throw err.response.status;
    }
  },
);

const initialState = { data: [], error: '', loading: false, searchValue: '' };

const globalSearchSlice = createSlice({
  name: 'globalSearchSlice',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.searchValue = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getGlobalSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.error = '';
      state.data = action.payload ? action.payload : [];
    });
    builder.addCase(getGlobalSearch.pending, (state, action) => {
      state.loading = true;
      state.error = '';
      state.data = [];
    });
    builder.addCase(getGlobalSearch.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
      state.data = [];
    });
  },
});
export const { setSearch } = globalSearchSlice.actions;
export default globalSearchSlice.reducer;
