import { memo } from "react";
import { shallowEqual, useAppSelector as useSelector } from "@/store/hook";

import QLSongOperationBar from "@/components/song-operation-bar";

import { RankingHeaderWrapper } from "./style";
import { formatMonthDay } from "@/utils/format-utils";

export default memo(function QLRankingHeader() {
  const { playList, updateFrequency } = useSelector(
    (state) => ({
      playList: state.ranking.playList,
      updateFrequency: state.ranking.updateFrequency
    }),
    shallowEqual
  );

  return (
    <RankingHeaderWrapper>
      <div className="image">
        <img src={playList?.coverImgUrl} alt={playList?.name} />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{playList?.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(playList?.updateTime)}</div>
          <div className="update-f">（{updateFrequency}）</div>
        </div>
        <QLSongOperationBar
          favorTitle={`(${playList.subscribedCount})`}
          shareTitle={`(${playList.shareCount})`}
          downloadTitle="下载"
          commentTitle={`(${playList.commentCount})`}
        />
      </div>
    </RankingHeaderWrapper>
  );
});
