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
import GetGlobalSearch from './slices/GetGlobalSearch';
import PostCommentSlice from './slices/PostCommentSlice';
import PostConfirmSlice from './slices/PostConfirmSlice';
import GetLogoutLSice from './slices/GetLogoutLSice';
import PostResetPassword from './slices/PostResetPassword';
import PostFavoritesSlice from './slices/PostFavoritesSlice';
import GetFavoritesSlice from './slices/GetFavoritesSlice';
import DeleteFavoritesSlice from './slices/DeleteFavoritesSlice';
import PostNewPasswordSlice from './slices/PostNewPasswordSlice';
import PostResetCodeSlice from './slices/PostResetCodeSlice';
import GetUserProfileSlice from './slices/GetUserProfileSlice';

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
    GetGlobalSearch,
    PostCommentSlice,
    PostConfirmSlice,
    GetLogoutLSice,
    PostResetPassword,
    PostFavoritesSlice,
    GetFavoritesSlice,
    DeleteFavoritesSlice,
    PostNewPasswordSlice,
    PostResetCodeSlice,
    GetUserProfileSlice,
  },
});
