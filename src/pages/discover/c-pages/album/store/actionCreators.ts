import { AppThunk } from "@/store/index";

import { changeTopAlbum, changeTopTotal, getHotAlbum } from "./albumSlice";

import { getHotAlbums, getTopAlbums } from "@/service/album";

/** 获取新碟上架 */
export const getHotAlbumsAction = (): AppThunk => {
  return (dispatch) => {
    getHotAlbums().then((res) => {
      dispatch(getHotAlbum(res?.albums));
    });
  };
};

export const getTopAlbumsAction = (page: number): AppThunk => {
  return (dispatch) => {
    getTopAlbums(30, (page - 1) * 30).then((res) => {
      dispatch(changeTopAlbum(res?.albums));
      dispatch(changeTopTotal(res?.total));
    });
  };
};
