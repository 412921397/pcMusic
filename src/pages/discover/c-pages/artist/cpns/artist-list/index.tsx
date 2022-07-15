import { memo } from "react";
import { shallowEqual, useAppSelector as useSelector } from "@/store/hook";

import { ArtistListWrapper } from "./style";
import QLThemeHeaderNormal from "@/components/theme-header-normal";
import QLAlphaList from "./c-cpns/alpha-list";
import QLArtistItem from "./c-cpns/artist-item";

export default memo(function QLArtistList() {
  const { currentType, artistList } = useSelector(
    (state) => ({
      currentType: state.artist.currentType,
      artistList: state.artist.artistList
    }),
    shallowEqual
  );

  return (
    <ArtistListWrapper>
      <QLThemeHeaderNormal title={currentType?.name} />
      <QLAlphaList />
      <div className="artist-list">
        {artistList.map((item, index) => {
          return <QLArtistItem key={item?.id} index={index} info={item} />;
        })}
      </div>
    </ArtistListWrapper>
  );
});
