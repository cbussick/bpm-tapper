import {
  Box,
  Button,
  Checkbox,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Grid,
  Heading,
  HStack,
  IconButton,
  Link,
  Spacer,
  Stack,
  Tooltip,
  useBreakpointValue,
} from "@chakra-ui/react";
import { Rotate as Hamburger } from "hamburger-react";
import React, { useState } from "react";
import { FaGithub, FaVolumeMute, FaVolumeUp } from "react-icons/fa";
import { textGradient } from "../../helpers/getTextGradient";
import { ColorModeSwitcher } from "../ColorModeSwitcher/ColorModeSwitcher";
import { BTHeaderProps } from "./BTHeaderInterfaces";

const gitHubButtonLabel = "Repo on GitHub";

export const BTHeader = (props: BTHeaderProps): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const VolumeSwitchIcon = props.playAudio ? FaVolumeUp : FaVolumeMute;
  const volumeSwitchText = `Turn volume ${props.playAudio ? "off" : "on"}`;

  const checkboxSize = useBreakpointValue({ base: "md", lg: "lg" });
  const titleSize = useBreakpointValue({ base: "md", lg: "lg" });
  const buttonFontSize = useBreakpointValue({ base: "lg" });

  const isSmallViewport = useBreakpointValue({ base: true, md: false });

  const title = (
    <Heading
      size={titleSize}
      bgGradient={textGradient}
      bgClip="text"
      justifySelf="center"
      whiteSpace="nowrap"
    >
      BPM tapper
    </Heading>
  );

  const checkbox = (
    <Checkbox
      isChecked={props.showMilliseconds}
      onChange={() =>
        props.setShowMilliseconds((showMilliseconds) => !showMilliseconds)
      }
      size={checkboxSize}
      whiteSpace="nowrap"
    >
      Show milliseconds
    </Checkbox>
  );

  const volumeControl = (
    <Tooltip hasArrow label={volumeSwitchText}>
      <IconButton
        variant={isSmallViewport ? "outline" : "ghost"}
        aria-label={volumeSwitchText}
        icon={<VolumeSwitchIcon />}
        onClick={() => props.setPlayAudio((playAudio) => !playAudio)}
        fontSize={buttonFontSize}
        ml={isSmallViewport ? undefined : 4}
      />
    </Tooltip>
  );

  const gitHubButton = (
    <Tooltip hasArrow label={gitHubButtonLabel}>
      {isSmallViewport ? (
        <Button
          leftIcon={<FaGithub />}
          colorScheme="blue"
          variant="link"
          fontWeight="normal"
          // Necessary to have a working link
          as={Link}
          href="https://github.com/ChristopherBussick/bpm-tapper"
          target="_blank"
          rel="noopener noreferrer"
        >
          {gitHubButtonLabel}
        </Button>
      ) : (
        <IconButton
          variant="ghost"
          aria-label={gitHubButtonLabel}
          icon={<FaGithub />}
          fontSize={buttonFontSize}
          as={Link}
          href="https://github.com/ChristopherBussick/bpm-tapper"
          target="_blank"
          rel="noopener noreferrer"
        />
      )}
    </Tooltip>
  );

  const MobileMenuButton = (
    <Box
      order={-1}
      sx={{
        ".hamburger-react": {
          // Remove blue flashing when tapping the mobile menu icon
          //
          // Note: This property is non-standard as of 2021.11.01
          // See https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-tap-highlight-color
          WebkitTapHighlightColor: "transparent",
        },
      }}
    >
      <Hamburger
        toggled={isMobileMenuOpen}
        toggle={setIsMobileMenuOpen}
        label={isMobileMenuOpen ? "Close menu" : "Show menu"}
        size={isSmallViewport ? 24 : 32}
        rounded
      />
    </Box>
  );

  return (
    <Grid
      as="header"
      templateColumns="repeat(3, 1fr)"
      gap={6}
      py={2}
      alignSelf="flex-start"
      alignItems="center"
    >
      {!isSmallViewport && <Spacer />}
      {title}
      {isSmallViewport ? (
        MobileMenuButton
      ) : (
        <Flex justifySelf="flex-end">
          {checkbox}
          {volumeControl}
          {gitHubButton}
          <ColorModeSwitcher isSmallViewport={isSmallViewport} />
        </Flex>
      )}
      <Drawer
        isOpen={isMobileMenuOpen}
        placement="left"
        onClose={() => setIsMobileMenuOpen(false)}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">{title}</DrawerHeader>

          <DrawerBody mt={2}>
            <Stack spacing={4} alignItems="flex-start">
              {checkbox}
              <HStack>
                {volumeControl}
                <ColorModeSwitcher isSmallViewport={isSmallViewport} />
              </HStack>
              {gitHubButton}
            </Stack>
          </DrawerBody>

          <DrawerFooter justifyContent="flex-start">
            <Link
              href="https://www.cbussick.dev/"
              target="_blank"
              rel="noopener noreferrer"
              bgGradient={textGradient}
              bgClip="text"
              fontWeight="semibold"
              fontSize={{ base: "md", md: "lg", lg: "xl" }}
            >
              Made by Christopher Bussick
            </Link>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Grid>
  );
};
