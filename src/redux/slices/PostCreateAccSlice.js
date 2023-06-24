import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  state: {},
};

const PostCreateAccSlice = createSlice({
  name: 'PostCreateAccSlice',
  initialState,
  reducers: {
    setState: (state, action) => {
      state.state = action.payload;
    },
  },
});

export const { setState } = PostCreateAccSlice.actions;

export default PostCreateAccSlice.reducer;
