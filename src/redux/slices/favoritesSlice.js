import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const setLikeSlice = createAsyncThunk('like/setLike', async (like) => {
  return like;
});

const initialState = {
  state: false,
};

export const likeSlice = createSlice({
  name: 'like',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setLikeSlice.fulfilled, (state, action) => {
      state.state = action.payload;
    });
  },
});

export default likeSlice.reducer;
