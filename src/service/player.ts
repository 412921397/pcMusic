import qlRequest from "./index";

/** 歌曲详情 */
export function getSongDetail(ids: number) {
  return qlRequest.get({
    url: "/song/detail",
    params: {
      ids
    }
  });
}

/** 获取歌词 */
export function getLyric(id: number) {
  return qlRequest.get({
    url: "/lyric",
    params: {
      id
    },
    showLoading: false
  });
}

/** 相似歌单 */
export function getSimiPlaylist(id: number) {
  return qlRequest.get({
    url: "/simi/playlist",
    params: {
      id
    },
    showLoading: false
  });
}

/** 相似歌曲 */
export function getSimiSong(id: number) {
  return qlRequest.get({
    url: "/simi/song",
    params: {
      id
    }
  });
}
