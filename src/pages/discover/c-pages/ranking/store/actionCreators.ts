import { Dispatch } from "redux";

import * as actionTypes from "./constants";

import { getTopList, getRankingList } from "@/service/ranking";

export const changeCurrentIndex = (index: number) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex: index
});

/** 更新了多少首 */
export const changeUpdateFrequency = (updateFrequency: string) => ({
  type: actionTypes.CHANGE_UPDATEFREQUENCY,
  updateFrequency
});

/** 全部榜单 */
export const getTopListAction = () => {
  return (dispatch: Dispatch) => {
    getTopList().then((res: any) => {
      dispatch({
        type: actionTypes.CHNAGE_TOP_LIST,
        topList: res?.list
      });
    });
  };
};

/** 榜单详情 */
export const getRankingListAction = (id: number) => {
  return (dispatch: Dispatch) => {
    getRankingList(id).then((res: any) => {
      dispatch({
        type: actionTypes.CHANGE_PLAY_LIST,
        playList: res?.playlist
      });
    });
  };
};
