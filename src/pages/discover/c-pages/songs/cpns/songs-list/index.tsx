import { memo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getSongCategoryListAction } from "../../store/actionCreators";

import { SongListWrapper } from "./style";
import QLThemeCover from "@/components/theme-cover";
import QLPagination from "@/components/pagination";

export default memo(function QLSongsList() {
  /** 当前页码 */
  const [currentPage, setCurrentPage] = useState(1);

  /** 获取歌单 */
  const { categorySongs } = useSelector(
    (state: any) => ({
      categorySongs: state.getIn(["songs", "categorySongs"])
    }),
    shallowEqual
  );

  /** 获取真正的歌单和总数居 */
  const songList = categorySongs.playlists || [];
  const total = categorySongs.total || 0;

  const dispatch = useDispatch();

  const onPageChange = (page: number) => {
    setCurrentPage(page);
    dispatch(getSongCategoryListAction(page) as any);
  };

  return (
    <SongListWrapper>
      <div className="songs-list">
        {songList.map((item: any) => {
          return <QLThemeCover key={item?.id} info={item} right="30px" />;
        })}
      </div>
      <QLPagination
        currentPage={currentPage}
        total={total}
        pageSize={35}
        onPageChange={onPageChange}
      />
    </SongListWrapper>
  );
});
