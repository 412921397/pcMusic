import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getDjRadioRecommendAction } from "../../store/actionCreators";
import { RecommendWrapper } from "./style";
import QLThemeHeaderNormal from "@/components/theme-header-normal";
import QLRadioRecommendCover from "@/components/radio-recommend-cover";

export default memo(function QLRadioRecommend() {
  const dispatch = useDispatch();
  /** 请求当前优秀电台数据 */
  useEffect(() => {
    dispatch(getDjRadioRecommendAction(currentId) as any);
  }, [dispatch]);

  /** redux数据 */
  const { currentId, recommends } = useSelector(
    (state: any) => ({
      currentId: state.getIn(["djradio", "currentId"]),
      recommends: state.getIn(["djradio", "recommends"])
    }),
    shallowEqual
  );

  return (
    <RecommendWrapper>
      <QLThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {recommends.slice(0, 5).map((item: any) => {
          return <QLRadioRecommendCover info={item} />;
        })}
      </div>
    </RecommendWrapper>
  );
});
