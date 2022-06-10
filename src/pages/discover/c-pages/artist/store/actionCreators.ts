import { Dispatch } from "redux";

import * as actionTypes from "./constants";

import { getArtistList } from "@/service/artist";

/** 获取歌手的所在地区
 * -1:全部,7华语,96欧美,8:日本,16韩国,0:其他
 */
export const changeCurrentArea = (area: number) => ({
  type: actionTypes.CHANGE_CURRENT_AREA,
  currentArea: area
});

/** 当前歌手的类型
 * -1:全部,1:男歌手,2:女歌手,3:乐队
 */
export const changeCurrentType = (type: number) => ({
  type: actionTypes.CHANGE_CURRENT_TYPE,
  currentType: type
});

/** 请求歌手列表 */
export const getArtistListAction = (area: number, type: number, alpha: string) => {
  return (dispatch: Dispatch) => {
    getArtistList(area, type, alpha).then((res: any) => {
      dispatch({
        type: actionTypes.CHANGE_ARTIST_LIST,
        artistList: res?.artists
      });
    });
  };
};
