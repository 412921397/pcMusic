import { memo } from "react";
import { shallowEqual, useAppSelector as useSelector } from "@/store/hook";

import { getSizeImage } from "@/utils/format-utils";

import { SingerMVWrapper } from "./style";
import { NavLink } from "react-router-dom";

export default memo(function QLSingerMV() {
  /** 获取mv */
  const mvs = useSelector((state) => state.singer.mvs, shallowEqual);

  return (
    <SingerMVWrapper>
      {mvs?.map((item) => {
        return (
          <div className="mvs-box" key={item?.id}>
            <NavLink to={`/discover/mv?id=${item?.id}`}>
              <img title={item?.name} src={getSizeImage(item?.imgurl, 137, 103)} alt={item?.name} />
            </NavLink>
            <NavLink to={`/discover/mv?id=${item?.id}`} className="text-nowrap" title={item?.name}>
              {item?.name}
            </NavLink>
          </div>
        );
      })}
    </SingerMVWrapper>
  );
});
