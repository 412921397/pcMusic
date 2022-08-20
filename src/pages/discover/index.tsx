import { memo } from "react";
import { NavLink, Outlet } from "react-router-dom";

import { dicoverMenu } from "@/common/local-data";
import { DiscoverWrapper, TopMenu } from "./style";

export default memo(function Discover() {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {/** 渲染子路由需要 调用占位标签：Outlet */}
      <Outlet />
    </DiscoverWrapper>
  );
});
