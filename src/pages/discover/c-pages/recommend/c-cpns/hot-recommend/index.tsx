import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getHotRecommendsAction } from "../../store/actionCreators";

import { HotRecommendWrapper } from "./style";
import QLThemeHeaderRCM from "@/components/theme-header-rcm";
import QLSongsCover from "@/components/songs-cover";

export default memo(function QLHotrecommend() {
  // state

  // redux hook
  const { hotRecommends } = useSelector(
    (state: any) => ({
      hotRecommends: state.getIn(["recommend", "hotRecommends"])
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hook
  useEffect(() => {
    dispatch(getHotRecommendsAction() as any);
  }, [dispatch]);

  // 其他业务逻辑

  return (
    <HotRecommendWrapper>
      <QLThemeHeaderRCM
        title="热门推荐"
        keywords={["华语", "流行", "民谣", "摇滚", "电子"]}
        link="/discover/songs"
      />
      <div className="recommend-list">
        {hotRecommends.map((item: any) => {
          return <QLSongsCover key={item.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
