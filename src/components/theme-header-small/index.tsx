import { memo } from "react";
import { NavLink } from "react-router-dom";

import { HeaderWrapper } from "./style";

interface QLThemeHeaderSmallProps {
  title: string;
  more?: string;
  link?: string;
}

export default memo(function QLThemeHeaderSmall(props: QLThemeHeaderSmallProps) {
  const { title, more, link = "" } = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <NavLink to={link}>{more}</NavLink>
    </HeaderWrapper>
  );
});
