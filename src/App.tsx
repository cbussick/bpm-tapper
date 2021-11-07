import { Box, ChakraProvider, Flex, Spacer, Text } from "@chakra-ui/react";
import * as React from "react";
import { BTFooter } from "./components/BTFooter/BTFooter";
import { BTHeader } from "./components/BTHeader/BTHeader";
import { customTheme } from "./theme/customTheme";

export const App = (): JSX.Element => (
  <ChakraProvider theme={customTheme}>
    <Box textAlign="center" fontSize="xl">
      <Box height="100vh">
        <Flex direction="column" height="100%">
          <BTHeader />

          <Spacer />

          <Text>Hello BPM tapper! :) </Text>

          <Spacer />

          <BTFooter />
        </Flex>
      </Box>
    </Box>
  </ChakraProvider>
);
