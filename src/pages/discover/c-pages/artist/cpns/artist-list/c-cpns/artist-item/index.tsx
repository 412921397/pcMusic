import { memo } from "react";

import { getSizeImage } from "@/utils/format-utils";
import { ItemWrapper } from "./style";

interface QLArtistItemProps {
  info: any;
  index: number;
}

export default memo(function QLArtistItem(props: QLArtistItemProps) {
  /** 接受父组件传值 */
  const { info, index } = props;

  return (
    <ItemWrapper>
      {/* 前10位歌手显示图片 */}
      {index < 10 && (
        <div className="image">
          <img src={getSizeImage(info?.img1v1Url, 130)} alt={info?.name} />
        </div>
      )}
      <div className="info">
        <span className="name">{info?.name}</span>
        <i className="sprite_icon2 icon" />
      </div>
    </ItemWrapper>
  );
});
