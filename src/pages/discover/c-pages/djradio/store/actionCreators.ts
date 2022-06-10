import { Dispatch } from "redux";
import * as actionTypes from "./constants";

import { getDjRadioCatelist, getDjRadioRecommend, getDjRadios } from "@/service/djradio";

const changeCategory = (res: any) => ({
  type: actionTypes.CHANGE_RADIO_CATEGORY,
  categories: res.categories
});

export const changeCurrentIdActio = (id: number) => ({
  type: actionTypes.CHANGE_CURRENT_ID,
  currentId: id
});

/** 获取第一个节目 */
export const getDjRadioCatelistAction = () => {
  return (dispatch: Dispatch) => {
    getDjRadioCatelist().then((res: any) => {
      dispatch(changeCategory(res));
      const currentId = res?.categories[0]?.id;
      dispatch(changeCurrentIdActio(currentId));
    });
  };
};

/** 优秀新电台 */
export const getDjRadioRecommendAction = (currentId: number) => {
  return (dispatch: Dispatch) => {
    getDjRadioRecommend(currentId).then((res: any) => {
      dispatch({
        type: actionTypes.CHANGE_RECOMMENDS,
        recommends: res?.djRadios
      });
    });
  };
};

/** 电台排行榜 */
export const getDjRadiosAction = (cateId: number, offset?: number) => {
  return (dispatch: Dispatch) => {
    getDjRadios(cateId, 30, offset).then((res: any) => {
      dispatch({
        type: actionTypes.CHANGE_RADIOS,
        radios: res?.djRadios
      });
    });
  };
};
