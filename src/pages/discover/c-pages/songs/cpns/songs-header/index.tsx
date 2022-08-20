import { memo, useState, useCallback, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  shallowEqual,
  useAppDispatch as useDispatch,
  useAppSelector as useSelector
} from "@/store/hook";

import { getSongCategoryListAction, changeCurrentCategoryAction } from "../../store";

import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";
import QLSongsCateGory from "../songs-category";

export default memo(function QLSongsHeader() {
  /** 获取路由的参数 */
  const [params] = useSearchParams();
  /** 选框默认状态 */
  const [showCategory, setShowCategory] = useState(false);
  /** 默认选中的分类 */
  const [activeCount, setActiveCount] = useState("");
  /** 请求异步hook */
  const dispatch = useDispatch();

  /** 获取标题 */
  const { currentCategory } = useSelector(
    (state) => ({
      currentCategory: state.songs.currentCategory
    }),
    shallowEqual
  );

  /** 获取跳转后的参数 */
  useEffect(() => {
    const navgateName = params && params.getAll("name");
    selectCategory(navgateName[0]);
  }, [params]);

  /** 选择分类 */
  const selectCategory = useCallback(
    (name: string) => {
      setActiveCount(name);
      setShowCategory(false);
      dispatch(changeCurrentCategoryAction(name));
      dispatch(getSongCategoryListAction(0));
    },
    [activeCount, showCategory, dispatch]
  );

  return (
    <HeaderWrapper>
      <HeaderLeft>
        <span className="title">{currentCategory}</span>
        <button className="select" onClick={() => setShowCategory(!showCategory)}>
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
