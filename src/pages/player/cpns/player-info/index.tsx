import { memo, useState } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { InfoWrapper, InfoLeft, InfoRight } from "./style";
import QLSongOperationBar from "@/components/song-operation-bar";

import { getSizeImage } from "@/utils/format-utils";

export default memo(function QLPlayerInfo() {
  // state
  const [isSpread, setIsSperead] = useState(false);

  // redux数据
  const { currentSong, lyricList } = useSelector(
    (state: any) => ({
      currentSong: state.getIn(["player", "currentSong"]),
      lyricList: state.getIn(["player", "lyricList"])
    }),
    shallowEqual
  );

  // 其他逻辑
  const totalLyricCount = isSpread ? lyricList?.length : 13;

  return (
    <InfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src={getSizeImage(currentSong?.al?.picUrl, 130)} alt={currentSong?.name} />
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a href={`https://music.163.com/#/outchain/2/${currentSong?.id}/`}>生成外联播放器</a>
        </div>
      </InfoLeft>
      <InfoRight isSpread={isSpread}>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{currentSong?.name}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          <a href="/#" className="name">
            {currentSong?.ar[0]?.name}
            {currentSong?.ar[1] && `/${currentSong?.ar[1]?.name}`}
          </a>
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="/#" className="name">
            {currentSong?.al?.name}
          </a>
        </div>
        <QLSongOperationBar
          favorTitle="收藏"
          shareTitle="分享"
          downloadTitle="下载"
          commentTitle="(167366)"
          currentSongId={currentSong.id}
        />
        <div className="lyric">
          <div className="lyric-info">
            {lyricList.slice(0, totalLyricCount).map((item: any) => {
              return (
                <p key={item.time} className="text">
                  {item.content}
                </p>
              );
            })}
          </div>
        </div>
        <div className="lyric-control" onClick={() => setIsSperead(!isSpread)}>
          <a className="lyric-btn">{isSpread ? "收起" : "展开"}</a>
          <i className="sprite_icon2" />
        </div>
      </InfoRight>
    </InfoWrapper>
  );
});
