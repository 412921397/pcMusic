import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import {
  getRankingListAction,
  changeCurrentIndex,
  changeUpdateFrequency
} from "../../store/actionCreators";

import classNames from "classnames";
import { TopRankingWrapper } from "./style";

import { getSizeImage } from "@/utils/format-utils";

export default memo(function TopRanking(props) {
  /** redux数据 */
  const { topList, currentIndex } = useSelector(
    (state: any) => ({
      topList: state.getIn(["ranking", "topList"]),
      currentIndex: state.getIn(["ranking", "currentIndex"])
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
    dispatch(getRankingListAction(id) as any);
    dispatch(changeUpdateFrequency(updateFrequency));
  }, [topList, currentIndex, dispatch, currentIndx]);

  /** 选中的榜单详情 */
  const hanldeItemClick = (index: number) => {
    dispatch(changeCurrentIndex(index));
    const id = topList[currentIndx].id;
    dispatch(getRankingListAction(id) as any);
  };

  return (
    <TopRankingWrapper>
      {topList.map((item: any, index: number) => {
        let header;
        if (index === 0 || index === 4) {
          header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>;
        }
        return (
          <div key={item?.id}>
            {header}
            <div
              className={classNames("item", { active: index === currentIndex })}
              onClick={(e) => hanldeItemClick(index)}
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
