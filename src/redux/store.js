import { configureStore } from '@reduxjs/toolkit';
import UIReducer from './slices/UISlice';
import DoctorsReducer from './slices/DoctorsSlice';
import GetSpecialtySlice from './slices/GetSpecialtySlice';
import GetServicesSlice from './slices/GetServicesSlice';
import GetUsersSlice from './slices/GetUsersSlice';
import SelectBirthdaySlice from './slices/SelectBirthdaySlice';

export const store = configureStore({
  reducer: {
    UIReducer,
    DoctorsReducer,
    GetSpecialtySlice,
    GetServicesSlice,
    GetUsersSlice,
    SelectBirthdaySlice,
  },
});
