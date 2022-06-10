import { Dispatch } from "redux";

import * as actionTypes from "./constants";

import { getHotAlbums, getTopAlbums } from "@/service/album";

/** 获取所有专辑 */
const changeTopAlbum = (res: any) => ({
  type: actionTypes.CHANGE_TOP_ALBUMS,
  topAlbums: res?.albums
});

/** 获取专辑的总数据 */
const changeTopTotal = (total: number) => ({
  type: actionTypes.CHANGE_TOP_TOTAL,
  total
});

/** 获取新碟上架 */
export const getHotAlbumsAction = () => {
  return (dispatch: Dispatch) => {
    getHotAlbums().then((res: any) => {
      dispatch({
        type: actionTypes.CHANGE_HOT_ALBUMS,
        hotAlbums: res?.albums
      });
    });
  };
};

export const getTopAlbumsAction = (page: number) => {
  return (dispatch: Dispatch) => {
    getTopAlbums(30, (page - 1) * 30).then((res: any) => {
      dispatch(changeTopAlbum(res));
      dispatch(changeTopTotal(res?.total));
    });
  };
};
