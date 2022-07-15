import { memo, useCallback, useEffect, useState } from "react";
import {
  shallowEqual,
  useAppDispatch as useDispatch,
  useAppSelector as useSelector
} from "@/store/hook";

import { getTopAlbumsAction } from "../../store/actionCreators";

import { TopAlbumWrapper } from "./style";
import QLThemeHeaderNormal from "@/components/theme-header-normal";
import QLAlbumCover from "@/components/album-cover";
import QLPagination from "@/components/pagination";

export default memo(function QLTopAlbum() {
  /** 页码 */
  const [currentPage, setCurrentPage] = useState(1);
  /** 获取redux请求hook */
  const dispatch = useDispatch();

  /** 请求所有专辑 */
  useEffect(() => {
    dispatch(getTopAlbumsAction(1) as any);
  }, [dispatch]);

  /** 获取数据 */
  const { topAlbums, total } = useSelector(
    (state) => ({
      topAlbums: state.album.topAlbums,
      total: state.album.total
    }),
    shallowEqual
  );

  /** 分页点击 */
  const onPageChange = useCallback(
    (page: number) => {
      setCurrentPage(page);
      dispatch(getTopAlbumsAction(page));
    },
    [dispatch]
  );

  return (
    <TopAlbumWrapper>
      <QLThemeHeaderNormal title="全部新碟" />
      <div className="album-list">
        {topAlbums.map((item) => {
          return (
            <QLAlbumCover key={item?.id} info={item} size={130} width={"153px"} bgp={"-845px"} />
          );
        })}
      </div>
      <QLPagination
        currentPage={currentPage}
        total={total}
        pageSize={30}
        onPageChange={onPageChange}
      />
    </TopAlbumWrapper>
  );
});
