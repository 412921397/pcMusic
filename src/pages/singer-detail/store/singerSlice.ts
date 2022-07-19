import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  artist: { [key: string]: any };
  identify: { [key: string]: any };
  artists: any[];
  songs: any[];
  hotAlbums: any[];
  mvs: any[];
}

const initialState: IInitialState = {
  artist: {},
  identify: {},
  artists: [],
  songs: [],
  hotAlbums: [],
  mvs: []
};

const singerSlice = createSlice({
  name: "singerSlice",
  initialState,
  reducers: {
    getArtistAction: (state, { payload }) => {
      state.artist = payload;
    },
    getIdentifyAction: (state, { payload }) => {
      state.identify = payload;
    },
    getArtistsAction: (state, { payload }) => {
      state.artists = payload;
    },
    getArtistSongsAction: (state, { payload }) => {
      state.songs = payload;
    },
    getArtistHotAlbumsAction: (state, { payload }) => {
      state.hotAlbums = payload;
    },
    getArtistMVSAction: (state, { payload }) => {
      state.mvs = payload;
    }
  }
});

export const {
  getArtistAction,
  getIdentifyAction,
  getArtistsAction,
  getArtistSongsAction,
  getArtistHotAlbumsAction,
  getArtistMVSAction
} = singerSlice.actions;

export default singerSlice.reducer;
