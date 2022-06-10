import { Dispatch } from "redux";
import * as actionTypes from "./constants";

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  getArtistList
} from "@/service/recommend";

/** 获取banner数据 */
export const getTopBannerAction = () => {
  return (dispatch: Dispatch) => {
    getTopBanners().then((res: any) => {
      dispatch({
        type: actionTypes.CHANGE_TOP_BANNERS,
        topBanners: res?.banners
      });
    });
  };
};

/** 获取热门推荐歌单 */
export const getHotRecommendsAction = () => {
  return (dispatch: Dispatch) => {
    getHotRecommends(8).then((res: any) => {
      dispatch({
        type: actionTypes.CHANGE_HOT_RECOMMEND,
        hotRecommends: res?.result
      });
    });
  };
};

/** 新碟上架 */
export const getNewAlbumsAction = (limit: number) => {
  return (dispatch: Dispatch) => {
    getNewAlbums(limit).then((res: any) => {
      dispatch({
        type: actionTypes.CHANGE_NEW_ALBUMS,
        newAlbums: res?.monthData
      });
    });
  };
};

/** 榜单 */
export const getTopListAction = (id: number) => {
  return (dispatch: Dispatch) => {
    getTopList(id).then((res: any) => {
      /** 3779629: 新歌榜 3778678: 热门榜 2884035: 原创榜 19723756: 飙升榜 */
      switch (id) {
        case 3779629:
          dispatch({
            type: actionTypes.CHANGE_NEW_RANKING,
            newRanking: res.playlist
          });
          break;
        case 19723756:
          dispatch({
            type: actionTypes.CHANGE_UP_RANKING,
            upRanking: res.playlist
          });
          break;
        case 2884035:
          dispatch({
            type: actionTypes.CHANGE_ORIGIN_RANKING,
            originRanking: res.playlist
          });
          break;
        default:
      }
    });
  };
};

/** 热门歌手 */
export const getArtistListAction = () => {
  return (dispatch: Dispatch) => {
    getArtistList().then((res: any) => {
      dispatch({
        type: actionTypes.CHANGE_SETTLE_SONGER,
        settleSings: res?.artists
      });
    });
  };
};
