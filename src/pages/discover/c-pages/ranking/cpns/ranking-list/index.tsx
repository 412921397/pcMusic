import React, { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import usePlayMusic from "@/hooks/usePlayMusic";
import { getSizeImage, formatMinuteSecond } from "@/utils/format-utils";

import { RankingListWrapper } from "./style";
import QLThemeHEaderSong from "@/components/theme-header-song";

export default memo(function QLTankingList() {
  /** 播放音乐 */
  const [playMusic] = usePlayMusic();

  const { playList } = useSelector(
    (state: any) => ({
      playList: state.getIn(["ranking", "playList"])
    }),
    shallowEqual
  );

  const tracks = playList?.tracks || [];

  return (
    <RankingListWrapper>
      <QLThemeHEaderSong />
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {tracks.map((item: any, index: number) => {
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
                      {index < 3 ? (
                        <img src={getSizeImage(item?.al?.picUrl, 50)} alt={item?.name} />
                      ) : null}
                      <span className="play sprite_table" onClick={(e) => playMusic(item?.id)} />
                      <span className="name">{item?.name}</span>
                    </div>
                  </td>
                  <td>{formatMinuteSecond(item?.dt)}</td>
                  <td>{item?.ar[0]?.name}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  );
});
