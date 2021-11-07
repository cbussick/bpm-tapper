import { RefObject } from "react";

export interface BTBpmDisplayProps {
  showMilliseconds: boolean;
  playAudio: boolean;
}
export interface BTBpmDisplayViewModelProps {
  showMilliseconds: boolean;
  playAudio: boolean;
}

export interface BTBpmDisplayViewModel {
  isCalculating: boolean;
  copyBpmToClipboard: () => void;
  bpm: number;
  resetBpm: () => void;
  audioTapRef: RefObject<HTMLAudioElement>;
}
