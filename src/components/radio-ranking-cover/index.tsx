import { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";

import { CoverWrapper } from "./style";

interface QLRadioRankingCoverProps {
  info: any;
}

export default memo(function QLRadioRankingCover(props: QLRadioRankingCoverProps) {
  const { info } = props;
  return (
    <CoverWrapper>
      <a href="#/">
        <img src={getSizeImage(info?.picUrl, 120)} alt={info?.name} />
      </a>
      <div className="info">
        <h2 className="title" title={info?.name}>
          {info?.name}
        </h2>
        <div className="nickname sprite_icon2">
          <i className="sprite_icon2 left"></i>
          {info?.dj?.nickname}
        </div>
        <div className="count">
          <span className="phase">共{info?.programCount}期</span>
          <span className="subscribe">订阅{info?.subCount}次</span>
        </div>
      </div>
    </CoverWrapper>
  );
});
