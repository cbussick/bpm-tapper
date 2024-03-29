import {
  IconButton,
  Tooltip,
  useColorMode,
  useColorModeValue
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ColorModeSwitcherProps } from "./ColorModeSwitcherInterfaces";

export const ColorModeSwitcher = (
  props: ColorModeSwitcherProps
): JSX.Element => {
  const { toggleColorMode } = useColorMode();
  const switchLabel = `Switch to ${useColorModeValue("dark", "light")} mode`;
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  const { isSmallViewport, ...domProps } = props;

  return (
    <Tooltip hasArrow label={switchLabel}>
      <IconButton
        size="md"
        fontSize={{ base: "sm", md: "md", lg: "lg" }}
        variant={isSmallViewport ? "outline" : "ghost"}
        color="current"
        onClick={toggleColorMode}
        icon={<SwitchIcon />}
        aria-label={switchLabel}
        {...domProps}
      />
    </Tooltip>
  );
};
