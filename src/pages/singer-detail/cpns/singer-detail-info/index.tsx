import { memo } from "react";
import { shallowEqual, useAppSelector as useSelector } from "@/store/hook";
import { InfoWrapper, InfoWrapperTop } from "./style";

import { getSizeImage } from "@/utils/format-utils";

export default memo(function SingerDetailInfo() {
  /** 获取数据 */
  const { artist, identify } = useSelector(
    (state) => ({
      artist: state.singer.artist,
      identify: state.singer.identify
    }),
    shallowEqual
  );

  return (
    <InfoWrapper>
      <InfoWrapperTop>
        <div className="btm">
          <h2 title={`${artist?.name} - ${identify?.imageDesc}`}>{artist?.name}</h2>
          <h3 title={`${artist?.name} - ${identify?.imageDesc}`}>{identify?.imageDesc}</h3>
        </div>
        <img src={getSizeImage(artist?.cover, 640, 300)} alt={artist?.name} />
      </InfoWrapperTop>
    </InfoWrapper>
  );
});
