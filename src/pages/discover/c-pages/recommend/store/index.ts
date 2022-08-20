import reducer from "./recommendSlice";

import {
  getBanners,
  getRecommends,
  getAlbums,
  getupRanking,
  getnewRanking,
  getoriginRanking,
  getArtistLists
} from "./recommendSlice";

import {
  getTopBannerAction,
  getHotRecommendsAction,
  getNewAlbumsAction,
  getTopListAction,
  getArtistListAction
} from "./actionCreators";

export {
  reducer,
  getBanners,
  getRecommends,
  getAlbums,
  getupRanking,
  getnewRanking,
  getoriginRanking,
  getArtistLists,
  getTopBannerAction,
  getHotRecommendsAction,
  getNewAlbumsAction,
  getTopListAction,
  getArtistListAction
};
