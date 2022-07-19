import { memo } from "react";
import { NavLink } from "react-router-dom";
import { shallowEqual, useAppSelector as useSelector } from "@/store/hook";

import { getSizeImage } from "@/utils/format-utils";

import { DeatailSingerWrapper } from "./style";
import QLThemeHeaderPlayer from "@/components/theme-header-player";

export default memo(function QLSingerDetailSingers() {
  const artists = useSelector((state) => state.singer.artists, shallowEqual);

  return (
    <DeatailSingerWrapper>
      <QLThemeHeaderPlayer title="热门歌手" />
      <div className="singer">
        {artists?.slice(0, 6)?.map((item) => {
          return (
            <div className="singer-box" key={item?.id}>
              <NavLink to={`discover/singerDetail?id=${item?.id}`}>
                <img
                  className="img"
                  key={item?.id}
                  src={getSizeImage(item?.picUrl, 50)}
                  alt={item?.name}
                  title={item?.name}
                />
              </NavLink>
              <div className="singer-name text-nowrap" title={item?.name}>
                <NavLink to={`discover/singerDetail?id=${item?.id}`}>{item?.name}</NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </DeatailSingerWrapper>
  );
});
