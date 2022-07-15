import { memo } from "react";
import { shallowEqual, useAppSelector as useSelector } from "@/store/hook";

import classNames from "classnames";

import { CategoryWrapper } from "./style";

interface QLSongsCategoryProps {
  selectCategory: (key: string) => void;
  activeCount: string;
}

export default memo(function QLSongsCategory(props: QLSongsCategoryProps) {
  const { selectCategory, activeCount } = props;

  /** 获取分类 */
  const { category } = useSelector(
    (state) => ({
      category: state.songs.category
    }),
    shallowEqual
  );

  return (
    <CategoryWrapper>
      <div className="arrow sprite_icon" />
      <div className="all">
        <a className="link" onClick={() => selectCategory("全部")}>
          全部风格
        </a>
      </div>
      <div className="category">
        {category?.map((item, index) => {
          return (
            <dl key={item?.name} className={"item" + index}>
              <dt>
                <i className={classNames("icon sprite_icon2")}></i>
                <span>{item?.name}</span>
              </dt>
              <dd>
                {item.subs.map((iten: any) => {
                  return (
                    <div className="item" key={iten?.name}>
                      <span
                        className={classNames("link", {
                          active: iten?.name === activeCount
                        })}
                        onClick={() => selectCategory(iten?.name)}
                      >
                        {iten?.name}
                      </span>
                      {iten !== item?.subs[item?.subs?.length - 1] && (
                        <span className="divider">|</span>
                      )}
                    </div>
                  );
                })}
              </dd>
            </dl>
          );
        })}
      </div>
    </CategoryWrapper>
  );
});
