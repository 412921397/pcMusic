import { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import classNames from "classnames";
import { changeCurrentArea, changeCurrentType } from "../../store/actionCreators";

import { artistCategories } from "@/common/local-data";
import { CategoryWrapper, CategoryItem } from "./style";

export default memo(function QLArtistCategory() {
  /** 获取redux异步 */
  const dispatch = useDispatch();
  /** 获取redux数据 */
  const { currentArea, currentType } = useSelector(
    (state: any) => ({
      currentArea: state.getIn(["artist", "currentArea"]),
      currentType: state.getIn(["artist", "currentType"])
    }),
    shallowEqual
  );

  const selectArtist = (area: number, item: any) => {
    dispatch(changeCurrentArea(area));
    dispatch(changeCurrentType(item));
  };

  /** 地区对应的歌手类型 */
  const renderArtist = (artists: any, area: number) => {
    return (
      <div>
        {artists.map((item: any) => {
          /** 选中的类型歌手 */
          const isSelect = currentArea === area && currentType.type === item.type;

          return (
            <CategoryItem key={item?.name} className={classNames({ active: isSelect })}>
              <span onClick={() => selectArtist(area, item)}>{item?.name}</span>
            </CategoryItem>
          );
        })}
      </div>
    );
  };

  return (
    <CategoryWrapper>
      {artistCategories.map((item: any) => {
        return (
          <div className="section" key={item?.area}>
            <h2 className="title">{item?.title}</h2>
            {renderArtist(item?.artists, item?.area)}
          </div>
        );
      })}
    </CategoryWrapper>
  );
});
