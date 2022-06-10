import React, { memo, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import { Provider } from "react-redux";

import store from "@/store";
import routes from "@/router";
import QLHeader from "@/components/app-header";
import QLFooter from "@/components/app-footer";
import QLPlayerBar from "@/pages/player/app-player-bar";

import { Spin, BackTop } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import useScrollPosition from "@/hooks/useScrollPosition";

const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

export default memo(function App() {
  const scrollTop = useScrollPosition();

  return (
    <>
      <Provider store={store}>
        <QLHeader />
        {/** react-router v6 新增hook：useRoutes可直接渲染路由  */}
        <Suspense
          fallback={
            <div className="wrap-v2">
              <Spin indicator={antIcon} />
            </div>
          }
        >
          {useRoutes(routes)}
        </Suspense>
        <QLFooter />
        <QLPlayerBar />
        {scrollTop > 299 && <BackTop className="backTop">回到顶部</BackTop>}
      </Provider>
    </>
  );
});
