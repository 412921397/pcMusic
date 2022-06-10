import React, { memo } from "react";

import { HeaderWrapper } from "./style";

interface QLThemeHeaderPlayerProps {
  title: string;
}

export default memo(function QLThemeHeaderPlayer(props: QLThemeHeaderPlayerProps) {
  const { title } = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
    </HeaderWrapper>
  );
});
