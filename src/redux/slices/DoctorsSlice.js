import { createSlice } from '@reduxjs/toolkit';

export const DoctorsSlice = createSlice({
  name: 'DoctorSlice',
  initialState: {
    currentSpec: '',
    currentDoctorID: null,
    currentDoctor: null,
    feedback: false,
    birthday: null,
  },
  reducers: {
    handleIds: (state, action) => {
      state.currentDoctorID = action.payload;
    },
    removeDoctor: (state, action) => {
      state.currentDoctor = null;
    },
    selectDoctor: (state, action) => {
      state.currentDoctor = action.payload;
    },
    handleFeedBack: (state, action) => {
      state.feedback = action.payload;
    },
    handleBirth: (state, action) => {
      state.birthday = action.payload;
    },
  },
});

export const { handleIds, selectDoctor, handleFeedBack, handleBirth, removeDoctor } =
  DoctorsSlice.actions;
export default DoctorsSlice.reducer;
