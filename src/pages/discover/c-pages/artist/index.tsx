import { memo } from "react";

import { QLArtistWrapper } from "./style";
import QLArtistCategory from "./cpns/artist-category";
import QLArtistList from "./cpns/artist-list";

export default memo(function QLArtist() {
  return (
    <QLArtistWrapper>
      <div className="content wrap-v2">
        <QLArtistCategory />
        <QLArtistList />
      </div>
    </QLArtistWrapper>
  );
});
