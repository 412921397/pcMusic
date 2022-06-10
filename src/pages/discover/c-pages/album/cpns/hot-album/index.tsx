import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getHotAlbumsAction } from "../../store/actionCreators";

import { HotAlbumWrapper } from "./style";
import QLThemeHeaderNormal from "@/components/theme-header-normal";
import QLAlbumCover from "@/components/album-cover";

export default memo(function QLHotAlbum() {
  /** 请求redux的异步 */
  const dispatch = useDispatch();

  const { hotAlbums } = useSelector(
    (state: any) => ({
      hotAlbums: state.getIn(["album", "hotAlbums"])
    }),
    shallowEqual
  );

  /** 请求新碟上架 */
  useEffect(() => {
    dispatch(getHotAlbumsAction() as any);
  }, [dispatch]);

  return (
    <HotAlbumWrapper>
      <QLThemeHeaderNormal title="热门新碟" />
      <div className="album-list">
        {hotAlbums.map((item: any) => {
          return (
            <QLAlbumCover key={item.id} info={item} size={130} width={"153px"} bgp={"-845px"} />
          );
        })}
      </div>
    </HotAlbumWrapper>
  );
});
