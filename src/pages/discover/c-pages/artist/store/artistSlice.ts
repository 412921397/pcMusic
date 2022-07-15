import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  currentArea: number;
  currentType: {
    name: string;
    type: number;
  };
  artistList: any[];
}

const initialState: IInitialState = {
  currentArea: -1,
  currentType: {
    name: "入驻歌手",
    type: 1
  },
  artistList: []
};

const artistSlice = createSlice({
  name: "artist",
  initialState,
  reducers: {
    /** 获取歌手的所在地区
     * -1:全部,7华语,96欧美,8:日本,16韩国,0:其他
     */
    changeCurrentArea: (state, { payload }) => {
      state.currentArea = payload;
    },
    /** 当前歌手的类型
     * -1:全部,1:男歌手,2:女歌手,3:乐队
     */
    changeCurrentType: (state, { payload }) => {
      state.currentType = payload;
    },
    getArtistLists: (state, { payload }) => {
      state.artistList = payload;
    }
  }
});

export const { changeCurrentArea, changeCurrentType, getArtistLists } = artistSlice.actions;

export default artistSlice.reducer;
