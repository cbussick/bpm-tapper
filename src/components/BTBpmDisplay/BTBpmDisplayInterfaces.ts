import { AnimationControls } from "framer-motion";
import { RefObject } from "react";

export interface BTBpmDisplayProps {
  showMilliseconds: boolean;
  playAudio: boolean;
}
export interface BTBpmDisplayViewModelProps {
  animationControls: AnimationControls;
  rawBpmFontSize: string;
  showMilliseconds: boolean;
  playAudio: boolean;
}

export interface BTBpmDisplayViewModel {
  isCalculating: boolean;
  copyBpmToClipboard: () => void;
  bpm: number;
  resetBpm: () => void;
  audioTapRef: RefObject<HTMLAudioElement>;
  keyDownHandler: () => void;
}
