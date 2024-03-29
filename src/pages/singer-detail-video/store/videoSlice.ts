import { createSlice } from "@reduxjs/toolkit";

import { IInitialState } from "./types";

const initialState: IInitialState = {
  mvData: {},
  mvDetail: {},
  mvList: []
};

const videoSlice = createSlice({
  name: "videoSlice",
  initialState,
  reducers: {
    getMVSAction: (state, { payload }) => {
      state.mvData = payload;
    },
    getMVDetailAction: (state, { payload }) => {
      state.mvDetail = payload;
    },
    getAllvideoAction: (state, { payload }) => {
      state.mvList = payload;
    }
  }
});

export const { getMVSAction, getMVDetailAction, getAllvideoAction } = videoSlice.actions;

export default videoSlice.reducer;
