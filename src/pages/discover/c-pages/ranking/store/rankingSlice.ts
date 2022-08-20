import { createSlice } from "@reduxjs/toolkit";

import { IInitialState } from "./types";

const initialState: IInitialState = {
  topList: [], // 全部榜单
  currentIndex: 0, // 选择的具体榜单
  playList: {}, // 榜单详情
  updateFrequency: "" /** 更新了多少首 */
};

const rankingSlice = createSlice({
  name: "ranking",
  initialState,
  reducers: {
    changeCurrentIndex: (state, { payload }) => {
      state.currentIndex = payload;
    },
    changeUpdateFrequency: (state, { payload }) => {
      state.updateFrequency = payload;
    },
    getTopLists: (state, { payload }) => {
      state.topList = payload;
    },
    getRankingLists: (state, { payload }) => {
      state.playList = payload;
    }
  }
});

export const { changeCurrentIndex, changeUpdateFrequency, getTopLists, getRankingLists } =
  rankingSlice.actions;

export default rankingSlice.reducer;
