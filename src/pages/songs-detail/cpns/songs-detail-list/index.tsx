import { memo } from "react";
import { shallowEqual, useAppSelector as useSelector } from "@/store/hook";

import { formatMinuteSecond } from "@/utils/format-utils";

import { SongsListWrapper } from "./style";
import QLThemeHEaderSong from "@/components/theme-header-song";

export default memo(function QLSongsDetailList() {
  const { coverPlayList } = useSelector(
    (state) => ({
      coverPlayList: state.songsCover.coverPlayList
    }),
    shallowEqual
  );

  const songsInfo = {
    id: coverPlayList?.id,
    songsLength: coverPlayList?.tracks?.length,
    playCount: coverPlayList?.playCount
  };

  return (
    <SongsListWrapper>
      <QLThemeHEaderSong songsInfo={songsInfo} />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">歌曲标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
              <th className="album">专辑</th>
            </tr>
          </thead>
          <tbody>
            {coverPlayList?.tracks?.map((item: any, index: number) => {
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
                      {/* <span className="play sprite_table" onClick={() => playMusic(item?.id)} /> */}
                      <span className="name">{item?.name}</span>
                    </div>
                  </td>
                  <td>{formatMinuteSecond(item?.dt)}</td>
                  <td className="text-nowrap">{item?.ar[0]?.name}</td>
                  <td className="text-nowrap">{item?.al?.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </SongsListWrapper>
  );
});
