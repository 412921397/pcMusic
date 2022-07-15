import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  category: any[];
  currentCategory: string;
  categorySongs: { [key: string]: any };
}

const initialState: IInitialState = {
  category: [], //全部歌单
  currentCategory: "全部",
  categorySongs: {}
};

const songsSlice = createSlice({
  name: "songs",
  initialState,
  reducers: {
    /** 当前选中的歌单名字 */
    changeCurrentCategoryAction: (state, { payload }) => {
      state.currentCategory = payload;
    },
    /** 歌单分类名字 */
    getSongCategoryActions: (state, { payload }) => {
      state.category = payload;
    },
    getSongCategoryLists: (state, { payload }) => {
      state.categorySongs = payload;
    }
  }
});

export const { changeCurrentCategoryAction, getSongCategoryActions, getSongCategoryLists } =
  songsSlice.actions;

export default songsSlice.reducer;
