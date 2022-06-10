import qlRequest from "./index";

/** 最新专辑 */
export function getHotAlbums() {
  return qlRequest.get({
    url: "/album/newest",
    showLoading: false
  });
}

/** 新碟上架
 * area : ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
 * limit : 返回数量 , 默认为 30
   offset : 偏移数量，用于分页 , 如 :( 页数 -1)*30, 其中 30 为 limit 的值 , 默认为 0
 */
export function getTopAlbums(limit: number, offset: number, area: string = "ALL") {
  return qlRequest.get({
    url: "/album/new",
    params: {
      limit,
      offset,
      area
    },
    showLoading: false
  });
}
