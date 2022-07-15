import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  coverPlayList: { [key: string]: any };
  subscribers: any[];
  detailPlayList: any[];
}

const initialState: IInitialState = {
  coverPlayList: {}, // 歌单详情
  subscribers: [], // 订阅这个歌单的人
  detailPlayList: [] // 热门歌单
};

const songsCoverSlice = createSlice({
  name: "songsCover",
  initialState,
  reducers: {
    getCoverDetails: (state, { payload }) => {
      state.coverPlayList = payload;
    },
    getSubscriber: (state, { payload }) => {
      state.subscribers = payload;
    },
    getSongCategoryLists: (state, { payload }) => {
      state.detailPlayList = payload;
    }
  }
});

export const { getCoverDetails, getSubscriber, getSongCategoryLists } = songsCoverSlice.actions;

export default songsCoverSlice.reducer;
