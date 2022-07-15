import { AppThunk } from "@/store";

import { getCoverDetails, getSubscriber, getSongCategoryLists } from "./songsCoverSlice";

import { getCoverDetail, getSubscribers } from "@/service/cover";
import { getSongCategoryList } from "@/service/songs";

// 歌单详情
export const coverPlayListAction = (id: number): AppThunk => {
  return (dispatch) => {
    getCoverDetail(id).then((res) => {
      dispatch(getCoverDetails(res?.playlist));
    });
  };
};

// 喜欢这个歌单的用户
export const getSubscribersAction = (id: number): AppThunk => {
  return (dispatch) => {
    getSubscribers(id).then((res) => {
      dispatch(getSubscriber(res?.subscribers));
    });
  };
};

// 热门歌单
export const getSongCategoryListAction = (): AppThunk => {
  return (dispatch) => {
    getSongCategoryList().then((res) => {
      dispatch(getSongCategoryLists(res?.playlists));
    });
  };
};
