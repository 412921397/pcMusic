import { memo, useEffect } from "react";
import { useAppDispatch as useDispatch } from "@/store/hook";

import { SongsWrapper } from "./style";
import QLSongsHeader from "./cpns/songs-header";
import QLSongsList from "./cpns/songs-list";

import { getSongCategoryAction, getSongCategoryListAction } from "./store/actionCreators";

export default memo(function QLSongs() {
  /** 异步请求redux数据 */
  const dispatch = useDispatch();

  /** 请求歌单分类和对应的歌单 */
  useEffect(() => {
    dispatch(getSongCategoryAction());
    dispatch(getSongCategoryListAction(0));
  }, [dispatch]);

  return (
    <SongsWrapper className="wrap-v2">
      <QLSongsHeader />
      <QLSongsList />
    </SongsWrapper>
  );
});
