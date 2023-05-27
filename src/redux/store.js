import {configureStore} from "@reduxjs/toolkit";
import UIReducer from "./slices/UISlice"
import DoctorsReducer from "./slices/DoctorsSlice";

export const store = configureStore({
  reducer:{
    UIReducer,
    DoctorsReducer
  }
})

