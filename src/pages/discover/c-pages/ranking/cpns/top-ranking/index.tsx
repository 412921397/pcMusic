import { memo, useEffect } from "react";
import {
  shallowEqual,
  useAppDispatch as useDispatch,
  useAppSelector as useSelector
} from "@/store/hook";

import { getRankingListAction } from "../../store/actionCreators";
import { changeCurrentIndex, changeUpdateFrequency } from "../../store/rankingSlice";

import classNames from "classnames";
import { TopRankingWrapper } from "./style";

import { getSizeImage } from "@/utils/format-utils";

export default memo(function TopRanking() {
  /** redux数据 */
  const { topList, currentIndex } = useSelector(
    (state) => ({
      topList: state.ranking.topList,
      currentIndex: state.ranking.currentIndex
    }),
    shallowEqual
  );
  /** 请求redux的hook */
  const dispatch = useDispatch();
  const currentIndx = currentIndex;

  /** 获取当前榜单详细歌曲 */
  useEffect(() => {
    const id = topList[currentIndx] && topList[currentIndx]?.id;
    const updateFrequency = topList[currentIndx] && topList[currentIndx]?.updateFrequency;

    if (!id || !updateFrequency) return;
    dispatch(getRankingListAction(id));
    dispatch(changeUpdateFrequency(updateFrequency));
  }, [topList, currentIndex, dispatch, currentIndx]);

  /** 选中的榜单详情 */
  const hanldeItemClick = (index: number) => {
    dispatch(changeCurrentIndex(index));
    const id = topList[currentIndx].id;
    dispatch(getRankingListAction(id));
  };

  return (
    <TopRankingWrapper>
      {topList.map((item, index) => {
        let header;
        if (index === 0 || index === 4) {
          header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>;
        }
        return (
          <div key={item?.id}>
            {header}
            <div
              className={classNames("item", { active: index === currentIndex })}
              onClick={() => hanldeItemClick(index)}
            >
              <img src={getSizeImage(item?.coverImgUrl, 40)} alt={item?.name} />
              <div className="info">
                <div className="name">{item?.name}</div>
                <div className="update">{item?.updateFrequency}</div>
              </div>
            </div>
          </div>
        );
      })}
    </TopRankingWrapper>
  );
});
