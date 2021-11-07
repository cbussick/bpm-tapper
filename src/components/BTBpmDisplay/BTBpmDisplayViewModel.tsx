import { useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
  BTBpmDisplayViewModel,
  BTBpmDisplayViewModelProps,
} from "./BTBpmDisplayInterfaces";

let lastTapTime: number;
let lastTapTimeDifferences: number[] = [];

export const useBTBpmDisplayViewModel = (
  props: BTBpmDisplayViewModelProps
): BTBpmDisplayViewModel => {
  const audioTapRef = useRef<HTMLAudioElement>(null);

  const [bpm, setBpm] = useState<number>(0);
  const [isCalculating, setCalculating] = useState<boolean>(false);

  const toast = useToast();

  const calculateBpm = () => {
    // General explanation (as I understand it):
    // If all taps had 1 second (= 1000ms) between them, then this would equal 60 BPM => This is our point of reference.
    // => So if all taps had 0.5 seconds time between them, then this would equal 120 BPM for example.
    // The formula when having the time difference is: 1000 / timeDifference * 60 BPM = tappedBPM

    // 1. Take the time between the last tap and this current tap
    const currentTapTime = new Date().getTime();
    const currentTapTimeDifference = currentTapTime - lastTapTime;

    // Do not calculate or set the bpm on the first tap (You need at least two taps to calculate the bpm).
    if (lastTapTime) {
      // 2. Store all previous time differences between taps, add them up and divide their sum by their amount to get the average time difference

      // 2.1 Store all previous time differences between taps
      // Handling arrays as lists in JS: https://alligator.io/js/push-pop-shift-unshift-array-methods/
      lastTapTimeDifferences.push(currentTapTimeDifference);

      // 2.2 Add up the time differences and divide the sum by the amount of stored time differences to get the average
      let averageTimeDifference = 0;
      lastTapTimeDifferences.forEach((timeDifference) => {
        averageTimeDifference += timeDifference;
      });
      averageTimeDifference /= lastTapTimeDifferences.length;

      // 3. Convert the time difference into the corresponding BPM
      const currentBPM = (1000 / averageTimeDifference) * 60;

      setBpm(currentBPM);
    }

    lastTapTime = currentTapTime;
  };

  const resetBpm = () => {
    lastTapTime = 0;
    lastTapTimeDifferences = [];
    setCalculating(false);
    setBpm(0);
  };

  const playTapSound = () => {
    if (audioTapRef.current) {
      if (audioTapRef.current?.paused) {
        audioTapRef.current.play().catch(() => {});
      } else {
        audioTapRef.current.currentTime = 0;
      }
    }
  };

  const keyDownHandler = useCallback(() => {
    if (!isCalculating) {
      setCalculating(true);
    }
    calculateBpm();

    if (props.playAudio) {
      playTapSound();
    }
  }, [isCalculating, props.playAudio]);

  const copyBpmToClipboard = () => {
    const tempInputElement = document.createElement("input");
    const integers = Math.floor(bpm);
    const bpmPreparedForDecimals = Math.round(bpm * 10000);
    const amountIntegerDigits = integers.toString().length;
    const decimalPlaces = bpmPreparedForDecimals
      .toString()
      .slice(amountIntegerDigits);

    const bpmInMSFormat = `${integers}.${decimalPlaces}`;
    tempInputElement.value = props.showMilliseconds
      ? bpmInMSFormat
      : Math.round(bpm).toString();

    document.body.appendChild(tempInputElement);
    tempInputElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempInputElement);

    toast({
      title: "BPM Copied!",
      description: "The BPM were copied to your clipboard.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  useEffect(() => {
    window.addEventListener("keydown", keyDownHandler);

    return () => {
      window.removeEventListener("keydown", keyDownHandler);
    };
  }, [keyDownHandler]);

  return {
    isCalculating,
    copyBpmToClipboard,
    bpm,
    resetBpm,
    audioTapRef,
  };
};
