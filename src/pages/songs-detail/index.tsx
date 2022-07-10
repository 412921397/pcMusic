import { memo } from "react";

import { SongsDetailWrapper, SongsDetailLeft, SongsDetailRight } from "./style";
import QLSongsDetailInfo from "./cpns/songs-detail-info";
import QLSongsDetailList from "./cpns/songs-detail-list";
import QLSongsDetailSongs from "./cpns/songs-detail-songs";

export default memo(function QLSongsDetail() {
  return (
    <SongsDetailWrapper>
      <div className="content wrap-v2">
        <SongsDetailLeft>
          <QLSongsDetailInfo />
          <QLSongsDetailList />
        </SongsDetailLeft>
        <SongsDetailRight>
          <QLSongsDetailSongs />
        </SongsDetailRight>
      </div>
    </SongsDetailWrapper>
  );
});
