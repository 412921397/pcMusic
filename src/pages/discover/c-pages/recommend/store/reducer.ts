import { Map } from "immutable";

import * as actionTypes from "./constants";
import { actionType } from "@/typings";

const initialState = Map({
  topBanners: [], // 轮播图
  hotRecommends: [], // 热门推荐
  newAlbums: [], // 新碟上架

  upRanking: {}, // 飙升榜
  newRanking: {}, // 新歌榜
  originRanking: {}, //原创榜
  settleSings: [] // 热门歌手
});

function reducer(state = initialState, action: actionType) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set("newAlbums", action.newAlbums);

    case actionTypes.CHANGE_UP_RANKING:
      return state.set("upRanking", action.upRanking);
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set("newRanking", action.newRanking);
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set("originRanking", action.originRanking);
    case actionTypes.CHANGE_SETTLE_SONGER:
      return state.set("settleSings", action.settleSings);
    default:
      return state;
  }
}

export default reducer;
