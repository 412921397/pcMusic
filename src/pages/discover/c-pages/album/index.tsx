import { memo } from "react";

import { AblumWrapper } from "./style";
import QLHotAlbum from "./cpns/hot-album";
import QLTopAlbum from "./cpns/top-album";

export default memo(function QLAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <QLHotAlbum />
      <QLTopAlbum />
    </AblumWrapper>
  );
});
