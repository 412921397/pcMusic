import type { AppThunk } from "@/store";
import {
  changeCurrentSongAction,
  changePlayListAction,
  changLyricListAction,
  changeCurrentSongIndexAction,
  changeSimiSongsAction,
  changeSimiPlaylistAction
} from "./playerSlice";

import { getSongDetail, getLyric, getSimiSong, getSimiPlaylist } from "@/service/player";

import { getRandomNumber } from "@/utils/math-utils";
import { parseLyric } from "@/utils/parse-lyric";

/** 当前播放歌曲的和索引值 */
export const changeCurrentIndexAndSongAction = (tag: number): AppThunk => {
  return (dispatch, getState) => {
    const playLists = getState().player.playLists;
    const sequence = getState().player.sequence;
    let currentSongIndex = getState().player.currentLyricIndex;

    switch (sequence) {
      case 1: // 随机播放
        let randomIndex = getRandomNumber(playLists?.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playLists?.length);
        }
        currentSongIndex = randomIndex;
        break;
      default: // 顺序播放
        currentSongIndex += tag;
        if (currentSongIndex >= playLists?.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playLists?.length - 1;
    }

    const currentSong: any = playLists[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));

    // 请求歌词
    dispatch(getLyricAction(currentSong?.id) as any);
  };
};

/** 获取当前播放歌曲详情 */
export const getSongDetailAction = (id: number): AppThunk => {
  return (dispatch, getState) => {
    /** 1.根据id查找playList中是否已经有了该歌曲 */
    const playLists = getState().player.playLists;
    const songIndex: number = playLists.findIndex((song: any) => song?.id === id);

    /** 2.判断是否找到歌曲 */
    let song = null;
    if (songIndex !== -1) {
      // 找到该歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));
      song = playLists[songIndex];
      /** 当前歌曲 */
      dispatch(changeCurrentSongAction(song));
      /** 请求歌词 */
      dispatch(getLyricAction((song as any).id) as any);
    } else {
      // 没有找到歌曲
      // 请求歌曲数据
      getSongDetail(id).then((res: any) => {
        const song = res.songs && res.songs[0];
        if (!song) return;

        /** 1.将最新请求到的歌曲添加到播放列表中 */
        const newPlayList: any = [...playLists];
        newPlayList.push(song);

        /**2.更新redux中的值 */
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList?.length - 1));
        dispatch(changeCurrentSongAction(song));

        /** 3.请求歌词 */
        dispatch(getLyricAction(song?.id) as any);
      });
    }
  };
};

/** 请求歌词 */
export const getLyricAction = (id: number): AppThunk => {
  return (dispatch) => {
    getLyric(id).then((res: any) => {
      const lyric = res?.lrc?.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changLyricListAction(lyricList));
    });
  };
};

/** 相似歌曲 */
export const getSimiSongAction = (): AppThunk => {
  return (dispatch, getState) => {
    const id = getState().player.currentSong?.id;
    if (!id) return;
    getSimiSong(+id).then((res) => {
      dispatch(changeSimiSongsAction(res?.songs));
    });
  };
};

/** 相似歌单 */
export const getSimiPlaylistAction = (): AppThunk => {
  return (dispatch, getState) => {
    const id = getState().player.currentSong?.id;
    if (!id) return;
    getSimiPlaylist(+id).then((res: any) => {
      dispatch(changeSimiPlaylistAction(res?.playlists));
    });
  };
};
