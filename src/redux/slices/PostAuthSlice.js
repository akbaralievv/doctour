import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  state: {},
};

const PostAuthSlice = createSlice({
  name: 'PostCreateAccSlice',
  initialState,
  reducers: {
    setState: (state, action) => {
      state.state = action.payload;
    },
  },
});

export const { setState } = PostAuthSlice.actions;

export default PostAuthSlice.reducer;
