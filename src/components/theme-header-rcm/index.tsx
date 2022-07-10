import { memo } from "react";
import { NavLink } from "react-router-dom";

import { HeaderWrapper } from "./style";

interface QLThemeProps {
  title: string;
  keywords?: string[];
  link?: string;
}

const QLThemeHeaderRCM = memo((props: QLThemeProps) => {
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
                  <NavLink to={`/discover/songs?name=${item}`}>{item}</NavLink>
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
