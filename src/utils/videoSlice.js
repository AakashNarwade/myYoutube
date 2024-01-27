import { createSlice } from "@reduxjs/toolkit";

const videoSlice = createSlice({
  name: "video",
  initialState: [],
  reducers: {
    addVideos: (state, action) => {
      state.push(action.payload);
    },
  },
});
export const { addVideos } = videoSlice.actions;
export default videoSlice.reducer;
