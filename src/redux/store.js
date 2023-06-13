import { configureStore } from '@reduxjs/toolkit';
import UIReducer from './slices/UISlice';
import DoctorsReducer from './slices/DoctorsSlice';
import getSpecialtySlice from './slices/GetSpecialtySlice';

export const store = configureStore({
  reducer: {
    UIReducer,
    DoctorsReducer,
    getSpecialtySlice,
  },
});
