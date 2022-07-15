import { memo, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  shallowEqual,
  useAppDispatch as useDispatch,
  useAppSelector as useSelector
} from "@/store/hook";

import { getSubscribersAction } from "../../store/actionCreators";
import { getSizeImage } from "@/utils/format-utils";

import { DeatailSongsWrapper } from "./style";
import QLThemeHeaderPlayer from "@/components/theme-header-player";
import QLSongsDetailRelevant from "../songs-detail-relevant";

interface QLState {
  id: number;
}
export default memo(function QLSongsDetailSongs() {
  // 获取路由参数
  const { state } = useLocation();
  // 异步hook
  const dispatch = useDispatch();
  // 获取喜欢这个歌单的人
  useEffect(() => {
    dispatch(getSubscribersAction((state as QLState).id));
  }, [(state as QLState).id]);

  // 订阅歌单的用户
  const { subscribers } = useSelector(
    (state) => ({
      subscribers: state.songsCover.subscribers
    }),
    shallowEqual
  );

  return (
    <DeatailSongsWrapper>
      <QLThemeHeaderPlayer title="喜欢这个歌单的人" />
      <div className="songs">
        {subscribers?.slice(0, 8)?.map((item: any) => {
          return (
            <img
              className="img"
              key={item?.userId}
              src={getSizeImage(item?.avatarUrl, 40)}
              alt={item?.nickname}
            />
          );
        })}
      </div>
      <QLSongsDetailRelevant />
    </DeatailSongsWrapper>
  );
});
