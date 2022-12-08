import { memo, useCallback, useEffect, useRef } from "react";
import type { FC, ReactNode, ElementRef } from "react";
import {
  shallowEqual,
  useAppDispatch as useDispatch,
  useAppSelector as useSelector
} from "@/store/hook";

import classnames from "classnames";
import {
  getDjRadioCatelistAction,
  getDjRadioRecommendAction,
  changeCurrentIdAction
} from "../../store";

import { CategoryWrapper, CategoryContent, CategoryItemImage } from "./style";
import { Carousel } from "antd";

interface IProps {
  children?: ReactNode;
}

const QLRadioCategory: FC<IProps> = () => {
  const carouselRef = useRef<ElementRef<typeof Carousel>>(null);

  /** 请求redux的异步 */
  const dispatch = useDispatch();
  /** 发送请求 */
  useEffect(() => {
    dispatch(getDjRadioCatelistAction());
  }, [dispatch]);

  /** redux数据 */
  const { categories, currentId } = useSelector(
    (state) => ({
      categories: state.djradio.categories,
      currentId: state.djradio.currentId
    }),
    shallowEqual
  );

  const PAGE_SIZE = 16;
  const page = Math.ceil(categories?.length / PAGE_SIZE) || 1;

  const getSize = (index: number) => {
    return index * PAGE_SIZE > categories?.length ? index * PAGE_SIZE : categories?.length;
  };

  const handleRadioCategory = useCallback(
    (id: number) => {
      dispatch(changeCurrentIdAction(id));
      dispatch(getDjRadioRecommendAction(id));
    },
    [dispatch]
  );

  return (
    <CategoryWrapper>
      <div className="arrow arrow-left" onClick={() => carouselRef.current?.prev()} />
      <CategoryContent>
        <Carousel ref={carouselRef}>
          {Array(page)
            ?.fill(0)
            ?.map((_, index) => {
              return (
                <div key={index} className="category-page">
                  {categories?.slice(index * PAGE_SIZE, getSize(index + 1)).map((item) => {
                    return (
                      <div
                        key={item?.id}
                        className={classnames("category-item", {
                          active: currentId === item?.id
                        })}
                        onClick={() => handleRadioCategory(item?.id)}
                      >
                        <CategoryItemImage className="image" imgUrl={item?.picWebUrl} />
                        <span>{item?.name}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </Carousel>
      </CategoryContent>
      <div className="arrow arrow-right" onClick={() => carouselRef.current?.next()} />
    </CategoryWrapper>
  );
};

export default memo(QLRadioCategory);
