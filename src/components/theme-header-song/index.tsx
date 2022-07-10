import { memo } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { HeaderWrapper } from "./style";

interface QLSongsDetail {
  songsInfo?: { id: number; songsLength: number; playCount: number };
}

export default memo(function QLThemeHEaderSong(props: QLSongsDetail) {
  const { songsInfo } = props;

  const { playList } = useSelector(
    (state: any) => ({
      playList: state.getIn(["ranking", "playList"])
    }),
    shallowEqual
  );

  const link = (
    <div className="link">
      <i className="sprite_icon2" />
      <a href={`https://music.163.com/#/outchain/3/${songsInfo?.id}`}>生成外链播放器</a>
    </div>
  );

  return (
    <HeaderWrapper>
      <div className="left">
        <h3 className="title">歌曲列表</h3>
        <div className="count">{playList?.trackCount || songsInfo?.songsLength}首歌</div>
      </div>
      <div className="right">
        {songsInfo && link}
        <span>播放：</span>
        <span className="count">{playList?.playCount || songsInfo?.playCount}</span>
        <span>次</span>
      </div>
    </HeaderWrapper>
  );
});
