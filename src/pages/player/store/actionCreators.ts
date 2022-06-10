import { Dispatch } from "redux";

import { getSongDetail, getLyric, getSimiSong, getSimiPlaylist } from "@/service/player";

import * as actionTypes from "./constants";

import { getRandomNumber } from "@/utils/math-utils";
import { parseLyric } from "@/utils/parse-lyric";

/**
 *
 * @param currentSong 当前歌曲
 * @returns
 */
export const changeCurrentSongAction = (currentSong: any) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong
});

/**
 *
 * @param playList 当前播放歌曲列表
 * @returns
 */
const changePlayListAction = (playList: any) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList
});

/** 歌词列表 */
const changLyricListAction = (lyricList: any) => ({
  type: actionTypes.CHANGE_LYRIC_LIST,
  lyricList
});

/**
 *
 * @param index 当前播放歌曲的索引值
 * @returns
 */
const changeCurrentSongIndexAction = (index: number) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index
});

// 对外暴露
/** 修改歌词对应的索引值 */
export const changeCurrentLyricIndexAction = (index: number) => ({
  type: actionTypes.CHANGE_CURRENT_LYRIC_INDEX,
  index
});

/** 歌词顺序 */
export const changeSequenceAction = (sequence: number) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence
});

/** 当前播放歌曲的和索引值 */
export const changeCurrentIndexAndSongAction = (tag: number) => {
  return (dispatch: Dispatch, getState: any) => {
    const playList = getState().getIn(["player", "playList"]);
    const sequence = getState().getIn(["player", "sequence"]);
    let currentSongIndex = getState().getIn(["player", "currentLyricIndex"]);

    switch (sequence) {
      case 1: // 随机播放
        let randomIndex = getRandomNumber(playList?.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList?.length);
        }
        currentSongIndex = randomIndex;
        break;
      default: // 顺序播放
        currentSongIndex += tag;
        if (currentSongIndex >= playList?.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList?.length - 1;
    }

    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));

    // 请求歌词
    dispatch(getLyricAction(currentSong?.id) as any);
  };
};

/** 获取当前播放歌曲详情 */
export const getSongDetailAction = (id: number) => {
  return (dispatch: Dispatch, getState: any) => {
    /** 1.根据id查找playList中是否已经有了该歌曲 */
    const playList = getState().getIn(["player", "playList"]);
    const songIndex: number = playList.findIndex((song: any) => song?.id === id);

    /** 2.判断是否找到歌曲 */
    let song = null;
    if (songIndex !== -1) {
      // 找到该歌曲
      dispatch(changeCurrentSongIndexAction(songIndex));
      song = playList[songIndex];
      /** 当前歌曲 */
      dispatch(changeCurrentSongAction(song));
      /** 请求歌词 */
      dispatch(getLyricAction(song?.id) as any);
    } else {
      // 没有找到歌曲
      // 请求歌曲数据
      getSongDetail(id).then((res: any) => {
        const song = res.songs && res.songs[0];
        if (!song) return;

        /** 1.将最新请求到的歌曲添加到播放列表中 */
        const newPlayList = [...playList];
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
export const getLyricAction = (id: number) => {
  return (dispatch: Dispatch) => {
    getLyric(id).then((res: any) => {
      const lyric = res?.lrc?.lyric;
      const lyricList = parseLyric(lyric);
      dispatch(changLyricListAction(lyricList));
    });
  };
};

/** 相似歌曲 */
export const getSimiSongAction = () => {
  return (dispatch: Dispatch, getState: any) => {
    const id = getState().getIn(["player", "currentSong"]).id;
    if (!id) return;
    getSimiSong(id).then((res: any) => {
      dispatch({
        type: actionTypes.CHANGE_SIMI_SONGS,
        simiSongs: res?.songs
      });
    });
  };
};

/** 相似歌单 */
export const getSimiPlaylistAction = () => {
  return (dispatch: Dispatch, getState: any) => {
    const id = getState().getIn(["player", "currentSong"]).id;
    if (!id) return;
    getSimiPlaylist(id).then((res: any) => {
      dispatch({
        type: actionTypes.CHANGE_SIMI_PLAYLIST,
        simiPlaylist: res?.playlists
      });
    });
  };
};
