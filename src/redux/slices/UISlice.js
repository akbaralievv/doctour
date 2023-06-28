import { createSlice } from '@reduxjs/toolkit';

export const UISlice = createSlice({
  name: 'UISlice',
  initialState: {
    popUp: false,
    cityModal: false,
    city: '1',
  },
  reducers: {
    closePopUp: (state, action) => {
      state.popUp = action.payload;
      state.langPopUp = false;
      state.cityModal = false;
    },
    actionCityPop: (state, action) => {
      state.langPopUp = false;
      if (state.cityModal === true) {
        state.cityModal = false;
      } else {
        state.cityModal = true;
      }
    },
    setCity: (state, action) => {
      state.city = action.payload;
    },
  },
});

export const { closePopUp, actionCityPop, setCity } = UISlice.actions;
export default UISlice.reducer;
