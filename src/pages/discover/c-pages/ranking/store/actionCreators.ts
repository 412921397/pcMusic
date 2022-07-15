import { getTopLists, getRankingLists } from "./rankingSlice";

import { getTopList, getRankingList } from "@/service/ranking";
import { AppThunk } from "@/store";

/** 全部榜单 */
export const getTopListAction = (): AppThunk => {
  return (dispatch) => {
    getTopList().then((res) => {
      dispatch(getTopLists(res?.list));
    });
  };
};

/** 榜单详情 */
export const getRankingListAction = (id: number): AppThunk => {
  return (dispatch) => {
    getRankingList(id).then((res) => {
      dispatch(getRankingLists(res?.playlist));
    });
  };
};
