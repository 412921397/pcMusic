import { memo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch as useDispatch } from "@/store/hook";

import { getMVURLAction, getVideoDetailAction, getRelatedAllvideoAction } from "./store";

import { SingerVideoWrapper, SingerVideoLeft, SingerVideoRight } from "./style";
import SingerMV from "./cpns/singer-mv";
import SingetCommnet from "./cpns/singer-comment";
import SingerSimiVideo from "./cpns/singer-simivideo";

export default memo(function SingerDetailVideo() {
  /** 获取路由参数 */
  const [params] = useSearchParams();
  const id = params && params.getAll("id");

  /** 获取异步hook */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMVURLAction(+id[0]));
    dispatch(getVideoDetailAction(+id[0]));
    dispatch(getRelatedAllvideoAction(+id[0]));
  }, [dispatch, params]);

  return (
    <SingerVideoWrapper>
      <div className="content wrap-v2">
        <SingerVideoLeft>
          <SingerMV />
          <SingetCommnet />
        </SingerVideoLeft>
        <SingerVideoRight>
          <SingerSimiVideo />
        </SingerVideoRight>
      </div>
    </SingerVideoWrapper>
  );
});
