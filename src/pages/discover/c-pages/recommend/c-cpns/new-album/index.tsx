import { memo, useEffect, useRef } from "react";
import type { FC, ReactNode, ElementRef } from "react";
import {
  shallowEqual,
  useAppDispatch as useDispatch,
  useAppSelector as useSelector
} from "@/store/hook";

import { getNewAlbumsAction } from "../../store";

import { Carousel } from "antd";
import QLThemeHeaderRCM from "@/components/theme-header-rcm";
import QlAlbumCover from "@/components/album-cover";
import { AlbumWrapper } from "./style";

interface IProps {
  children?: ReactNode;
}

const QLHotalbum: FC<IProps> = () => {
  const pageRef = useRef<ElementRef<typeof Carousel>>(null);

  /** 获取redux的数据 */
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNewAlbumsAction(10));
  }, [dispatch]);

  return (
    <AlbumWrapper>
      <QLThemeHeaderRCM title="新碟上架" link="/discover/album" />
      <div className="content">
        <div className="arrow arrow-left sprite_02" onClick={() => pageRef.current?.prev()}></div>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item: number) => {
              return (
                <div key={item} className="page">
                  {newAlbums?.slice(item * 5, (item + 1) * 5).map((iten) => {
                    return (
                      <QlAlbumCover key={iten.id} info={iten} size={100} width={118} bgp="-570px" />
                    );
                  })}
                </div>
              );
            })}
          </Carousel>
        </div>
        <div className="arrow arrow-right sprite_02" onClick={() => pageRef.current?.next()}></div>
      </div>
    </AlbumWrapper>
  );
};

export default memo(QLHotalbum);
