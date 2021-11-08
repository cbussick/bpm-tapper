import { Box, Container, Grid, Text, useColorMode } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import BTBpmDisplay from "./components/BTBpmDisplay/BTBpmDisplay";
import { BTFooter } from "./components/BTFooter/BTFooter";
import { BTHeader } from "./components/BTHeader/BTHeader";
import { customTheme } from "./theme/customTheme";

export const App = (): JSX.Element => {
  const [showMilliseconds, setShowMilliseconds] = useState<boolean>(false);
  const [playAudio, setPlayAudio] = useState<boolean>(true);

  const { setColorMode } = useColorMode();

  useEffect(() => {
    // For whatever reason, when having `initialColorMode === "dark"` it directly switches back to "light".
    // This is a workaround, to manually set it to dark mode on the first render of the app.
    if (customTheme.config.initialColorMode === "dark") {
      setColorMode("dark");
    }
  }, [setColorMode]);

  return (
    <Box textAlign="center" height="100vh">
      <Grid templateColumns="repeat(1fr, 3)" gap={6} height="100%">
        <BTHeader
          setShowMilliseconds={setShowMilliseconds}
          playAudio={playAudio}
          setPlayAudio={setPlayAudio}
        />

        <Container maxW="8xl">
          <Text fontSize={{ base: "lg", md: "3xl", lg: "4xl" }} mb={9}>
            Tap along to any song to figure out its tempo! 🎵
          </Text>

          <BTBpmDisplay
            playAudio={playAudio}
            showMilliseconds={showMilliseconds}
          />
        </Container>

        <BTFooter />
      </Grid>
    </Box>
  );
};
