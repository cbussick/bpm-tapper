import { IconButtonProps } from "@chakra-ui/react";

type BaseColorModeSwitcherProps = Omit<IconButtonProps, "aria-label">;

export interface ColorModeSwitcherProps extends BaseColorModeSwitcherProps {
  isSmallViewport?: boolean;
}
