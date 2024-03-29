import { memo, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  shallowEqual,
  useAppDispatch as useDispatch,
  useAppSelector as useSelector
} from "@/store/hook";

import { getSongCategoryListAction } from "../../store";

import { getSizeImage } from "@/utils/format-utils";

import { RelevantWrapper } from "./style";
import QLThemeHeaderPlayer from "@/components/theme-header-player";

export default memo(function QLSongsDetailRelevant() {
  // 获取异步
  const dispatch = useDispatch();
  /** 热门歌单 */
  useEffect(() => {
    dispatch(getSongCategoryListAction());
  }, []);
  /** 热门歌单 */
  const { detailPlayList } = useSelector(
    (state) => ({
      detailPlayList: state.songsCover.detailPlayList
    }),
    shallowEqual
  );

  const navigate = useNavigate();

  /** 跳转歌单详情 */
  const albumClick = (id: number) => {
    navigate("/discover/songsDetail", { replace: false, state: { id } });
  };

  return (
    <RelevantWrapper>
      <QLThemeHeaderPlayer title="热门歌单" />
      <div className="songs-detail">
        {detailPlayList?.slice(0, 5)?.map((item: any) => {
          return (
            <div className="song-item" key={item?.id}>
              <a className="image" onClick={() => albumClick(item?.id)}>
                <img src={getSizeImage(item?.coverImgUrl, 50)} alt={item?.name} />
              </a>
              <div className="info text-nowrap">
                <a onClick={() => albumClick(item?.id)} className="name">
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
