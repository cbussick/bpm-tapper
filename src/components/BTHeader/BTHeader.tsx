import {
  Checkbox,
  Flex,
  Grid,
  Heading,
  IconButton,
  Link,
  Spacer,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import { FaGithub, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { textGradient } from "../../helpers/getTextGradient";
import { ColorModeSwitcher } from "../ColorModeSwitcher/ColorModeSwitcher";
import { BTHeaderProps } from "./BTHeaderInterfaces";

const gitHubButtonLabel = "Repo on GitHub";

export const BTHeader = (props: BTHeaderProps): JSX.Element => {
  const VolumeSwitchIcon = props.playAudio ? FaVolumeUp : FaVolumeMute;
  const volumeSwitchText = `Turn volume ${props.playAudio ? "off" : "on"}`;

  const checkboxSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });
  const titleSize = useBreakpointValue({ base: "sm", md: "md", lg: "lg" });

  return (
    <Grid
      as="header"
      templateColumns="repeat(3, 1fr)"
      gap={6}
      py={2}
      alignSelf="flex-start"
      alignItems="center"
    >
      <Spacer />
      <Heading
        size={titleSize}
        bgGradient={textGradient}
        bgClip="text"
        justifySelf="center"
      >
        BPM tapper
      </Heading>
      <Flex justifySelf="flex-end">
        <Checkbox
          onChange={() =>
            props.setShowMilliseconds((showMilliseconds) => !showMilliseconds)
          }
          size={checkboxSize}
          whiteSpace="nowrap"
        >
          Show milliseconds
        </Checkbox>
        <Tooltip hasArrow label={volumeSwitchText}>
          <IconButton
            variant="ghost"
            aria-label={volumeSwitchText}
            icon={<VolumeSwitchIcon />}
            onClick={() => props.setPlayAudio((playAudio) => !playAudio)}
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            ml={4}
          />
        </Tooltip>
        <Tooltip hasArrow label={gitHubButtonLabel}>
          <IconButton
            variant="ghost"
            aria-label={gitHubButtonLabel}
            icon={<FaGithub />}
            fontSize={{ base: "sm", md: "md", lg: "lg" }}
            as={Link}
            href="https://github.com/ChristopherBussick/bpm-tapper"
            target="_blank"
            rel="noopener noreferrer"
          />
        </Tooltip>
        <ColorModeSwitcher />
      </Flex>
    </Grid>
  );
};
