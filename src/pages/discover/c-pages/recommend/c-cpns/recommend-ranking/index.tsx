import { memo, useEffect } from "react";
import {
  shallowEqual,
  useAppDispatch as useDispatch,
  useAppSelector as useSelector
} from "@/store/hook";

import { getTopListAction } from "../../store";
import QLThemeHeaderRCM from "@/components/theme-header-rcm";
import QLTopRanking from "@/components/top-ranking";
import { RankingWrapper } from "./style";

export default memo(function QLHotranking() {
  const { upRanking, newRanking, originRanking } = useSelector(
    (state) => ({
      upRanking: state.recommend.upRanking,
      newRanking: state.recommend.newRanking,
      originRanking: state.recommend.originRanking
    }),
    shallowEqual
  );

  /** 榜单 */
  const dispatch = useDispatch();

  useEffect(() => {
    /** 3779629: 新歌榜 3778678: 热门榜 2884035: 原创榜 19723756: 飙升榜 */
    const songId = [3779629, 3778678, 2884035, 19723756];
    for (const songIdIndex of songId) {
      dispatch(getTopListAction(songIdIndex));
    }
  }, [dispatch]);

  return (
    <RankingWrapper>
      <QLThemeHeaderRCM title="榜单" link="/discover/ranking" />
      <div className="tops">
        <QLTopRanking info={upRanking} />
        <QLTopRanking info={newRanking} />
        <QLTopRanking info={originRanking} />
      </div>
    </RankingWrapper>
  );
});
