import React from "react";
import { Box, Heading, Text, Flex, Divider } from "@chakra-ui/react";

const ProgramSummary = () => {
  return (
    <Box mx={["1rem", "1rem", "8rem"]}>
      <Box
        maxW="100%"
        margin="auto"
        mt={["-70px", "-70px", "-100px"]}
        mb={["-70px", "-70px", "-100px"]}
        borderRadius="12px"
        overflow="hidden"
        boxShadow="0px 10px 10px -5px #0000000A, 0px 20px 25px -5px #0000001A"
        as="section"
      >
        <Flex direction={["column", "column", "row"]}>
          <Box padding="60px" fontSize="lg" bg="green.400">
            <Heading color={"gray.800"}>The Program in a Nutshell: Earn While You Learn</Heading>
            <Divider borderColor={"black"} orientation="horizontal" pt={2}/>

            <Text textAlign={"left"} color={"gray.800"}>
              Earn While You Learn In this brand-new type of curriculum,
              students will learn how to make money and boost exports in the
              classroom and will begin doing so within six months of the
              program&apos;s beginning. It resembles a cross between a corporate
              venture and an educational project.
            </Text>
            <Text fontWeight={"bold"} pt="16px">
              Program of Studies
            </Text>
            <Text textAlign={"left"} color={"gray.800"}>
              This curriculum is intended for beginners who want to learn
              software development from the ground up. The first three quarters
              are shared by all specialties and are dedicated to studying
              Object-Oriented Programming and cutting-edge Full-Stack Web 2.0
              development. It is going to be a fifteen-month-long hybrid program
              that includes both onsite and online classes and is divided into
              five quarters of 13 weeks each. The emphasis will be on hands-on
              learning by educating students to produce projects. To accommodate
              everyone, courses will be held primarily on weekends or after 6:00
              p.m. (Pakistan Time) on weekdays. It employs a hybrid teaching
              format, with core onsite classes complemented by online Zoom
              laboratories and recorded videos.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default ProgramSummary;
