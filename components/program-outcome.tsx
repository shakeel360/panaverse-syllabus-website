import { Avatar, Box, Heading, Stack, Text, useColorModeValue } from "@chakra-ui/react";

export default function ProgramOutcome() {
  return (
    <Stack
      bg={useColorModeValue("gray.50", "gray.800")}
      py={16}
      px={8}
      spacing={{ base: 8, md: 10 }}
      align={"center"}
      direction={"column"}
    >
      <Heading>Program Outcome</Heading>
      <Text
        fontSize={{ base: "xl", md: "2xl" }}
        // textAlign={"center"}
        maxW={"6xl"}
      >
        The graduates of this program will own products (Full-Stack App
        Templates, AR and VR Experiences, and APIs) that are marketed globally
        by the Panaverse DAO and, if they like, will also be able to start off
        by offering services at a rate of $50 per hour ($96,000 per year). This
        would give Pakistani professionals and students a fantastic opportunity
        to better their financial situation while also giving the economy a
        much-needed boost by expanding software exports.
      </Text>
      
    </Stack>
  );
}
