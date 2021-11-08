import {
  Button,
  Collapse,
  Kbd,
  ScaleFade,
  Stat,
  StatHelpText,
  StatNumber,
  Text,
  Tooltip,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { getBpmInMillisecondFormat } from "../../helpers/getBpmInMillisecondFormat";
import { textGradient } from "../../helpers/getTextGradient";
import tapSound from "../../resources/sounds/tap-sound.wav";
import {
  BTBpmDisplayProps,
  BTBpmDisplayViewModel,
  BTBpmDisplayViewModelProps,
} from "./BTBpmDisplayInterfaces";
import { useBTBpmDisplayViewModel } from "./BTBpmDisplayViewModel";

function BTBpmDisplay(props: BTBpmDisplayProps): JSX.Element {
  const viewModelProps: BTBpmDisplayViewModelProps = props;
  const viewModel: BTBpmDisplayViewModel =
    useBTBpmDisplayViewModel(viewModelProps);
  const {
    isCalculating,
    copyBpmToClipboard,
    bpm,
    resetBpm,
    audioTapRef,
    keyDownHandler,
  } = viewModel;

  return (
    <>
      <VStack
        spacing={3}
        onTouchStart={() => {
          keyDownHandler();
        }}
      >
        <Collapse in={!isCalculating}>
          <Text fontSize={{ base: "md", md: "xl", lg: "2xl" }} mb={3}>
            Tap any key to start ⌨️
          </Text>
          <Text fontSize={{ base: "xs", md: "sm", lg: "md" }}>
            💡 For example the <Kbd>Spacebar</Kbd>
          </Text>
        </Collapse>
        <Tooltip hasArrow label="Click to copy" placement="right">
          <Stat onClick={copyBpmToClipboard} cursor="copy">
            <StatNumber
              fontSize={{ base: "7xl", md: "8xl", lg: "9xl" }}
              bgGradient={textGradient}
              bgClip="text"
            >
              {props.showMilliseconds
                ? getBpmInMillisecondFormat(bpm)
                : Math.round(bpm)}
            </StatNumber>
            <StatHelpText fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
              BPM
            </StatHelpText>
          </Stat>
        </Tooltip>
        <ScaleFade initialScale={0.9} in={isCalculating}>
          {/* `e.preventDefault()` in `onMouseDown` will prevent focusing the button after it is clicked
          This is important when users use the spacebar or enter for tapping, as having it focussed would lead
          to problems then */}
          <Button
            colorScheme="blue"
            variant="outline"
            onMouseDown={(e) => e.preventDefault()}
            onClick={isCalculating ? resetBpm : undefined}
            cursor={isCalculating ? undefined : "default"}
            display={isCalculating ? undefined : "none"}
          >
            Reset
          </Button>
        </ScaleFade>
      </VStack>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioTapRef} src={tapSound} />
    </>
  );
}

export default BTBpmDisplay;
