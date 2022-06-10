import { Dispatch } from "redux";

import * as actionTypes from "./constants";

import { handleSongsCategory } from "@/utils/handle-data";

import { getSongCategory, getSongCategoryList } from "@/service/songs";

/** 当前选中的歌单名字 */
export const changeCurrentCategoryAction = (name: string) => ({
  type: actionTypes.CHANGE_SONGS_CURRENT_CATEGORY,
  currentCategory: name
});

/** 歌单分类名字 */
export const getSongCategoryAction = () => {
  return (dispatch: Dispatch) => {
    getSongCategory().then((res: any) => {
      dispatch({
        type: actionTypes.CHANGE_SONGS_CATEGORY,
        category: handleSongsCategory(res)
      });
    });
  };
};

/** 歌单 */
export const getSongCategoryListAction = (page: number) => {
  return (dispatch: Dispatch, getState: any) => {
    // 1.获取currentCategory
    const name = getState().getIn(["songs", "currentCategory"]);
    // 2.获取数据
    getSongCategoryList(name, page * 35).then((res: any) => {
      dispatch({
        type: actionTypes.CHNAGE_SONGS_CATEGORY_SONGS,
        categorySongs: res
      });
    });
  };
};
