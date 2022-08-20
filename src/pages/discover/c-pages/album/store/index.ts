import reducer from "./albumSlice";

import { changeTopAlbum, changeTopTotal, getHotAlbum } from "./albumSlice";
import { getHotAlbumsAction, getTopAlbumsAction } from "./actionCreators";

export {
  reducer,
  changeTopAlbum,
  changeTopTotal,
  getHotAlbum,
  getHotAlbumsAction,
  getTopAlbumsAction
};
