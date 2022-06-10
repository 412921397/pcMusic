import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";

import { OperationBarWrapper } from "./style";

import { getSongDetailAction } from "@/pages/player/store/actionCreators";

interface QLSongOperationBarProps {
  favorTitle: string;
  shareTitle: string;
  downloadTitle: string;
  commentTitle: string;
  currentSongId?: number;
}

export default memo(function QLSongOperationBar(props: QLSongOperationBarProps) {
  const { favorTitle, shareTitle, downloadTitle, commentTitle, currentSongId = 0 } = props;

  const dispatch = useDispatch();

  const playMusic = useCallback(() => {
    dispatch(getSongDetailAction(currentSongId) as any);
  }, [dispatch]);

  return (
    <OperationBarWrapper>
      <span className="play">
        <a className="play-icon sprite_button" onClick={(e) => playMusic()}>
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </a>
        <a href="/abc" className="add-icon sprite_button">
          +
        </a>
      </span>
      <a href="/abc" className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </a>
      <a href="/abc" className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </a>
    </OperationBarWrapper>
  );
});
