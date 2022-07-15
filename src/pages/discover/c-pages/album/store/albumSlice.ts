import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  hotAlbums: any[];
  topAlbums: any[];
  total: number;
}
const initialState: IInitialState = {
  hotAlbums: [],
  topAlbums: [],
  total: 0
};

const albumSlice = createSlice({
  name: "album",
  initialState,
  reducers: {
    /** 获取所有专辑 */
    changeTopAlbum: (state, { payload }) => {
      state.topAlbums = payload;
    },
    /** 获取专辑的总数据 */
    changeTopTotal: (state, { payload }) => {
      state.total = payload;
    },
    /** 获取新碟上架 */
    getHotAlbum: (state, { payload }) => {
      state.hotAlbums = payload;
    }
  }
});

export const { changeTopAlbum, changeTopTotal, getHotAlbum } = albumSlice.actions;

export default albumSlice.reducer;
