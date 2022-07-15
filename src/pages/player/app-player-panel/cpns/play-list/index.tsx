import { memo } from "react";
import { useAppSelector as useSelector, shallowEqual } from "@/store/hook";
import classNames from "classnames";

import { formatMinuteSecond } from "@/utils/format-utils";

import { PlayListWrapper } from "./style";

export default memo(function playList() {
  /** redux数据 */
  const { playLists, currentSongIndex } = useSelector(
    (state) => ({
      playLists: state.player.playLists,
      currentSongIndex: state.player.currentSongIndex
    }),
    shallowEqual
  );

  return (
    <PlayListWrapper>
      {playLists.map((item, index) => {
        return (
          <div
            key={item?.id}
            className={classNames("play-item", {
              active: index === currentSongIndex
            })}
          >
            <div className="left">{item?.name}</div>
            <div className="right">
              <span className="singer">{item?.ar[0]?.name}</span>
              <span className="duration">{formatMinuteSecond(item?.dt)}</span>
              <span className="sprite_playlist link" />
            </div>
          </div>
        );
      })}
    </PlayListWrapper>
  );
});
