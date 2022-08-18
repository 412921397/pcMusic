import { memo, useEffect, useRef } from "react";
import { useAppSelector as useSelector, shallowEqual } from "@/store/hook";
import classNames from "classnames";

import { scrollTo } from "@/utils/ui-helper";

import { PannelWrapper } from "./style";

export default memo(function QLLyricPanel() {
  const panelRef = useRef<HTMLDivElement>(null);

  /** 获取歌词 */
  const { lyricList, currentLyricIndex } = useSelector(
    (state) => ({
      lyricList: state.player.lyricList,
      currentLyricIndex: state.player.currentLyricIndex
    }),
    shallowEqual
  );

  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    if (panelRef.current) scrollTo(panelRef.current, (currentLyricIndex - 3) * 32, 300);
  }, [currentLyricIndex]);

  return (
    <PannelWrapper ref={panelRef}>
      <div className="lrc-content">
        {lyricList.map((item, index) => {
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
