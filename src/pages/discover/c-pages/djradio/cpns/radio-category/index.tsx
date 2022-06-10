import React, { memo, useCallback, useEffect, useRef } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import classnames from "classnames";
import {
  getDjRadioCatelistAction,
  getDjRadioRecommendAction,
  changeCurrentIdActio
} from "../../store/actionCreators";

import { CategoryWrapper, CategoryContent, CategoryItemImage } from "./style";
import { Carousel } from "antd";

export default memo(function QLRadioCategory() {
  const carouselRef: any = useRef();
  /** 请求redux的异步 */
  const dispatch = useDispatch();
  /** 发送请求 */
  useEffect(() => {
    dispatch(getDjRadioCatelistAction() as any);
  }, [dispatch]);

  /** redux数据 */
  const { categories, currentId } = useSelector(
    (state: any) => ({
      categories: state.getIn(["djradio", "categories"]),
      currentId: state.getIn(["djradio", "currentId"])
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
      dispatch(changeCurrentIdActio(id));
      dispatch(getDjRadioRecommendAction(id) as any);
    },
    [dispatch]
  );

  return (
    <CategoryWrapper>
      <div className="arrow arrow-left" onClick={(e) => carouselRef.current.prev()} />
      <CategoryContent>
        <Carousel ref={carouselRef}>
          {Array(page)
            .fill(0)
            .map((_: any, index: number) => {
              return (
                <div key={index} className="category-page">
                  {categories.slice(index * PAGE_SIZE, getSize(index + 1)).map((item: any) => {
                    return (
                      <div
                        key={item?.id}
                        className={classnames("category-item", {
                          active: currentId === item?.id
                        })}
                        onClick={(e) => handleRadioCategory(item?.id)}
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
      <div className="arrow arrow-right" onClick={(e) => carouselRef.current.next()} />
    </CategoryWrapper>
  );
});
