import { memo, useRef } from "react";
import { JolPlayer } from "jol-player";
import type { JoLPlayerRef } from "jol-player";
import { shallowEqual, useAppSelector as useSelector } from "@/store/hook";

import { InfoWrapper } from "./style";

type IClarity = "SD" | "HD" | "FHD" | "BD";
interface IRMap {
  [key: number]: IClarity;
}

export default memo(function SingerMV() {
  const videoRef = useRef<JoLPlayerRef>(null);

  /** 获取视频信息 */
  const mvInfo = useSelector((state) => state.video.mvData, shallowEqual);

  /** 视频清晰度 */
  const rMap: IRMap = {
    360: "SD",
    540: "HD",
    720: "FHD",
    1080: "BD"
  };

  return (
    <InfoWrapper>
      <JolPlayer
        ref={videoRef}
        className="video"
        option={{
          videoSrc: mvInfo.url,
          width: 750,
          height: 420,
          pausePlacement: "center",
          isShowPauseButton: true,
          quality: [{ name: rMap[mvInfo.r], url: mvInfo.url }]
        }}
      />
    </InfoWrapper>
  );
});
