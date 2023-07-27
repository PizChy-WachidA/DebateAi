import { Box, Flex, Center, Heading, Icon } from "@chakra-ui/react";
import NextLink from "next/link";
import { GiPublicSpeaker } from "react-icons/gi";

export const Navigation = () => {
  return (
    <>
      <Box as="header">
        <Box borderBottomWidth="1px" px="4" bg="bg-surface">
          <Center>
            <Flex
              align="center"
              justify="space-between"
              height="4.5rem"
              width="6xl"
            >
              <NextLink href="/">
                <Heading>DEB(AI)TE</Heading>
              </NextLink>
              <Icon boxSize={10} as={GiPublicSpeaker} />
            </Flex>
          </Center>
        </Box>
      </Box>
    </>
  );
};
