import { Dispatch, SetStateAction } from "react";

export interface BTHeaderProps {
  setShowMilliseconds: Dispatch<SetStateAction<boolean>>;
  playAudio: boolean;
  setPlayAudio: Dispatch<SetStateAction<boolean>>;
}
