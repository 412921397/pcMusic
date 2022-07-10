import qlRequest from "./index";

/** 歌单详情 */
export function getCoverDetail(id: number) {
  return qlRequest.get({
    url: "/playlist/detail",
    params: {
      id
    },
    showLoading: false
  });
}

/** 喜欢这个歌单的用户 */
export function getSubscribers(id: number) {
  return qlRequest.get({
    url: "/playlist/subscribers",
    params: {
      id
    },
    showLoading: false
  });
}
