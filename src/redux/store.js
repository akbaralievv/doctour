import { configureStore } from '@reduxjs/toolkit';
import UIReducer from './slices/UISlice';
import DoctorsReducer from './slices/DoctorsSlice';
import GetSpecialtySlice from './slices/GetSpecialtySlice';
import GetServicesSlice from './slices/GetServicesSlice';
import GetDoctorsSlice from './slices/GetDoctorsSlice';
import PostCreateAccSlice from './slices/PostCreateAccSlice';
import PostAuthSlice from './slices/PostAuthSlice';
import GetClinicSlice from './slices/GetClinicSlice';

export const store = configureStore({
  reducer: {
    UIReducer,
    DoctorsReducer,
    GetSpecialtySlice,
    GetServicesSlice,
    GetDoctorsSlice,
    PostCreateAccSlice,
    PostAuthSlice,
    GetClinicSlice,
  },
});
