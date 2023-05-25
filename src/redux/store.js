import {configureStore} from "@reduxjs/toolkit";
import UIReducer from "./slices/UISlice"

export const store = configureStore({
  reducer:{
    UIReducer
  }
})

