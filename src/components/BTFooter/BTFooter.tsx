import { Flex, Link } from "@chakra-ui/react";
import { textGradient } from "../../helpers/getTextGradient";

export const BTFooter = (): JSX.Element => (
  <Flex as="footer" justify="center" py={3} alignSelf="flex-end">
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
  </Flex>
);
