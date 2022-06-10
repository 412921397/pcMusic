import React, { memo, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getNewAlbumsAction } from "../../store/actionCreators";

import { Carousel } from "antd";
import QLThemeHeaderRCM from "@/components/theme-header-rcm";
import QlAlbumCover from "@/components/album-cover";
import { AlbumWrapper } from "./style";

export default memo(function QLHotalbum() {
  const pageRef: any = useRef(null);

  /** 获取redux的数据 */
  const { newAlbums } = useSelector(
    (state: any) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"])
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumsAction(10) as any);
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <QLThemeHeaderRCM title="新碟上架" link="/discover/album" />
      <div className="content">
        <div className="arrow arrow-left sprite_02" onClick={(e) => pageRef.current.prev()}></div>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item: number) => {
              return (
                <div key={item} className="page">
                  {newAlbums?.slice(item * 5, (item + 1) * 5).map((iten: any) => {
                    return (
                      <QlAlbumCover key={iten.id} info={iten} size={100} width={118} bgp="-570px" />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02" onClick={(e) => pageRef.current.next()}></div>
      </div>
    </AlbumWrapper>
  );
});
