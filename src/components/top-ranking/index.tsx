import { memo } from "react";

import usePlayMusic from "@/hooks/usePlayMusic";
import { getSizeImage } from "@/utils/format-utils";

import { TopRankingWrapper } from "./style";

interface topRankingProps {
  info?: any;
}

export default memo(function QLTopRanking(props: topRankingProps) {
  const { info } = props;

  /** 播放音乐 */
  const [playMusic] = usePlayMusic();

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info?.coverImgUrl, 80)} alt="网易云音乐" />
          <a href="/todo" className="image_cover">
            网易云音乐
          </a>
        </div>
        <div className="info">
          <a href="/todo">{info?.name}</a>
          <div>
            <div className="btn play sprite_02"></div>
            <div className="btn favor sprite_02"></div>
          </div>
        </div>
      </div>
      <div className="list">
        {info?.tracks?.slice(0, 10).map((item: any, index: number) => {
          return (
            <div key={item.id} className="list-item">
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <button className="btn sprite_02 play" onClick={(e) => playMusic(item?.id)}>
                    &gt;
                  </button>
                  <button className="btn sprite_icon2 addto">.</button>
                  <button className="btn sprite_02 favor">.</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <a href="/todo">查看全部 &gt;</a>
      </div>
    </TopRankingWrapper>
  );
});
