import { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getDjRadiosAction } from "../../store/actionCreators";
import { RankingWraper } from "./style";
import QLThemeHeaderNormal from "@/components/theme-header-normal";
import QLRadioRankingCover from "@/components/radio-ranking-cover";
import Pagination from "@/components/pagination";

export default memo(function QLRadioRanking() {
  /** state */
  const [currentPage, setCurrentPage] = useState(1);
  /** redux数据 */
  const { currentId, radios } = useSelector(
    (state: any) => ({
      currentId: state.getIn(["djradio", "currentId"]),
      radios: state.getIn(["djradio", "radios"])
    }),
    shallowEqual
  );
  /** 获取异步hook */
  const dispatch = useDispatch();
  /** 请求优秀电台数据 */
  useEffect(() => {
    if (currentId === 0) return;
    dispatch(getDjRadiosAction(currentId, 0) as any);
  }, [dispatch, currentId]);

  /** 分页数据 */
  const onPageChange = (page: number) => {
    setCurrentPage(page);
    dispatch(getDjRadiosAction(currentId, page * 30) as any);
  };

  return (
    <RankingWraper>
      <QLThemeHeaderNormal title="电台排行榜" />
      <div className="ranking-list">
        {radios.map((item: any) => {
          return <QLRadioRankingCover key={item.id} info={item} />;
        })}
      </div>
      <Pagination
        currentPage={currentPage}
        total={1000}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </RankingWraper>
  );
});
