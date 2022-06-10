import React, { memo, useState, useCallback } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { changeCurrentCategoryAction, getSongCategoryListAction } from "../../store/actionCreators";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import QLSongsCateGory from "../songs-category";

export default memo(function QLSongsHeader() {
  /** 选框默认状态 */
  const [showCategory, setShowCategory] = useState(false);
  /** 默认选中的分类 */
  const [activeCount, setActiveCount] = useState("");
  /** 请求异步hook */
  const dispatch = useDispatch();

  /** 获取标题 */
  const { currentCategory } = useSelector(
    (state: any) => ({
      currentCategory: state.getIn(["songs", "currentCategory"])
    }),
    shallowEqual
  );

  /** 选择分类 */
  const selectCategory = useCallback(
    (name: string) => {
      setActiveCount(name);
      setShowCategory(false);
      dispatch(changeCurrentCategoryAction(name));
      dispatch(getSongCategoryListAction(0) as any);
    },
    [dispatch]
  );

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button className="select" onClick={(e) => setShowCategory(!showCategory)}>
          <span>选择分类</span>
          <i className="sprite_icon2" />
        </button>
        {showCategory ? (
          <QLSongsCateGory selectCategory={selectCategory} activeCount={activeCount} />
        ) : null}
      </HeaderLeft>
      <HeaderRight>
        <button className="hot">热门</button>
      </HeaderRight>
    </HeaderWrapper>
  );
});
