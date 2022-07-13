export interface IType {
  type: string;
}

export interface IInitialState {
  hotAlbums: [];
  topAlbums: [];
  total: number;

  currentArea: number;
  currentType: {
    name: string;
    type: number;
  };
  artistList: [];

  categories: [];
  currentId: number;
  recommends: [];
  radios: [];

  topList: []; // 全部榜单
  currentIndex: number; // 选择的具体榜单
  playList: { [key: string]: string }; // 榜单详情
  updateFrequency: "" /** 更新了多少首 */;

  category: []; //全部歌单
  currentCategory: string;
  categorySongs: { [key: string]: string };

  topBanners: any[]; // 轮播图
  hotRecommends: any[]; // 热门
  newAlbums: any[]; // 热门新碟
  upRanking: { [key: string]: string }; // 飙升榜
  newRanking: { [key: string]: string }; // 新歌榜
  originRanking: { [key: string]: string }; // 原创榜
  settleSings: any[]; // 热门歌手

  playLists: [] /** 播放列表 */;
  currentSong: { [key: string]: string } /** 当前播放歌曲详情 */;
  currentSongIndex: number /** 当前歌曲播放的索引值 */;
  sequence: number /** 歌曲的默认播放模式： 0 循环 1 随机 2 单曲 */;
  lyricList: [] /** 歌词列表 */;
  currentLyricIndex: number /** 当前播放歌曲的歌词 */;
  simiSongs: [] /** 相似歌曲 */;
  simiPlaylist: [] /** 相似歌单 */;
  index: number;

  coverPlayList: []; // 歌单详情
  subscribers: []; // 喜欢这个歌单的人
  detailPlayList: []; //歌单详情的热门歌单
}

export type actionType = IType & IInitialState;
