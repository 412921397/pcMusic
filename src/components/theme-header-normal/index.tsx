import { memo } from "react";

import { HeaderWrapper } from "./style";

interface QLThemeHeaderNormalProps {
  title: string;
  rightSlot?: HTMLElement | any;
}

export default memo(function QLThemeHeaderNormal(props: QLThemeHeaderNormalProps) {
  const { title, rightSlot } = props;

  return (
    <HeaderWrapper>
      <div className="title">{title}</div>
      <div className="right">{rightSlot}</div>
    </HeaderWrapper>
  );
});
