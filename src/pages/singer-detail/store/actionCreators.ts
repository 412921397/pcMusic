import { AppThunk } from "@/store";

import {
  getArtistAction,
  getIdentifyAction,
  getArtistsAction,
  getArtistSongsAction,
  getArtistHotAlbumsAction,
  getArtistMVSAction
} from "./singerSlice";

import {
  getSingerDetail,
  getSimiArtist,
  getArtistSong,
  getArtistAlbum,
  getArtistMv
} from "@/service/singer";

/** 歌手详情 */
export const getSingerDetailAction = (id: number): AppThunk => {
  return (dispatch) => {
    getSingerDetail(id).then((res) => {
      dispatch(getArtistAction(res.data.artist));
      dispatch(getIdentifyAction(res.data.identify));
    });
  };
};

/** 相似歌手 */
export const getSimiArtistAction = (id: number): AppThunk => {
  return (dispatch) => {
    getSimiArtist(id).then((res) => {
      dispatch(getArtistsAction(res.artists));
    });
  };
};

/** 歌手热门50首歌曲 */
export const getArtistSongAction = (id: number): AppThunk => {
  return (dispatch) => {
    getArtistSong(id).then((res) => {
      if (res.more) dispatch(getArtistSongsAction(res.songs));
    });
  };
};

/** 歌手专辑 */
export const getArtistAlbumAction = (id: number, limit?: number): AppThunk => {
  return (dispatch) => {
    getArtistAlbum(id, limit).then((res) => {
      if (res.more) dispatch(getArtistHotAlbumsAction(res.hotAlbums));
    });
  };
};

/** 歌手mv */
export const getArtistMVAction = (id: number): AppThunk => {
  return (dispatch) => {
    getArtistMv(id).then((res) => {
      if (res.hasMore) dispatch(getArtistMVSAction(res.mvs));
    });
  };
};
