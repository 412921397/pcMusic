import qlRequest from ".";

/** 歌手详情 */
export function getSingerDetail(id: number) {
  return qlRequest.get({
    url: "/artist/detail",
    params: {
      id
    },
    showLoading: false
  });
}

/** 相似歌手 */
export function getSimiArtist(id: number) {
  return qlRequest.get({
    url: "/simi/artist",
    params: {
      id
    },
    showLoading: false
  });
}

/** 歌手热门50首 */
export function getArtistSong(id: number) {
  return qlRequest.get({
    url: "/artist/top/song",
    params: {
      id
    },
    showLoading: false
  });
}

/** 获取歌手专辑 */
export function getArtistAlbum(id: number, limit?: number) {
  return qlRequest.get({
    url: "/artist/album",
    params: {
      id,
      limit
    },
    showLoading: false
  });
}

/** 获取歌手专辑 */
export function getArtistMv(id: number) {
  return qlRequest.get({
    url: "/artist/mv",
    params: {
      id
    },
    showLoading: false
  });
}
