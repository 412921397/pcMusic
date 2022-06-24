import qlRequest from "./index";

/** banner */
export function getTopBanners() {
  return qlRequest.get({
    url: "/banner",
    showLoading: false
  });
}

/** 热门推荐歌单 */
export function getHotRecommends(limit: number) {
  return qlRequest.get({
    url: "/personalized",
    params: {
      limit
    },
    showLoading: false
  });
}

/** 新碟上架
 * area: ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
  type : new:全部 hot:热门,默认为 new
  year : 年,默认本年
  month : 月,默认本月
*/
export function getNewAlbums(limit: number, offset = 0, area = "ZH") {
  return qlRequest.get({
    url: "/top/album",
    params: {
      limit,
      offset,
      area
    },
    showLoading: false
  });
}

/** 榜单 */
export function getTopList(id: number) {
  return qlRequest.get({
    url: "/playlist/detail",
    params: {
      id
    },
    showLoading: false
  });
}

/** 热门歌手 */
export function getArtistList(limit = 30, cat = 1) {
  return qlRequest.get({
    url: "/artist/list",
    params: {
      cat,
      limit
    },
    showLoading: false
  });
}
