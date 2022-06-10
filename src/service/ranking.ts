import qlRequest from "./index";

/** 获取所有榜单 */
export function getTopList() {
  return qlRequest.get({
    url: "/toplist",
    showLoading: false
  });
}

// 获取榜单详情
export function getRankingList(id: number) {
  return qlRequest.get({
    url: "/playlist/detail",
    params: {
      id
    },
    showLoading: false
  });
}
