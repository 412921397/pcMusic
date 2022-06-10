import React, { memo, useEffect, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import classNames from "classnames";
import { singerAlphas } from "@/utils/handle-data";
import { getArtistListAction } from "../../../../store/actionCreators";

import { AlphaListWrapper } from "./style";

export default memo(function QLAlphaList() {
  const [currentAlpha, setCurrentAlpha] = useState("-1");
  /** 请求redux的异步 */
  const dispatch = useDispatch();
  /** 获取redux数据 */
  const { currentType, currentArea } = useSelector(
    (state: any) => ({
      currentType: state.getIn(["artist", "currentType"]),
      currentArea: state.getIn(["artist", "currentArea"])
    }),
    shallowEqual
  );

  /** 始终保持-1 */
  useEffect(() => {
    setCurrentAlpha("-1");
  }, [currentType, currentArea]);
  /** 请求歌手数据 */
  useEffect(() => {
    dispatch(getArtistListAction(currentArea, currentType.type, currentAlpha) as any);
  }, [dispatch, currentArea, currentType, currentAlpha]);

  return (
    <AlphaListWrapper hasTop={+currentArea !== -1}>
      {+currentArea !== -1 &&
        singerAlphas.map((item: any) => {
          const isActive = currentAlpha === item;
          return (
            <div key={item} className={classNames("item", { active: isActive })}>
              <span onClick={(e) => setCurrentAlpha(item)}>
                {item === "0" ? "其他" : item === "-1" ? "热门" : item.toUpperCase()}
              </span>
            </div>
          );
        })}
    </AlphaListWrapper>
  );
});
