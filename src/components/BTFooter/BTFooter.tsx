import { Flex, Link } from "@chakra-ui/react";
import React from "react";

export const BTFooter = (): JSX.Element => (
  <Flex as="footer" justify="center" py={3}>
    <Link
      href="https://www.cbussick.dev/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Made by Christopher Bussick
    </Link>
  </Flex>
);
