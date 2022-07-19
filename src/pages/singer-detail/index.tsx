import { memo, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch as useDispatch } from "@/store/hook";

import {
  getSingerDetailAction,
  getSimiArtistAction,
  getArtistSongAction,
  getArtistAlbumAction,
  getArtistMVAction
} from "./store/actionCreators";

import { SingerDetailWrapper, SingerDetailLeft, SingerDetailRight } from "./style";
import QLSingerDetailInfo from "./cpns/singer-detail-info";
import QLSingerDetailList from "./cpns/singer-detail-list";
import QLSingerDetailSingers from "./cpns/singer-detail-singers";

export default memo(function SingerDetail() {
  const dispatch = useDispatch();

  const [params] = useSearchParams();
  /** 歌手id */
  const id = params && params.getAll("id");

  useEffect(() => {
    dispatch(getSingerDetailAction(+id[0]));
    dispatch(getSimiArtistAction(+id[0]));
    dispatch(getArtistSongAction(+id[0]));
    dispatch(getArtistAlbumAction(+id[0], 12));
    dispatch(getArtistMVAction(+id[0]));
  }, [dispatch, params]);

  return (
    <SingerDetailWrapper>
      <div className="content wrap-v2">
        <SingerDetailLeft>
          <QLSingerDetailInfo />
          <QLSingerDetailList />
        </SingerDetailLeft>
        <SingerDetailRight>
          <QLSingerDetailSingers />
        </SingerDetailRight>
      </div>
    </SingerDetailWrapper>
  );
});
