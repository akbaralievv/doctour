import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  day: '',
  month: '',
  year: '',
};

const selectBirthday = createSlice({
  name: 'selectBirthday',
  initialState,
  reducers: {
    setDay: (state, action) => {
      state.day = action.payload;
    },
    setMonth: (state, action) => {
      state.month = action.payload;
    },
    setYear: (state, action) => {
      state.year = action.payload;
    },
  },
});

export const { setDay, setMonth, setYear } = selectBirthday.actions;

export default selectBirthday.reducer;
