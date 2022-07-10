import { Map } from "immutable";

import * as actionTypes from "./constants";
import { actionType } from "@/types";

const defaultState = Map({
  hotAlbums: [],
  topAlbums: [],
  total: 0
});

const reducer = (state = defaultState, action: actionType) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOT_ALBUMS:
      return state.set("hotAlbums", action.hotAlbums);
    case actionTypes.CHANGE_TOP_ALBUMS:
      return state.set("topAlbums", action.topAlbums);
    case actionTypes.CHANGE_TOP_TOTAL:
      return state.set("total", action.total);
    default:
      return state;
  }
};

export default reducer;
