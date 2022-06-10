import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { ArtistListWrapper } from "./style";
import QLThemeHeaderNormal from "@/components/theme-header-normal";
import QLAlphaList from "./c-cpns/alpha-list";
import QLArtistItem from "./c-cpns/artist-item";

export default memo(function QLArtistList() {
  const { currentType, artistList } = useSelector(
    (state: any) => ({
      currentType: state.getIn(["artist", "currentType"]),
      artistList: state.getIn(["artist", "artistList"])
    }),
    shallowEqual
  );

  return (
    <ArtistListWrapper>
      <QLThemeHeaderNormal title={currentType.name} />
      <QLAlphaList />
      <div className="artist-list">
        {artistList.map((item: any, index: number) => {
          return <QLArtistItem key={item?.id} index={index} info={item} />;
        })}
      </div>
    </ArtistListWrapper>
  );
});
