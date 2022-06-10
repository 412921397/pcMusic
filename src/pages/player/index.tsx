import React, { memo } from "react";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";
import QLPlayerInfo from "./cpns/player-info";
import QLPlayerContent from "./cpns/player-content";
import QLPlayerSongs from "./cpns/player-songs";
import QLPlayerRelevant from "./cpns/player-relevant";

export default memo(function QLPlayer() {
  return (
    <PlayerWrapper>
      <div className="content wrap-v2">
        <PlayerLeft>
          <QLPlayerInfo />
          <QLPlayerContent />
        </PlayerLeft>
        <PlayerRight>
          <QLPlayerSongs />
          <QLPlayerRelevant />
        </PlayerRight>
      </div>
    </PlayerWrapper>
  );
});
