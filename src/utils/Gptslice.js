import { createSlice } from "@reduxjs/toolkit";

const Gptslice = createSlice({
  name: "gpt",
  initialState: {
    showGptView: false,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptView = !state.showGptView;
    },
  },
});
export const { toggleGptSearchView } = Gptslice.actions;
export default Gptslice.reducer;
