import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  playList: [] /** 播放列表 */,
  currentSong: {} /** 当前播放歌曲详情 */,
  currentSongIndex: 0 /** 当前歌曲播放的索引值 */,
  sequence: 0 /** 歌曲的默认播放模式： 0 循环 1 随机 2 单曲 */,
  lyricList: [] /** 歌词列表 */,
  currentLyricIndex: 0 /** 当前播放歌曲的歌词 */,
  simiSongs: [] /** 相似歌曲 */,
  simiPlaylist: [] /** 相似歌单 */
});

function reducer(state = defaultState, action: any) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.index);
    case actionTypes.CHANGE_SIMI_SONGS:
      return state.set("simiSongs", action.simiSongs);
    case actionTypes.CHANGE_SIMI_PLAYLIST:
      return state.set("simiPlaylist", action.simiPlaylist);
    default:
      return state;
  }
}

export default reducer;
