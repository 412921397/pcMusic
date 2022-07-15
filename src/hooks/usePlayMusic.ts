import { useCallback } from "react";
import { useAppDispatch as useDispatch } from "@/store/hook";

import { getSongDetailAction } from "@/pages/player/store/actionCreators";

const usePlayMusic = () => {
  const dispatch = useDispatch();

  const playMusic = useCallback(
    (id: number) => {
      dispatch(getSongDetailAction(id));
    },
    [dispatch]
  );

  return [playMusic];
};

export default usePlayMusic;
