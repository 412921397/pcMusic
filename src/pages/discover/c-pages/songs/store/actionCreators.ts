import { getSongCategoryActions, getSongCategoryLists } from "./songsSlice";
import { handleSongsCategory } from "@/utils/handle-data";

import { getSongCategory, getSongCategoryList } from "@/service/songs";
import { AppThunk } from "@/store";

/** 歌单分类名字 */
export const getSongCategoryAction = (): AppThunk => {
  return (dispatch) => {
    getSongCategory().then((res) => {
      dispatch(getSongCategoryActions(handleSongsCategory(res)));
    });
  };
};

/** 歌单 */
export const getSongCategoryListAction = (page: number): AppThunk => {
  return (dispatch, getState) => {
    // 1.获取currentCategory
    const name = getState().songs.currentCategory;
    // 2.获取数据
    getSongCategoryList(name, page * 35).then((res) => {
      dispatch(getSongCategoryLists(res));
    });
  };
};
