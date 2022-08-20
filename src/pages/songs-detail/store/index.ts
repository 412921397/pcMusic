import reducer from "./songsCoverSlice";

import { getCoverDetails, getSubscriber, getSongCategoryLists } from "./songsCoverSlice";

import {
  coverPlayListAction,
  getSubscribersAction,
  getSongCategoryListAction
} from "./actionCreators";

export {
  reducer,
  getCoverDetails,
  getSubscriber,
  getSongCategoryLists,
  coverPlayListAction,
  getSubscribersAction,
  getSongCategoryListAction
};
