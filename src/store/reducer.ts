import { reducer as recommendReducer } from "@/pages/discover/c-pages/recommend/store";
import { reducer as rankingReducer } from "@/pages/discover/c-pages/ranking/store";
import { reducer as songsReducer } from "@/pages/discover/c-pages/songs/store";
import { reducer as djradioReducer } from "@/pages/discover/c-pages/djradio/store";
import { reducer as artistReducer } from "@/pages/discover/c-pages/artist/store";
import { reducer as albumReducer } from "@/pages/discover/c-pages/album/store";
import { reducer as playerReducer } from "@/pages/player/store";
import { reducer as coverReducer } from "@/pages/songs-detail/store";
import { singer } from "@/pages/singer-detail/store";
import { video } from "@/pages/singer-detail-video/store";

const reducer = {
  recommend: recommendReducer,
  ranking: rankingReducer,
  songs: songsReducer,
  djradio: djradioReducer,
  artist: artistReducer,
  album: albumReducer,
  player: playerReducer,
  songsCover: coverReducer,
  singer,
  video
};

export default reducer;
