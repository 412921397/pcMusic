// import { legacy_createStore as createStore, applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

// import reducer from "./reducer";

// const composeEnhancers =
//   (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true }) || compose;

// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";

import { reducer as recommendReducer } from "@/pages/discover/c-pages/recommend/store";
import { reducer as rankingReducer } from "@/pages/discover/c-pages/ranking/store";
import { reducer as songsReducer } from "@/pages/discover/c-pages/songs/store";
import { reducer as djradioReducer } from "@/pages/discover/c-pages/djradio/store";
import { reducer as artistReducer } from "@/pages/discover/c-pages/artist/store";
import { reducer as albumReducer } from "@/pages/discover/c-pages/album/store";
import { reducer as playerReducer } from "@/pages/player/store";
import { reducer as coverReducer } from "@/pages/songs-detail/store";

const store = configureStore({
  reducer: {
    recommend: recommendReducer,
    ranking: rankingReducer,
    songs: songsReducer,
    djradio: djradioReducer,
    artist: artistReducer,
    album: albumReducer,
    player: playerReducer,
    songsCover: coverReducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production"
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
