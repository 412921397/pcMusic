import { memo } from "react";

import { getSizeImage, getCount } from "@/utils/format-utils";

import { ThemeCoverWrapper } from "./style";

interface QLThemeCoverProps {
  info: any;
  right: string;
}

export default memo(function QLThemeCover(props: QLThemeCoverProps) {
  const { info, right } = props;

  return (
    <ThemeCoverWrapper right={right}>
      <div className="cover-top" title={info?.name}>
        <img src={getSizeImage(info?.picUrl || info?.coverImgUrl, 140)} alt={info?.name} />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info?.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap" title={info?.name}>
        {info?.name}
      </div>
      <div className="cover-source" title={info?.copywriter || info?.creator?.nickname}>
        by {info?.copywriter || info?.creator?.nickname}
      </div>
    </ThemeCoverWrapper>
  );
});
