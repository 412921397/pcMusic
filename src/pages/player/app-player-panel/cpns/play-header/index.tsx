import { memo, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { changeCurrentSongAction } from "../../../store/actionCreators";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function PlayHeader() {
  /** 获取歌曲列表数据 */
  const { playLists, currentSong } = useSelector(
    (state: any) => ({
      playLists: state.getIn(["player", "playLists"]),
      currentSong: state.getIn(["player", "currentSong"])
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  /** 清除所有歌曲 */
  const clearMusic = useCallback(() => {
    dispatch(changeCurrentSongAction({}));
  }, [dispatch]);

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <h3>播放列表({playLists?.length})</h3>
        <div className="operator">
          <button>
            <i className="sprite_playlist icon favor" />
            收藏全部
          </button>
          <button onClick={() => clearMusic()}>
            <i className="sprite_playlist icon remove" />
            清除
          </button>
        </div>
      </HeaderLeft>
      <HeaderRight>{currentSong?.name}</HeaderRight>
    </HeaderWrapper>
  );
});
