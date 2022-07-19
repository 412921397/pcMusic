import { memo } from "react";
import { shallowEqual, useAppSelector as useSelector } from "@/store/hook";

import { SingetListWrapper } from "./style";

import { formatMinuteSecond } from "@/utils/format-utils";

export default memo(function QLSingerList() {
  const songs = useSelector((state) => state.singer.songs, shallowEqual);

  return (
    <SingetListWrapper>
      <table>
        <tbody>
          {songs?.map((item: any, index: number) => {
            return (
              <tr key={item?.id}>
                <td>
                  <div className="rank-num">
                    <span className="num">{index + 1}</span>
                    <span className="new sprite_icon2"></span>
                  </div>
                </td>
                <td>
                  <div className="song-name">
                    <span className="name">{item?.name}</span>
                  </div>
                </td>
                <td>{formatMinuteSecond(item?.dt)}</td>
                <td className="text-nowrap">
                  <span className="last">{item?.al?.name}</span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </SingetListWrapper>
  );
});
