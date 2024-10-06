import { createSlice } from "@reduxjs/toolkit";

const ConfigSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    changeLangauge: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { changeLangauge } = ConfigSlice.actions;
export default ConfigSlice.reducer;
