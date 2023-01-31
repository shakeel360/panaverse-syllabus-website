import React from "react";
import {
  Box,
  Heading,
  Container,
  Text,
  Button,
  Stack,
  Icon,
  useColorModeValue,
  createIcon,
  Center,
  HStack,
  Flex,
} from "@chakra-ui/react";

const QuarterCard = ({
  quarterName,
  quarterTitle,
  quarterDetails,
}: {
  quarterName: string;
  quarterTitle: string;
  quarterDetails: string;
}) => {
  return (
    <>
      <Box
        maxW="100%"
        margin="auto"
        borderRadius="12px"
        overflow="hidden"
        mt={2}
        boxShadow="0px 10px 10px -5px #0000000A, 0px 20px 25px -5px #0000001A"
        textAlign="center"
        as="section"
      >
        <Flex direction={["column", "column", "row"]} 
        h="400px">
          <Box bg="#F0EAFB" p="60px">
            <Text fontSize="3xl" fontWeight="extrabold">
              {quarterName}
            </Text>
            <Heading as="h3" fontSize={["xl", "xl", "xl"]} mt="4">
              {quarterTitle}
            </Heading>
            <Text color="gray.900" fontSize="lg" fontWeight="medium" mt="2">
              Duration: 13 Weeks
            </Text>
            <Button colorScheme="green" size="lg" w="282px" mt="6">
              Read More
            </Button>
          </Box>

          {/* Right side box, showing the features */}
          <Box padding="60px" fontSize="lg" bg="green.100">
            <Text textAlign="left">{quarterDetails}</Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default QuarterCard;
