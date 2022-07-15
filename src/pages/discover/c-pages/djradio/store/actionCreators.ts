import { AppThunk } from "@/store";
import {
  changeCategory,
  changeCurrentIdAction,
  getDjRadioRecommends,
  getDjRadio
} from "./djradioSlice";

import { getDjRadioCatelist, getDjRadioRecommend, getDjRadios } from "@/service/djradio";

/** 获取第一个节目 */
export const getDjRadioCatelistAction = (): AppThunk => {
  return (dispatch) => {
    getDjRadioCatelist().then((res) => {
      dispatch(changeCategory(res.categories));
      const currentId = res?.categories[0]?.id;
      dispatch(changeCurrentIdAction(currentId));
    });
  };
};

/** 优秀新电台 */
export const getDjRadioRecommendAction = (currentId: number): AppThunk => {
  return (dispatch) => {
    getDjRadioRecommend(currentId).then((res: any) => {
      dispatch(getDjRadioRecommends(res?.djRadios));
    });
  };
};

/** 电台排行榜 */
export const getDjRadiosAction = (cateId: number, offset?: number): AppThunk => {
  return (dispatch) => {
    getDjRadios(cateId, 30, offset).then((res: any) => {
      dispatch(getDjRadio(res?.djRadios));
    });
  };
};
