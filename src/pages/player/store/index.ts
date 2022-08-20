import reducer from "./playerSlice";

import {
  changeCurrentSongAction,
  changePlayListAction,
  changLyricListAction,
  changeCurrentSongIndexAction,
  changeCurrentLyricIndexAction,
  changeSequenceAction,
  changeSimiSongsAction,
  changeSimiPlaylistAction
} from "./playerSlice";

import {
  changeCurrentIndexAndSongAction,
  getSongDetailAction,
  getLyricAction,
  getSimiSongAction,
  getSimiPlaylistAction
} from "./actionCreators";

export {
  reducer,
  changeCurrentSongAction,
  changePlayListAction,
  changLyricListAction,
  changeCurrentSongIndexAction,
  changeCurrentLyricIndexAction,
  changeSequenceAction,
  changeSimiSongsAction,
  changeSimiPlaylistAction,
  changeCurrentIndexAndSongAction,
  getSongDetailAction,
  getLyricAction,
  getSimiSongAction,
  getSimiPlaylistAction
};
