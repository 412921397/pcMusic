import { memo } from "react";
import { shallowEqual, useAppSelector as useSelector } from "@/store/hook";

import { InfoWrapper } from "./style";

export default memo(function SingerMV() {
  /** 获取视频信息 */
  const mvInfo = useSelector((state) => state.video.mvData, shallowEqual);

  return (
    <InfoWrapper>
      <video src={mvInfo.url} autoPlay controls />
    </InfoWrapper>
  );
});
