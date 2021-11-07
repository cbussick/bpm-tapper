import {
  Checkbox,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Tooltip,
} from "@chakra-ui/react";
import React from "react";
import { FaVolumeOff, FaVolumeUp } from "react-icons/fa";
import { ColorModeSwitcher } from "../ColorModeSwitcher/ColorModeSwitcher";
import { BTHeaderProps } from "./BTHeaderInterfaces";

export const BTHeader = (props: BTHeaderProps): JSX.Element => {
  const VolumeSwitchIcon = props.playAudio ? FaVolumeUp : FaVolumeOff;
  const volumeSwitchText = `Turn volume ${props.playAudio ? "off" : "on"}`;

  return (
    <Flex py={3}>
      <Spacer />
      <Heading as="header" size="md">
        BPM tapper
      </Heading>
      <Spacer />
      <Checkbox
        colorScheme="orange"
        onChange={() =>
          props.setShowMilliseconds((showMilliseconds) => !showMilliseconds)
        }
      >
        Show milliseconds
      </Checkbox>
      <Tooltip label={volumeSwitchText}>
        <IconButton
          variant="ghost"
          aria-label={volumeSwitchText}
          icon={<VolumeSwitchIcon />}
          onClick={() => props.setPlayAudio((playAudio) => !playAudio)}
        />
      </Tooltip>
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
};
