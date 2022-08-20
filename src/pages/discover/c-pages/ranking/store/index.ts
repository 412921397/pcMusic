import reducer from "./rankingSlice";

import {
  changeCurrentIndex,
  changeUpdateFrequency,
  getTopLists,
  getRankingLists
} from "./rankingSlice";

import { getTopListAction, getRankingListAction } from "./actionCreators";

export {
  reducer,
  changeCurrentIndex,
  changeUpdateFrequency,
  getTopLists,
  getRankingLists,
  getTopListAction,
  getRankingListAction
};
