import { lazy } from "react";
import { RouteObject, Navigate } from "react-router-dom";

const QLDiscover = lazy(() => import("@/pages/discover"));
const QLAlbum = lazy(() => import("@/pages/discover/c-pages/album"));
const QLArtist = lazy(() => import("@/pages/discover/c-pages/artist"));
const QLDjradio = lazy(() => import("@/pages/discover/c-pages/djradio"));
const QLRanking = lazy(() => import("@/pages/discover/c-pages/ranking"));
const QLRecommend = lazy(() => import("@/pages/discover/c-pages/recommend"));
const QLSongs = lazy(() => import("@/pages/discover/c-pages/songs"));

const QlFriends = lazy(() => import("@/pages/friends"));
const QLMine = lazy(() => import("@/pages/mine"));
const QLPlayer = lazy(() => import("@/pages/player"));
const QLSongsDetail = lazy(() => import("@/pages/songs-detail"));

const routes: RouteObject[] = [
  {
    /**
     * v6版本的router component全部更名为 element
     * Redirect更名为 Navigate
     */
    path: "/",
    element: <Navigate to="/discover" />
  },
  {
    path: "/discover",
    element: <QLDiscover />,
    children: [
      {
        path: "/discover",
        element: <Navigate to="/discover/recommend" />
      },
      {
        path: "/discover/recommend",
        element: <QLRecommend />
      },
      {
        path: "/discover/ranking",
        element: <QLRanking />
      },
      {
        path: "/discover/songs",
        element: <QLSongs />
      },
      {
        path: "/discover/djradio",
        element: <QLDjradio />
      },
      {
        path: "/discover/artist",
        element: <QLArtist />
      },
      {
        path: "/discover/album",
        element: <QLAlbum />
      },
      {
        path: "/discover/player",
        element: <QLPlayer />
      },
      {
        path: "/discover/songsDetail",
        element: <QLSongsDetail />
      }
    ]
  },
  {
    path: "/mine",
    element: <QLMine />
  },
  {
    path: "/friends",
    element: <QlFriends />
  }
];

export default routes;
