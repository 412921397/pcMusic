import React, { memo, useEffect } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { getSizeImage } from "@/utils/format-utils";

import { getArtistListAction } from "../../store/actionCreators";
import { SetterSongerWrapper } from "./style";
import QLThemeHeaderSmall from "@/components/theme-header-small";

export default memo(function QLSettleSinger() {
  const dispatch = useDispatch();
  /** 请求歌手数据 */
  useEffect(() => {
    dispatch(getArtistListAction() as any);
  }, [dispatch]);

  const { settleSings } = useSelector(
    (state: any) => ({
      settleSings: state.getIn(["recommend", "settleSings"])
    }),
    shallowEqual
  );

  return (
    <SetterSongerWrapper>
      <QLThemeHeaderSmall title="入驻歌手" more="查看更多>" link="/discover/artist" />
      <div className="singer-list">
        {settleSings.slice(0, 5).map((item: any) => {
          return (
            <div key={item.id}>
              <a href="/#" key={item.id} className="item">
                <img src={getSizeImage(item?.picUrl, 62)} alt={item?.name} />
                <div className="info">
                  <div className="title">{item?.alias?.join("") || item?.name}</div>
                  <div className="name">{item?.name}</div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
      <div className="apply-for">
        <a href="https://music.163.com/st/musician" rel="noreferrer noopener" target="_blank">
          申请成为网易音乐人
        </a>
      </div>
    </SetterSongerWrapper>
  );
});
