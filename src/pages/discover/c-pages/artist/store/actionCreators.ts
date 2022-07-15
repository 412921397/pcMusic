import { AppThunk } from "@/store";
import { getArtistLists } from "./artistSlice";
import { getArtistList } from "@/service/artist";

/** 请求歌手列表 */
export const getArtistListAction = (area: number, type: number, alpha: string): AppThunk => {
  return (dispatch) => {
    getArtistList(area, type, alpha).then((res: any) => {
      dispatch(getArtistLists(res?.artists));
    });
  };
};
