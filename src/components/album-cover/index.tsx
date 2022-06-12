import { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";

import { AlbumWrapper } from "./style";

interface coverProps {
  info?: any;
  size?: number;
  width: number | string;
  bgp: string;
}

export default memo(function QLAlbumCover(props: coverProps) {
  const { info, size, width, bgp } = props;

  return (
    <AlbumWrapper width={width} size={size} bgp={bgp}>
      <div className="album-image" title={info?.name}>
        <img src={getSizeImage(info.picUrl, size)} alt={info?.name} />
        <a href="/todo" className="cover image_cover">
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
