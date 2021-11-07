import {
  Box,
  ChakraProvider,
  Container,
  Grid,
  Spacer,
  Text,
} from "@chakra-ui/react";
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
          <Grid templateColumns="repeat(1fr, 3)" gap={6} height="100%">
            <BTHeader
              setShowMilliseconds={setShowMilliseconds}
              playAudio={playAudio}
              setPlayAudio={setPlayAudio}
            />

            <Spacer />

            <Container maxW="8xl">
              <Text fontSize="4xl" mb={9}>
                Tap along to any song to figure out its tempo! 🎵
              </Text>

              <BTBpmDisplay
                playAudio={playAudio}
                showMilliseconds={showMilliseconds}
              />
            </Container>
            <Spacer />

            <BTFooter />
          </Grid>
        </Box>
      </Box>
    </ChakraProvider>
  );
};
