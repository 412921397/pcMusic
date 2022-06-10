import React, { memo } from "react";

import { hotRadios } from "@/common/local-data";

import { HotRadioWrapper } from "./style";
import QLThemeHeaderSmall from "@/components/theme-header-small";

export default memo(function QLHotanchor() {
  return (
    <HotRadioWrapper>
      <QLThemeHeaderSmall title="热门主播" />
      <div className="radio-list">
        {hotRadios.map((item: any) => {
          return (
            <div className="item" key={item.picUrl}>
              <a href="" className="image">
                <img src={item.picUrl} alt={item.name} />
              </a>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="position text-nowrap">{item.position}</div>
              </div>
            </div>
          );
        })}
      </div>
    </HotRadioWrapper>
  );
});
