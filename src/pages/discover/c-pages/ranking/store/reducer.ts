import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  topList: [], // 全部榜单
  currentIndex: 0, // 选择的具体榜单
  playList: {}, // 榜单详情
  updateFrequency: "" /** 更新了多少首 */
});

const reducer = (state = defaultState, action: any) => {
  switch (action.type) {
    case actionTypes.CHNAGE_TOP_LIST:
      return state.set("topList", action.topList);
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set("currentIndex", action.currentIndex);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_UPDATEFREQUENCY:
      return state.set("updateFrequency", action.updateFrequency);
    default:
      return state;
  }
};

export default reducer;
