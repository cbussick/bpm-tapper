import {
  IconButton,
  IconButtonProps,
  Tooltip,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

type ColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export const ColorModeSwitcher: React.FC<ColorModeSwitcherProps> = (props) => {
  const { toggleColorMode } = useColorMode();
  const switchLabel = `Switch to ${useColorModeValue("dark", "light")} mode`;
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <Tooltip label={switchLabel}>
      <IconButton
        size="md"
        fontSize="lg"
        variant="ghost"
        color="current"
        marginLeft="2"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={switchLabel}
        {...props}
      />
    </Tooltip>
  );
};
