/* eslint-disable react-hooks/exhaustive-deps */
import { useToast } from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import tapSound from "../../resources/sounds/tap-sound.wav";
import {
  BTBpmDisplayViewModel,
  BTBpmDisplayViewModelProps,
} from "./BTBpmDisplayInterfaces";

let lastTapTime: number;
let lastTapTimeDifferences: number[] = [];

export const useBTBpmDisplayViewModel = (
  props: BTBpmDisplayViewModelProps
): BTBpmDisplayViewModel => {
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

  const tapAudio = new Audio(tapSound);

  const playTapSound = () => {
    if (tapAudio.paused) {
      tapAudio.play().catch(() => {});
    } else {
      tapAudio.currentTime = 0;
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

    // BPM Value without unit
    const rawFontSizeKeyframeValue = props.rawBpmFontSize.substring(
      0,
      props.rawBpmFontSize.indexOf("rem")
    );

    // Put `+` in front of the variable to get addition instead of string concatenation
    const rawAdjustedFontSizeKeyframeValue =
      +rawFontSizeKeyframeValue + parseInt(rawFontSizeKeyframeValue, 10) * 0.05;

    const fontSizeKeyframeValueWithUnit = `${rawAdjustedFontSizeKeyframeValue}rem`;

    props.animationControls
      .start({
        fontSize: [
          props.rawBpmFontSize,
          fontSizeKeyframeValueWithUnit,
          props.rawBpmFontSize,
        ],
        transition: { duration: 0.3 },
      })
      .catch(() => {});
  }, [
    isCalculating,
    props.animationControls,
    props.playAudio,
    props.rawBpmFontSize,
  ]);

  const copyBpmToClipboard = () => {
    const integers = Math.floor(bpm);
    const bpmPreparedForDecimals = Math.round(bpm * 10000);
    const amountIntegerDigits = integers.toString().length;
    const decimalPlaces = bpmPreparedForDecimals
      .toString()
      .slice(amountIntegerDigits);

    const bpmInMSFormat = `${integers}.${decimalPlaces}`;

    const copiedValue = props.showMilliseconds
      ? bpmInMSFormat
      : Math.round(bpm).toString();

    navigator.clipboard
      .writeText(copiedValue)
      .then(() => {
        toast({
          title: "BPM Copied!",
          description: "The BPM were copied to your clipboard.",
          status: "info",
          duration: 9000,
          isClosable: true,
        });
      })
      .catch(() => {
        toast({
          title: "Something went wrong.",
          description: "The BPM could not be copied to your clipboard.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
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
    keyDownHandler,
  };
};
