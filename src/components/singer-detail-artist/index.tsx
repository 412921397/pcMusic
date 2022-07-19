import { memo } from "react";
import { shallowEqual, useAppSelector } from "@/store/hook";

import { SingerArtistWrapper } from "./style";

import dayjs from "dayjs";
import { getSizeImage } from "@/utils/format-utils";

export default memo(function QLSingerArtist() {
  /** 歌手专辑 */
  const hotAlbums = useAppSelector((state) => state.singer.hotAlbums, shallowEqual);

  /** 跳转歌单详情 */
  const albumClick = (id: number) => {
    console.log(id);
  };

  return (
    <SingerArtistWrapper size={130} width={"700px"} bgp={"-845px"}>
      {hotAlbums.map((item) => {
        return (
          <div className="singer-box" key={item?.id}>
            <div key={item?.id} className="album-image" title={item?.name}>
              <img src={getSizeImage(item?.picUrl, 100)} alt={item?.name} />
              <a onClick={() => albumClick(item?.id)} className="cover image_cover">
                {item?.name}
              </a>
            </div>
            <div className="album-info">
              <div className="name text-nowrap" title={item?.name}>
                {item?.name}
              </div>
              <div className="artist text-nowrap">
                {dayjs(item?.publishTime).format("YYYY-MM-DD")}
              </div>
            </div>
          </div>
        );
      })}
    </SingerArtistWrapper>
  );
});
