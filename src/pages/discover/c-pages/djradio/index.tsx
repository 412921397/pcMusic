import { memo } from "react";

import { DjRadioWrapper } from "./style";
import QLRadioCategory from "./cpns/radio-category";
import QLRadioRecommend from "./cpns/radio-recommend";
import QLRadioRanking from "./cpns/radio-ranking";

export default memo(function QLADjradio() {
  return (
    <DjRadioWrapper className="wrap-v2">
      <QLRadioCategory />
      <QLRadioRecommend />
      <QLRadioRanking />
    </DjRadioWrapper>
  );
});
