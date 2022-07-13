import { Map } from "immutable";

import * as actionTypes from "./constants";
import { actionType } from "@/typings";

const defaltState = Map({
  coverPlayList: [], // 歌单详情
  subscribers: [], // 订阅这个歌单的人
  detailPlayList: [] // 热门歌单
});

const reducer = (state = defaltState, action: actionType) => {
  switch (action.type) {
    case actionTypes.SONGS_COVER_COVERPLAYLIST:
      return state.set("coverPlayList", action.coverPlayList);
    case actionTypes.SONGS_COVER_SUBSCRIBERS:
      return state.set("subscribers", action.subscribers);
    case actionTypes.SONGS_COVER_PLAYLISTS:
      return state.set("detailPlayList", action.detailPlayList);
    default:
      return state;
  }
};

export default reducer;
