import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { getSongDetailAction } from "@/pages/player/store/actionCreators";

const usePlayMusic = () => {
  const dispatch = useDispatch();

  const playMusic = useCallback(
    (id: number) => {
      dispatch(getSongDetailAction(id) as any);
    },
    [dispatch]
  );

  return [playMusic];
};

export default usePlayMusic;
