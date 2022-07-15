import { memo, useEffect } from "react";
import {
  shallowEqual,
  useAppDispatch as useDispatch,
  useAppSelector as useSelector
} from "@/store/hook";

import { getDjRadioRecommendAction } from "../../store/actionCreators";
import { RecommendWrapper } from "./style";
import QLThemeHeaderNormal from "@/components/theme-header-normal";
import QLRadioRecommendCover from "@/components/radio-recommend-cover";

export default memo(function QLRadioRecommend() {
  const dispatch = useDispatch();
  /** 请求当前优秀电台数据 */
  useEffect(() => {
    dispatch(getDjRadioRecommendAction(currentId));
  }, [dispatch]);

  /** redux数据 */
  const { currentId, recommends } = useSelector(
    (state) => ({
      currentId: state.djradio.currentId,
      recommends: state.djradio.recommends
    }),
    shallowEqual
  );

  return (
    <RecommendWrapper>
      <QLThemeHeaderNormal title="优秀新电台" />
      <div className="radio-list">
        {recommends?.slice(0, 5)?.map((item) => {
          return <QLRadioRecommendCover info={item} />;
        })}
      </div>
    </RecommendWrapper>
  );
});
