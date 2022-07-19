import qlRequest from ".";

/** 获取歌手专辑
 * r:视频分辨率，默认1080
 */
export function getMVURL(id: number, r?: number) {
  return qlRequest.get({
    url: "/mv/url",
    params: {
      id,
      r
    },
    showLoading: false
  });
}

/** mv详情 */
export function getVideoDetail(mvid: number) {
  return qlRequest.get({
    url: "/mv/detail",
    params: {
      mvid
    },
    showLoading: false
  });
}

/** 相关视频 */
export function getRelatedAllvideo(mvid: number) {
  return qlRequest.get({
    url: "/simi/mv",
    params: {
      mvid
    },
    showLoading: false
  });
}
