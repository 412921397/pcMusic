import { Map } from "immutable";

import * as actionTypes from "./constants";
import { actionType } from "@/types";

const defaultState = Map({
  category: [], //全部歌单
  currentCategory: "全部",
  categorySongs: {}
});

const reducer = (state = defaultState, action: actionType) => {
  switch (action.type) {
    case actionTypes.CHANGE_SONGS_CATEGORY:
      return state.set("category", action.category);
    case actionTypes.CHANGE_SONGS_CURRENT_CATEGORY:
      return state.set("currentCategory", action.currentCategory);
    case actionTypes.CHNAGE_SONGS_CATEGORY_SONGS:
      return state.set("categorySongs", action.categorySongs);
    default:
      return state;
  }
};

export default reducer;
