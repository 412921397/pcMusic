import { AppThunk } from "@/store/index";

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbums,
  getTopList,
  getArtistList
} from "@/service/recommend";

import {
  getBanners,
  getRecommends,
  getAlbums,
  getupRanking,
  getnewRanking,
  getoriginRanking,
  getArtistLists
} from "./recommendSlice";

interface ITopListMap {
  [key: string]: { payload: any; type: string };
}

/** 获取banner数据 */
export const getTopBannerAction = (): AppThunk => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(getBanners(res?.banners));
    });
  };
};

/** 获取热门推荐歌单 */
export const getHotRecommendsAction = (): AppThunk => {
  return (dispatch) => {
    getHotRecommends(8).then((res) => {
      dispatch(getRecommends(res?.result));
    });
  };
};

/** 新碟上架 */
export const getNewAlbumsAction = (limit: number): AppThunk => {
  return (dispatch) => {
    getNewAlbums(limit).then((res) => {
      dispatch(getAlbums(res?.monthData));
    });
  };
};

/** 榜单 */
export const getTopListAction = (id: number): AppThunk => {
  return (dispatch) => {
    getTopList(id).then((res) => {
      /** 3779629: 新歌榜 3778678: 热门榜 2884035: 原创榜 19723756: 飙升榜 */
      const topListMap: ITopListMap = {
        3779629: dispatch(getnewRanking(res.playlist)),
        19723756: dispatch(getupRanking(res.playlist)),
        2884035: dispatch(getoriginRanking(res.playlist))
      };
      return topListMap[id];
    });
  };
};

/** 热门歌手 */
export const getArtistListAction = (): AppThunk => {
  return (dispatch) => {
    getArtistList().then((res) => {
      dispatch(getArtistLists(res?.artists));
    });
  };
};
