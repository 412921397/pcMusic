import { memo, useState, useCallback } from "react";
import { shallowEqual, useAppSelector as useSelector } from "@/store/hook";

import { SingerListWrapper } from "./style";
import { Tabs } from "antd";

import QLSingerList from "@/components/singer-detail-list";
import QLSingerArtist from "@/components/singer-detail-artist";
import QLSingerMV from "@/components/singer-detail-mv";

type IChangePanelMap = { [key: string]: any };

export default memo(function QLSingerDetailList() {
  /** state */
  const [panels, setPanels] = useState<JSX.Element>(<QLSingerList />);

  const artist = useSelector((state) => state.singer.artist, shallowEqual);

  const { TabPane } = Tabs;
  /** panel */
  const panelMap = [
    { name: "热门作品", key: "1" },
    { name: "所有专辑", key: "2" },
    { name: "相关MV", key: "3" },
    { name: "艺人介绍", key: "4" }
  ];
  const singerInfo = <div>{artist?.briefDesc}</div>;

  const onChange = useCallback((key: string) => {
    const changePanel: IChangePanelMap = {
      "1": <QLSingerList />,
      "2": <QLSingerArtist />,
      "3": <QLSingerMV />,
      "4": singerInfo
    };
    return setPanels(changePanel[key]);
  }, []);

  return (
    <SingerListWrapper>
      <Tabs defaultActiveKey="1" onChange={onChange}>
        {panelMap.map((item) => {
          return (
            <TabPane tab={item.name} key={item.key}>
              {panels}
            </TabPane>
          );
        })}
      </Tabs>
    </SingerListWrapper>
  );
});
