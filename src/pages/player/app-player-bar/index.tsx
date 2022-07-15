import { memo, useState, useRef, useCallback, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  useAppDispatch as useDispatch,
  useAppSelector as useSelector,
  shallowEqual
} from "@/store/hook";

import { changeCurrentIndexAndSongAction } from "../store/actionCreators";
import { changeSequenceAction, changeCurrentLyricIndexAction } from "../store/playerSlice";
import { getPlaySong, getSizeImage, formatMinuteSecond } from "@/utils/format-utils";

import { Slider, message } from "antd";
import { PlaybarWrapper, Control, PlayInfo, Operator } from "./style";
import QLAppPlayerPanel from "../app-player-panel";

export default memo(function QLPlayerBar() {
  // props and state
  /** 当前播放的时长 */
  const [currentTime, setCurrentTime] = useState(0);
  /** 当前歌曲播放的进度 */
  const [progress, setProgress] = useState(0);
  /** 修改进度条状态 */
  const [isChanging, setIsChanging] = useState(false);
  /** 播放的状态 */
  const [isPlaying, setIsPlaying] = useState(false);
  /** 显示歌词面板 */
  const [showPanel, setShowPanel] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  // redux hook
  /** 获取播放的歌曲信息 */
  const { currentSong, sequence, lyricList, currentLyricIndex, playLists } = useSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      sequence: state.player.sequence,
      lyricList: state.player.lyricList,
      currentLyricIndex: state.player.currentLyricIndex,
      playLists: state.player.playLists
    }),
    shallowEqual
  );

  // other hooks
  const dispatch = useDispatch();

  /** 播放歌曲 */
  useEffect(() => {
    /** 播放歌曲的地址 */
    if (audioRef.current) audioRef.current.src = getPlaySong(+currentSong?.id);
    /** 点击播放并修改状态 */
    if (audioRef.current)
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(() => {
          setIsPlaying(false);
        });
  }, [currentSong]);

  // 当前组件逻辑
  /** 歌手 */
  const secSinger =
    currentSong?.ar && `/${currentSong?.ar[1]?.name}` !== "/undefined"
      ? currentSong?.ar && `/${currentSong?.ar[1]?.name}`
      : "";
  const singerName = (currentSong?.ar && currentSong?.ar[0]?.name + secSinger) ?? "";
  /** 总时长 */
  const duration = currentSong?.dt ?? 0;
  /** 歌曲总时长 */
  const showDuration = formatMinuteSecond(currentSong?.dt);
  /** 当前歌曲播放的时长 */
  const showCurrentTime = formatMinuteSecond(currentTime);

  /** 当前进度条的播放时长 */
  const timeUpdate = (e: any) => {
    const currentTime = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(currentTime * 1000);
      setProgress(((currentTime * 1000) / duration) * 100);
    }

    // 获取当前的歌词
    let i = 0;
    for (; i < lyricList.length; i++) {
      const lyricItem = lyricList[i];
      if (currentTime * 1000 < lyricItem.time) break;
    }

    if (currentLyricIndex !== i - 1) {
      dispatch(changeCurrentLyricIndexAction(i - 1));
      const content = lyricList[i - 1] && lyricList[i - 1].content;
      if (showCurrentTime > "00:00") {
        message.open({
          key: "lyric",
          content: content,
          duration: 0,
          className: "lyric-class"
        });
      }
    }
  };

  /** 歌曲播放结束 */
  const handleMusicEnded = () => {
    if (sequence === 2) {
      // 单曲循环
      if (audioRef.current) audioRef.current.currentTime = 0;
      if (audioRef.current) audioRef.current.play();
    } else {
      dispatch(changeCurrentIndexAndSongAction(1));
    }
  };

  /** 上一曲或下一曲 */
  const changeMusic = (num: number) => {
    dispatch(changeCurrentIndexAndSongAction(num));
  };

  /** 播放模式 */
  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) currentSequence = 0;
    dispatch(changeSequenceAction(currentSequence));
  };

  /** 播放或暂停歌曲 */
  const playMusic = useCallback(() => {
    isPlaying
      ? audioRef.current && audioRef.current.pause()
      : audioRef.current && audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  /** 修改歌曲进度 */
  const sliderChange = useCallback(
    (value: number) => {
      setIsChanging(true);
      const currentTime = (value / 100) * duration;
      setCurrentTime(currentTime);
      setProgress(value);
    },
    [duration]
  );

  const sliderAfterChange = useCallback(
    (value: number) => {
      /** 再次计算成毫秒 */
      const currentTime = ((value / 100) * duration) / 1000;
      if (audioRef.current) audioRef.current.currentTime = currentTime;
      setCurrentTime(currentTime * 1000);
      setIsChanging(false);
      if (!isPlaying) playMusic();
    },
    [isPlaying, duration, playMusic]
  );

  return (
    <PlaybarWrapper className="sprite_player">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <div className="sprite_player prev" onClick={() => changeMusic(-1)}></div>
          <div className="sprite_player play" onClick={() => playMusic()}></div>
          <div className="sprite_player next" onClick={() => changeMusic(1)}></div>
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to={"/discover/player"}>
              <img src={getSizeImage(currentSong?.al?.picUrl, 35)} alt="123" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong?.name}</span>
              <a href="#/" className="singer-name">
                {singerName}
              </a>
            </div>
            <div className="progress">
              <Slider value={progress} onChange={sliderChange} onAfterChange={sliderAfterChange} />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="duration">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence}>
          <div className="left">
            <button className="sprite_player btn favor">.</button>
            <button className="sprite_player btn share">.</button>
          </div>
          <div className="right sprite_player">
            <button className="sprite_player btn volume">.</button>
            <button className="sprite_player btn loop" onClick={() => changeSequence()}>
              .
            </button>
            <button className="sprite_player btn playlist" onClick={() => setShowPanel(!showPanel)}>
              {playLists?.length}
            </button>
          </div>
        </Operator>
        <audio
          ref={audioRef}
          onTimeUpdate={(e) => timeUpdate(e)}
          onEnded={() => handleMusicEnded()}
        />
      </div>
      {showPanel && <QLAppPlayerPanel />}
    </PlaybarWrapper>
  );
});
