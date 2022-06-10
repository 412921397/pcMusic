import React, { memo, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import { getSimiPlaylistAction } from "../../store/actionCreators";

import { getSizeImage } from "@/utils/format-utils";

import { RelevantWrapper } from "./style";
import QLThemeHeaderPlayer from "@/components/theme-header-player";

export default memo(function QLPlayerRelevant() {
  /** redux数据 */
  const { simiPlaylist } = useSelector(
    (state: any) => ({
      simiPlaylist: state.getIn(["player", "simiPlaylist"])
    }),
    shallowEqual
  );

  /** 获取异步hook */
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSimiPlaylistAction() as any);
  }, [dispatch]);

  return (
    <RelevantWrapper>
      <QLThemeHeaderPlayer title="相似歌单" />
      <div className="songs">
        {simiPlaylist.map((item: any) => {
          return (
            <div className="song-item" key={item.id}>
              <a className="image" href="/#">
                <img src={getSizeImage(item?.coverImgUrl, 50)} alt={item?.name} />
              </a>
              <div className="info text-nowrap">
                <a href="#/" className="name">
                  {item?.name}
                </a>
                <div className="auchor">
                  by
                  <a href="#/" className="nickname">
                    {item?.creator?.nickname}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </RelevantWrapper>
  );
});
