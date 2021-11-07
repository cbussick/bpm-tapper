import { Flex, Heading, Spacer } from "@chakra-ui/react";
import React from "react";
import { ColorModeSwitcher } from "../ColorModeSwitcher/ColorModeSwitcher";

export const BTHeader = (): JSX.Element => (
  <Flex py={3}>
    <Spacer />
    <Heading as="header" size="md">
      BPM tapper
    </Heading>
    <Spacer />
    <ColorModeSwitcher justifySelf="flex-end" />
  </Flex>
);
