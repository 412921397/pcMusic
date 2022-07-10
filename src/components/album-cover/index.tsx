import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { getSizeImage } from "@/utils/format-utils";

import { AlbumWrapper } from "./style";

interface QLTCoverProps {
  info?: any;
  size?: number;
  width: number | string;
  bgp: string;
}

export default memo(function QLAlbumCover(props: QLTCoverProps) {
  const { info, size, width, bgp } = props;

  const navigate = useNavigate();
  /** 跳转歌单详情 */
  const albumClick = (id: number) => {
    navigate("/discover/songsDetail", { replace: false, state: { id } });
  };

  return (
    <AlbumWrapper width={width} size={size} bgp={bgp}>
      <div className="album-image" title={info?.name}>
        <img src={getSizeImage(info?.picUrl, size)} alt={info?.name} />
        <a onClick={() => albumClick(info?.id)} className="cover image_cover">
          {info?.name}
        </a>
      </div>
      <div className="album-info">
        <div className="name text-nowrap" title={info?.name}>
          {info?.name}
        </div>
        <div className="artist text-nowrap" title={info?.artist?.name}>
          {info?.artist?.name}
        </div>
      </div>
    </AlbumWrapper>
  );
});
