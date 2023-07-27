import Head from "next/head";
import {
  VStack,
  Center,
  Container,
  Heading,
  Button,
  HStack,
  Image,
  Box,
} from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";
import NextLink from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>DEB(AI)TE</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Center px="10">
        <HStack direction="row" h="90vh" gap="100px">
          <Container>
            <VStack gap="50px" direction="column">
              <Heading alignItems="left">
                In a world of many sides, it helps to hear both.
              </Heading>
              <Heading>
                Have GPT run a full fledged debate on ANY topic you want.
              </Heading>
            </VStack>
            <Box mt="50px">
              <Heading fontSize="20px">
                <TypeAnimation
                  sequence={[
                    "What is the meaning of life?",
                    1000,
                    "Is university worth it?",
                    1000,
                    "Is smoking THAT bad?",
                    1000,
                    "",
                    1000,
                    "is America the best country?",
                    1000,
                    "is GPT tech bad for us?",
                    1000,
                    "Should homework be banned?",
                    1000,
                    "Are books useful anymore?",
                    1000,
                  ]}
                  speed={30}
                  deletionSpeed={70}
                  style={{ fontSize: "2em" }}
                  wrapper="span"
                  repeat={Infinity}
                />
              </Heading>
            </Box>
            <Center mt="40px">
              <NextLink href="/debate">
                <Button
                  bg="black"
                  color="white"
                  size="lg"
                  _hover={{
                    background: "white",
                    color: "red",
                    border: "2px red dashed",
                  }}
                >
                  {" "}
                  DEB(AI)TE It
                </Button>
              </NextLink>
            </Center>
          </Container>
          <Box>
            <Image src="./edit.png" alt="Dan Abramov" w="100%" />
          </Box>
        </HStack>
      </Center>
    </>
  );
}
