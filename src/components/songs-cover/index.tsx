import { memo } from "react";
import { useNavigate } from "react-router-dom";

import { getCount, getSizeImage } from "@/utils/format-utils";
import { SongsCoverWrapper } from "./style";

interface QLSongsProps {
  info?: any;
}

export default memo(function QLSongsCover(props: QLSongsProps) {
  const { info } = props;
  const navigate = useNavigate();

  const coverClick = (id: number) => {
    navigate("/discover/songsDetail", { replace: false, state: { id } });
  };
  return (
    <SongsCoverWrapper>
      <div className="cover-top" title={info.name} onClick={() => coverClick(info?.id)}>
        <img src={getSizeImage(info.picUrl, 140)} alt={info.name} />
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji" />
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play" />
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap" title={info.name}>
        {info.name}
      </div>
      {(info?.copywriter || info?.creator?.nickname) && (
        <div className="cover-source text-nowrap">
          by {info?.copywriter || info?.creator?.nickname}
        </div>
      )}
    </SongsCoverWrapper>
  );
});
