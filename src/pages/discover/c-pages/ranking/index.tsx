import { memo, useEffect } from "react";
import { useAppDispatch as useDispatch } from "@/store/hook";

import { getTopListAction } from "./store";

import { RankingWrapper, RankingLeft, RankingRight } from "./style";
import QLTopRanking from "./cpns/top-ranking";
import QLRankingHeader from "./cpns/ranking-header";
import QLRankingList from "./cpns/ranking-list";

export default memo(function QLRanking() {
  /** redux异步请求 */
  const dispatch = useDispatch();

  /** 请求全部榜单 */
  useEffect(() => {
    dispatch(getTopListAction());
  }, [dispatch]);

  return (
    <RankingWrapper className="wrap-v2">
      <RankingLeft>
        <QLTopRanking />
      </RankingLeft>
      <RankingRight>
        <QLRankingHeader />
        <QLRankingList />
      </RankingRight>
    </RankingWrapper>
  );
});
