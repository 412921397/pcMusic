import { memo, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  shallowEqual,
  useAppDispatch as useDispatch,
  useAppSelector as useSelector
} from "@/store/hook";

import dayjs from "dayjs";
import { coverPlayListAction } from "../../store";
import { getSizeImage } from "@/utils/format-utils";

import { InfoWrapper, InfoLeft, InfoRight } from "./style";
import QLSongOperationBar from "@/components/song-operation-bar";

interface QLState {
  id: number;
}

export default memo(function QLSongsDInfo() {
  // 获取路由参数
  const { state } = useLocation();
  // 请求异步
  const dispatch = useDispatch();

  // 请求歌单详情
  useEffect(() => {
    dispatch(coverPlayListAction((state as QLState).id));
  }, [(state as QLState).id]);

  // 获取歌单详情的数据
  const { coverPlayList } = useSelector(
    (state) => ({
      coverPlayList: state.songsCover.coverPlayList
    }),
    shallowEqual
  );

  return (
    <InfoWrapper>
      <InfoLeft>
        <div className="image">
          <img src={getSizeImage(coverPlayList?.coverImgUrl, 200)} alt={coverPlayList?.name} />
          <span className="cover songs-cover"></span>
        </div>
      </InfoLeft>
      <InfoRight>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{coverPlayList?.name}</h3>
        </div>
        <div className="singer">
          <img
            className="singer-avatar"
            src={getSizeImage(coverPlayList?.creator?.avatarUrl, 40)}
            alt={coverPlayList?.name}
          />
          <div>
            <a href="/#" className="name">
              {coverPlayList?.creator?.nickname}
            </a>
            <img
              className="singer-iconUrl"
              src={getSizeImage(coverPlayList?.creator?.avatarDetail?.identityIconUrl, 13)}
              alt={coverPlayList?.name}
            />
          </div>
          <span>{dayjs(coverPlayList?.createTime).format("YYYY-MM-DD")} 创建</span>
        </div>
        <QLSongOperationBar
          favorTitle="收藏"
          shareTitle="分享"
          downloadTitle="下载"
          commentTitle="(167366)"
          currentSongId={coverPlayList?.id}
        />
        <div className="dec">
          <div className="dec-info">
            <span>标签：</span>
            {coverPlayList?.tags?.map((item: any) => {
              return (
                <div className="tag" key={item}>
                  <NavLink to={`/discover/songs?name=${item}`}>{item}</NavLink>
                </div>
              );
            })}
          </div>

          <div className="dec-info">
            <div>介绍：{coverPlayList?.description}</div>
          </div>
        </div>
      </InfoRight>
    </InfoWrapper>
  );
});
