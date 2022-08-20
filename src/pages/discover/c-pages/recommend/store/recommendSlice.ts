import { createSlice } from "@reduxjs/toolkit";

import { IInitialState } from "./types";

const initialState: IInitialState = {
  topBanners: [], // 轮播图
  hotRecommends: [], // 热门推荐
  newAlbums: [], // 新碟上架

  upRanking: {}, // 飙升榜
  newRanking: {}, // 新歌榜
  originRanking: {}, //原创榜
  settleSings: [] // 热门歌手
};

const recommendSlice = createSlice({
  name: "recommend",
  initialState,
  reducers: {
    getBanners: (state, { payload }) => {
      state.topBanners = payload;
    },
    getRecommends: (state, { payload }) => {
      state.hotRecommends = payload;
    },
    getAlbums: (state, { payload }) => {
      state.newAlbums = payload;
    },
    getupRanking: (state, { payload }) => {
      state.upRanking = payload;
    },
    getnewRanking: (state, { payload }) => {
      state.newRanking = payload;
    },
    getoriginRanking: (state, { payload }) => {
      state.originRanking = payload;
    },
    getArtistLists: (state, { payload }) => {
      state.settleSings = payload;
    }
  }
});

export const {
  getBanners,
  getRecommends,
  getAlbums,
  getupRanking,
  getnewRanking,
  getoriginRanking,
  getArtistLists
} = recommendSlice.actions;

export default recommendSlice.reducer;
