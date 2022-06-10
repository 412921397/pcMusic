import { number } from "prop-types";
import qlRequest from "./index";

/** 电台 - 分类 */
export function getDjRadioCatelist() {
  return qlRequest.get({
    url: "/dj/catelist",
    showLoading: false
  });
}

/** 电台 - 分类推荐 */
export function getDjRadioRecommend(type: number) {
  return qlRequest.get({
    url: "/dj/recommend/type",
    params: {
      type
    },
    showLoading: false
  });
}

/** 电台 - 类别热门电台 */
export function getDjRadios(cateId: number, limit: number, offset: number = 30) {
  return qlRequest.get({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset
    }
  });
}
