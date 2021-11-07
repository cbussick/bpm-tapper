import { Box, ChakraProvider, Flex, Spacer, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import BTBpmDisplay from "./components/BTBpmDisplay/BTBpmDisplay";
import { BTFooter } from "./components/BTFooter/BTFooter";
import { BTHeader } from "./components/BTHeader/BTHeader";
import { customTheme } from "./theme/customTheme";

export const App = (): JSX.Element => {
  const [showMilliseconds, setShowMilliseconds] = useState<boolean>(false);
  const [playAudio, setPlayAudio] = useState<boolean>(true);

  return (
    <ChakraProvider theme={customTheme}>
      <Box textAlign="center" fontSize="xl">
        <Box height="100vh">
          <Flex direction="column" height="100%">
            <BTHeader
              setShowMilliseconds={setShowMilliseconds}
              playAudio={playAudio}
              setPlayAudio={setPlayAudio}
            />

            <Spacer />

            <Text fontSize="4xl">
              Tap along with any song and figure out its tempo!
            </Text>

            <BTBpmDisplay
              playAudio={playAudio}
              showMilliseconds={showMilliseconds}
            />

            <Spacer />

            <BTFooter />
          </Flex>
        </Box>
      </Box>
    </ChakraProvider>
  );
};
