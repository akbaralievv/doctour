import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const usersURL = 'https://64877e44beba62972790bb18.mockapi.io/';

export const getUsers = createAsyncThunk('getServices', async function (city) {
  try {
    const response = await axios.get(usersURL + city);
    if (response.status === 200) {
      const users = await response.data;
      return users[0].doctors;
    } else {
      throw Error(`error ${response.status}`);
    }
  } catch (err) {
    return console.error(err.message);
  }
});

const initialState = { data: [], error: '', loading: false };

const getUsersSlice = createSlice({
  name: 'getUsersSlice',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
  },
});
export default getUsersSlice.reducer;
