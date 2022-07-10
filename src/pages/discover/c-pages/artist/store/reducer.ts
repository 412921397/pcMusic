import { Map } from "immutable";

import * as actionTypes from "./constants";
import { actionType } from "@/types";

const defaultState = Map({
  currentArea: -1,
  currentType: {
    name: "入驻歌手",
    type: 1
  },
  artistList: []
});

const reducer = (state = defaultState, action: actionType) => {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_AREA:
      return state.set("currentArea", action.currentArea);
    case actionTypes.CHANGE_CURRENT_TYPE:
      return state.set("currentType", action.currentType);
    case actionTypes.CHANGE_ARTIST_LIST:
      return state.set("artistList", action.artistList);
    default:
      return state;
  }
};

export default reducer;
