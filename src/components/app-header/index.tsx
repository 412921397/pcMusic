import { memo } from "react";
import { NavLink } from "react-router-dom";

import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { headerLinks } from "@/common/local-data";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function QLHeader() {
  // 页面代码
  const showSelectItem = (item: any, index = 0) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon" />
        </NavLink>
      );
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="sprite_01 logo">
            网易云音乐
          </a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className={"select-item"}>
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>
          <Input
            size="large"
            className="search"
            placeholder="音乐/视频/电台/用户"
            prefix={<SearchOutlined />}
          />
          <div className="center">创作者中心</div>
          <div className="login">登录</div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
