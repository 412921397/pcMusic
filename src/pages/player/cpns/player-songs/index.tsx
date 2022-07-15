import { memo, useEffect } from "react";
import {
  shallowEqual,
  useAppDispatch as useDispatch,
  useAppSelector as useSelector
} from "@/store/hook";

import usePlayMusic from "@/hooks/usePlayMusic";
import { PlayerSongsWrapper } from "./style";
import QLThemeHeaderPlayer from "@/components/theme-header-player";

import { getSimiSongAction } from "../../store/actionCreators";

export default memo(function QLPlayerSongs() {
  /** 播放音乐 */
  const [playMusic] = usePlayMusic();
  /** redux数据 */
  const { simiSongs } = useSelector(
    (state) => ({
      simiSongs: state.player.simiSongs
    }),
    shallowEqual
  );

  /** 获取异步hook */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSimiSongAction());
  }, [dispatch]);

  return (
    <PlayerSongsWrapper>
      <QLThemeHeaderPlayer title="相似歌曲" />
      <div className="songs">
        {simiSongs?.map((item) => {
          return (
            <div className="song-item" key={item?.id}>
              <div className="info">
                <div className="title">
                  <a href="#/">{item?.name}</a>
                </div>
                <div className="artist">
                  <a href="#/">
                    {item?.artists[0]?.name}
                    {item?.artists[1] && `/${item?.artists[1]?.name}`}
                  </a>
                </div>
              </div>
              <div className="operate">
                <button className="item sprite_icon3 play" onClick={() => playMusic(item?.id)}>
                  1
                </button>
                <button className="item sprite_icon3 add">2</button>
              </div>
            </div>
          );
        })}
      </div>
    </PlayerSongsWrapper>
  );
});
