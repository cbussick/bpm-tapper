import { Theme, theme } from "@chakra-ui/react";

export const customTheme: Theme = {
  ...theme,
  config: {
    ...theme.config,
    initialColorMode: "dark",
  },
};
