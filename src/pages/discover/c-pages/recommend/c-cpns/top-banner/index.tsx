import { memo, useState, useEffect, useRef, useCallback } from "react";
import type { FC, ReactNode, ElementRef } from "react";
import {
  shallowEqual,
  useAppDispatch as useDispatch,
  useAppSelector as useSelector
} from "@/store/hook";
import { getTopBannerAction } from "../../store";

import { Carousel } from "antd";
import { BannerWrapper, BannerControl, BannerLeft, BannerRight } from "./style";

interface IProps {
  children?: ReactNode;
}

const QLTopBanner: FC<IProps> = () => {
  /** 当前组件的state */
  const [current, setCurrent] = useState(0);

  // 组件和redux关联: 获取数据和进行操作
  /***
   *  useSelector可传入两个参数
   *  第一个参数是一个回调函数：默认参数是state
   *  第二参数shallowEqual是react做的内部浅层比较的hook
   */
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.recommend.topBanners
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  /** 其他hooks */
  const bannerRef = useRef<ElementRef<typeof Carousel>>(null);
  useEffect(() => {
    dispatch(getTopBannerAction());
  }, [dispatch]);

  /** 只有当轮播发生切换的时候才会渲染更新 */
  const bannerChange = useCallback(
    (from: number, to: number) => {
      setCurrent(to);
    },
    [current]
  );

  // 其他业务逻辑
  const bgImage = topBanners[current] && `${topBanners[current].imageUrl}?imageView&blur=40x20`;

  return (
    <div>
      <BannerWrapper bgImage={bgImage}>
        <div className="banner wrap-v2">
          <BannerLeft>
            <Carousel autoplay effect="fade" ref={bannerRef} beforeChange={bannerChange}>
              {topBanners?.map((item: any) => {
                return (
                  <div className="banner-item" key={item.encodeId}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </div>
                );
              })}
            </Carousel>
          </BannerLeft>
          <BannerRight></BannerRight>
          <BannerControl>
            <div className="btn left" onClick={() => bannerRef.current?.prev()} />
            <div className="btn right" onClick={() => bannerRef.current?.next()} />
          </BannerControl>
        </div>
      </BannerWrapper>
    </div>
  );
};

export default memo(QLTopBanner);
