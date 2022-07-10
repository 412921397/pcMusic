import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

import { formatMinuteSecond } from "@/utils/format-utils";

import { PlayListWrapper } from "./style";

export default memo(function playList() {
  /** redux数据 */
  const { playLists, currentSongIndex } = useSelector(
    (state: any) => ({
      playLists: state.getIn(["player", "playLists"]),
      currentSongIndex: state.getIn(["player", "currentSongIndex"])
    }),
    shallowEqual
  );

  return (
    <PlayListWrapper>
      {playLists.map((item: any, index: number) => {
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
