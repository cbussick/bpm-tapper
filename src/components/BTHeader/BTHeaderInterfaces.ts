import { Dispatch, SetStateAction } from "react";

export interface BTHeaderProps {
  showMilliseconds: boolean;
  setShowMilliseconds: Dispatch<SetStateAction<boolean>>;
  playAudio: boolean;
  setPlayAudio: Dispatch<SetStateAction<boolean>>;
}
