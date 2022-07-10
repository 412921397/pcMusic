import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { getSizeImage, getCount } from "@/utils/format-utils";

import { ThemeCoverWrapper } from "./style";

interface QLThemeCoverProps {
  info: any;
  right: string;
}

export default memo(function QLThemeCover(props: QLThemeCoverProps) {
  const { info, right } = props;

  const navigate = useNavigate();

  /** 跳转歌单详情 */
  const albumClick = (id: number) => {
    navigate("/discover/songsDetail", { replace: false, state: { id } });
  };

  return (
    <ThemeCoverWrapper right={right}>
      <div className="cover-top" title={info?.name} onClick={() => albumClick(info?.id)}>
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
