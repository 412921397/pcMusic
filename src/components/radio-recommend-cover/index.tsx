import { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";
import { CoverWrapper } from "./style";

interface QLRadioRecommendCoverProps {
  info: any;
}

export default memo(function QLRadioRecommendCover(props: QLRadioRecommendCoverProps) {
  const { info } = props;

  return (
    <CoverWrapper>
      <a href="/#" title={info?.name}>
        <img src={getSizeImage(info?.picUrl, 150)} alt={info?.name} />
      </a>
      <a href="/#" className="text-nowrap name" title={info?.name}>
        {info?.name}
      </a>
      <p className="text-nowrap" title={info?.desc}>
        {info?.desc}
      </p>
    </CoverWrapper>
  );
});
