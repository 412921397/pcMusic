import React, { memo } from "react";
import { NavLink } from "react-router-dom";

import { HeaderWrapper } from "./style";

type themeProps = {
  title: string;
  keywords?: string[];
  link?: string;
};

const QLThemeHeaderRCM = memo((props: themeProps) => {
  const { title, keywords, link = "" } = props;

  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h2 className="title">{title}</h2>
        {keywords && (
          <div className="keyword">
            {keywords.map((item: any) => {
              return (
                <div className="item" key={item}>
                  <a href="todo">{item}</a>
                  {item !== keywords[keywords.length - 1] && <span className="divider">|</span>}
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="right">
        <NavLink to={link}>更多</NavLink>
        <i className="icon sprite_02" />
      </div>
    </HeaderWrapper>
  );
});

export default QLThemeHeaderRCM;
