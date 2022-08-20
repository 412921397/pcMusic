import { memo, useEffect } from "react";
import {
  shallowEqual,
  useAppDispatch as useDispatch,
  useAppSelector as useSelector
} from "@/store/hook";

import { getHotRecommendsAction } from "../../store";

import { HotRecommendWrapper } from "./style";
import QLThemeHeaderRCM from "@/components/theme-header-rcm";
import QLSongsCover from "@/components/songs-cover";

export default memo(function QLHotrecommend() {
  // state

  // redux hook
  const { hotRecommends } = useSelector(
    (state) => ({
      hotRecommends: state.recommend.hotRecommends
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hook
  useEffect(() => {
    dispatch(getHotRecommendsAction());
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
        {hotRecommends.map((item) => {
          return <QLSongsCover key={item?.id} info={item} />;
        })}
      </div>
    </HotRecommendWrapper>
  );
});
