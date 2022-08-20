import { createSlice } from "@reduxjs/toolkit";

import { IInitialState } from "./types";

const initialState: IInitialState = {
  playLists: [] /** 播放列表 */,
  currentSong: { id: "" } /** 当前播放歌曲详情 */,
  currentSongIndex: 0 /** 当前歌曲播放的索引值 */,
  sequence: 0 /** 歌曲的默认播放模式： 0 循环 1 随机 2 单曲 */,
  lyricList: [] /** 歌词列表 */,
  currentLyricIndex: 0 /** 当前播放歌曲的歌词 */,
  simiSongs: [] /** 相似歌曲 */,
  simiPlaylist: [] /** 相似歌单 */
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    changeCurrentSongAction: (state, action) => {
      state.currentSong = action.payload;
    },
    changePlayListAction: (state, action) => {
      state.playLists = action.payload;
    },
    changLyricListAction: (state, action) => {
      state.lyricList = action.payload;
    },
    changeCurrentSongIndexAction: (state, action) => {
      state.currentSongIndex = action.payload;
    },
    changeCurrentLyricIndexAction: (state, action) => {
      state.currentLyricIndex = action.payload;
    },
    changeSequenceAction: (state, action) => {
      state.sequence = action.payload;
    },
    changeSimiSongsAction: (state, action) => {
      state.simiSongs = action.payload;
    },
    changeSimiPlaylistAction: (state, action) => {
      state.simiPlaylist = action.payload;
    }
  },
  extraReducers: {}
});

export const {
  changeCurrentSongAction,
  changePlayListAction,
  changLyricListAction,
  changeCurrentSongIndexAction,
  changeCurrentLyricIndexAction,
  changeSequenceAction,
  changeSimiSongsAction,
  changeSimiPlaylistAction
} = playerSlice.actions;

export default playerSlice.reducer;
