import React, { memo } from "react";

import { PanelWrapper } from "./style";
import QLPlayerHeader from "./cpns/play-header";
import QLPlayList from "./cpns/play-list";
import QLLyricPanel from "./cpns/lyric-panel";

export default memo(function QLAppPlayPanel() {
  return (
    <PanelWrapper>
      <QLPlayerHeader />
      <div className="main">
        <QLPlayList />
        <QLLyricPanel />
      </div>
    </PanelWrapper>
  );
});
