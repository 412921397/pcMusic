import { createSlice } from "@reduxjs/toolkit";

import { IInitialState } from "./types";

const initialState: IInitialState = {
  categories: [],
  currentId: 0,
  recommends: [],
  radios: []
};

const djradioSlice = createSlice({
  name: "djradio",
  initialState,
  reducers: {
    changeCategory: (state, { payload }) => {
      state.categories = payload;
    },
    changeCurrentIdAction: (state, { payload }) => {
      state.currentId = payload;
    },
    getDjRadioRecommends: (state, { payload }) => {
      state.recommends = payload;
    },
    getDjRadio: (state, { payload }) => {
      state.radios = payload;
    }
  }
});

export const { changeCategory, changeCurrentIdAction, getDjRadioRecommends, getDjRadio } =
  djradioSlice.actions;

export default djradioSlice.reducer;
