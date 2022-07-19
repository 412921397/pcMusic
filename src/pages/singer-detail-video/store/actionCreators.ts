import { AppThunk } from "@/store";

import { getMVSAction, getMVDetailAction, getAllvideoAction } from "./videoSlice";

import { getMVURL, getVideoDetail, getRelatedAllvideo } from "@/service/video";

/** 获取mv地址 */
export const getMVURLAction = (id: number): AppThunk => {
  return (dispatch) => {
    getMVURL(id).then((res) => {
      dispatch(getMVSAction(res.data));
    });
  };
};

/** mv信息 */
export const getVideoDetailAction = (id: number): AppThunk => {
  return (dispatch) => {
    getVideoDetail(id).then((res) => {
      dispatch(getMVDetailAction(res.data));
    });
  };
};

/** 相关视频 */
export const getRelatedAllvideoAction = (id: number): AppThunk => {
  return (dispatch) => {
    getRelatedAllvideo(id).then((res) => {
      dispatch(getAllvideoAction(res.mvs));
    });
  };
};
