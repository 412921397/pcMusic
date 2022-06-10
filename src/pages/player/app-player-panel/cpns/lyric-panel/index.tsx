import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";
import classNames from "classnames";

import { scrollTo } from "@/utils/ui-helper";

import { PannelWrapper } from "./style";

export default memo(function QLLyricPanel() {
  const panelRef: any = useRef();

  /** 获取歌词 */
  const { lyricList, currentLyricIndex } = useSelector(
    (state: any) => ({
      lyricList: state.getIn(["player", "lyricList"]),
      currentLyricIndex: state.getIn(["player", "currentLyricIndex"])
    }),
    shallowEqual
  );

  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300);
  }, [currentLyricIndex]);

  return (
    <PannelWrapper ref={panelRef}>
      <div className="lrc-content">
        {lyricList.map((item: any, index: number) => {
          return (
            <div
              key={item?.time}
              className={classNames("lrc-item", {
                active: index === currentLyricIndex
              })}
            >
              {item?.content}
            </div>
          );
        })}
      </div>
    </PannelWrapper>
  );
});
