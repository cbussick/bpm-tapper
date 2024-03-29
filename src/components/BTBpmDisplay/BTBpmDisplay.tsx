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
  useBreakpointValue,
  VStack,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import { getBpmInMillisecondFormat } from "../../helpers/getBpmInMillisecondFormat";
import { textGradient } from "../../helpers/getTextGradient";
import { customTheme } from "../../theme/customTheme";
import {
  BTBpmDisplayProps,
  BTBpmDisplayViewModel,
  BTBpmDisplayViewModelProps,
} from "./BTBpmDisplayInterfaces";
import { useBTBpmDisplayViewModel } from "./BTBpmDisplayViewModel";

function BTBpmDisplay(props: BTBpmDisplayProps): JSX.Element {
  const isSmallViewport = useBreakpointValue({ base: true, md: false });
  const animationControls = useAnimation();

  const bpmFontSize = useBreakpointValue({ base: "7xl", md: "8xl", lg: "9xl" });
  const rawBpmFontSize =
    customTheme.fontSizes[bpmFontSize as keyof typeof customTheme.fontSizes];

  const viewModelProps: BTBpmDisplayViewModelProps = {
    animationControls,
    rawBpmFontSize,
    ...props,
  };
  const viewModel: BTBpmDisplayViewModel =
    useBTBpmDisplayViewModel(viewModelProps);
  const { isCalculating, copyBpmToClipboard, bpm, resetBpm, keyDownHandler } =
    viewModel;

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
          <Stat
            onClick={isSmallViewport ? undefined : copyBpmToClipboard}
            cursor="copy"
          >
            <StatNumber
              fontSize={bpmFontSize}
              bgGradient={textGradient}
              bgClip="text"
            >
              <motion.span animate={animationControls}>
                {props.showMilliseconds
                  ? getBpmInMillisecondFormat(bpm)
                  : Math.round(bpm)}
              </motion.span>
            </StatNumber>
            <StatHelpText fontSize={{ base: "lg", md: "xl", lg: "2xl" }}>
              BPM
            </StatHelpText>
          </Stat>
        </Tooltip>
        <ScaleFade initialScale={0.9} in={isCalculating}>
          {/* `e.preventDefault()` in `onMouseDown` will prevent focusing the button after it is clicked
          This is important when users use the spacebar or enter for tapping, as having it focused would lead
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
    </>
  );
}

export default BTBpmDisplay;
