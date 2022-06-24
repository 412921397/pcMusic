import qlRequest from "./index";

/** 歌单分类 */
export function getSongCategory() {
  return qlRequest.get({
    url: "/playlist/catlist",
    showLoading: false
  });
}

/** 歌单 ( 网友精选碟 ) */
export function getSongCategoryList(cat = "全部", offset = 0, limit = 35) {
  return qlRequest.get({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    },
    showLoading: false
  });
}
