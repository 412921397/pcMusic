import { memo } from "react";
import { NavLink } from "react-router-dom";
import { shallowEqual, useAppSelector as useSelector } from "@/store/hook";

import { getCount, getSizeImage, formatMinuteSecond } from "@/utils/format-utils";

import { SingerSIMiVideoWrapper } from "./style";
import QLThemeHeaderPlayer from "@/components/theme-header-player";

export default memo(function SingerSimiVideo() {
  const { mvDetail, mvList } = useSelector(
    (state) => ({
      mvDetail: state.video.mvDetail,
      mvList: state.video.mvList
    }),
    shallowEqual
  );

  return (
    <SingerSIMiVideoWrapper>
      <QLThemeHeaderPlayer title="MV简介" />
      <div className="introduction">
        <span>发布时间：{mvDetail?.publishTime}</span>
        <span>播放次数：{getCount(mvDetail?.playCount)}次</span>
      </div>
      <QLThemeHeaderPlayer title="相关推荐" />
      <div className="recommend">
        {mvList?.map((item) => {
          return (
            <div className="info-box" key={item.id}>
              <NavLink to={`\?id=${item.id}`}>
                <img
                  src={getSizeImage(item.cover, 96, 54)}
                  alt={item.artistName}
                  title={item.artistName}
                />
              </NavLink>
              <div className="info">
                <span className="title text-nowrap" title={item.name}>
                  <NavLink to={`\?id=${item.id}`}>{item.name}</NavLink>
                </span>
                <span className="text-nowrap">{formatMinuteSecond(item.duration)}</span>
                <span className="text-nowrap" title={item.artists[0].alias}>
                  by <NavLink to="">{item.artists[0].alias}</NavLink>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </SingerSIMiVideoWrapper>
  );
});
