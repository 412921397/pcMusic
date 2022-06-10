import React, { memo } from "react";

import { RecommendWrapper, Content, RecommendLeft, RecommendRight } from "./style";
import QLTopbannner from "./c-cpns/top-banner";
import HOTRecommend from "./c-cpns/hot-recommend";
import NEWAlbum from "./c-cpns/new-album";
import RCMRanking from "./c-cpns/recommend-ranking";
import UserLogin from "./c-cpns/user-login";
import SettleDinger from "./c-cpns/settle-singer";
import HotAnchor from "./c-cpns/hot-anchor";

export default memo(function QLRecommend() {
  return (
    <RecommendWrapper>
      <QLTopbannner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HOTRecommend />
          <NEWAlbum />
          <RCMRanking />
        </RecommendLeft>
        <RecommendRight>
          <UserLogin />
          <SettleDinger />
          <HotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  );
});
