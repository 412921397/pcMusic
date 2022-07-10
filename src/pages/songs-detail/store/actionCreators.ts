import { Dispatch } from "redux";
import { getCoverDetail, getSubscribers } from "@/service/cover";
import { getSongCategoryList } from "@/service/songs";

import * as actionTypes from "./constants";

// 歌单详情
export const coverPlayListAction = (id: number) => {
  return (dispatch: Dispatch) => {
    getCoverDetail(id).then((res: any) => {
      dispatch({
        type: actionTypes.SONGS_COVER_COVERPLAYLIST,
        coverPlayList: res?.playlist
      });
    });
  };
};

// 喜欢这个歌单的用户
export const getSubscribersAction = (id: number) => {
  return (dispatch: Dispatch) => {
    getSubscribers(id).then((res) => {
      dispatch({
        type: actionTypes.SONGS_COVER_SUBSCRIBERS,
        subscribers: res?.subscribers
      });
    });
  };
};

// 热门歌单
export const getSongCategoryListAction = () => {
  return (dispatch: Dispatch) => {
    getSongCategoryList().then((res) => {
      dispatch({
        type: actionTypes.SONGS_COVER_PLAYLISTS,
        detailPlayList: res?.playlists
      });
    });
  };
};
