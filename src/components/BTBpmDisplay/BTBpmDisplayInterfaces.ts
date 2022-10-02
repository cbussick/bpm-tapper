import { AnimationControls } from "framer-motion";

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
  keyDownHandler: () => void;
}
