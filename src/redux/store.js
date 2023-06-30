import { configureStore } from '@reduxjs/toolkit';
import UIReducer from './slices/UISlice';
import GetSpecialtySlice from './slices/GetSpecialtySlice';
import GetServicesSlice from './slices/GetServicesSlice';
import GetDoctorsSlice from './slices/GetDoctorsSlice';
import PostCreateAccSlice from './slices/PostCreateAccSlice';
import PostAuthSlice from './slices/PostAuthSlice';
import GetClinicSlice from './slices/GetClinicSlice';
import favoritesSlice from './slices/favoritesSlice';
import DoctorsReducer from './slices/DoctorsSlice';
import GetProfileSlice from './slices/GetProfileSlice';
import PostWhatsappSlice from './slices/PostWhatsappSlice';

export const store = configureStore({
  reducer: {
    UIReducer,
    GetSpecialtySlice,
    GetServicesSlice,
    GetDoctorsSlice,
    PostCreateAccSlice,
    PostAuthSlice,
    GetClinicSlice,
    favoritesSlice,
    DoctorsReducer,
    GetProfileSlice,
    PostWhatsappSlice,
  },
});
