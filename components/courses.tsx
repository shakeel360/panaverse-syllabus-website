import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Flex,
  Button,
  HStack,
  StackProps,
  Icon,
  Stack,
  VStack,
  SimpleGrid,
  CardBody,
  Card,
  StackDivider,
  useColorModeValue,
} from "@chakra-ui/react";
import SimpleCardCourse from "./sub-components/card";
import Link from "next/link";

const Courses = () => {
  return (
    <Box
      maxW="100%"
      margin="auto"
      px={[1, 1, 9]} /* 4px,4px,36px*/
      py={{ base: 20, md: 36 }}
      bg="gray.200"
    >
      <Box mx={[8, 8, 16]}>
        <Box>
          <Heading>Core Courses (Common in All Specializations):</Heading>
          <Text pb="16px">
            Every participant of the program will start by completing the
            following three core courses:
          </Text>
        </Box>

        <Card bg="green.400">
          <CardBody>
            <Stack divider={<StackDivider />} spacing="4">
              <Box
                as={Link}
                href={"/common/quarter-one"}
                _hover={{
                  color: "white",
                }}
              >
                <Heading size="xs" textTransform="uppercase">
                  Quarter I (Core)
                </Heading>
                <Text pt="2" fontSize="sm">
                  CS-101: Object-Oriented Programming using TypeScript
                </Text>
              </Box>
              <Box
                as={Link}
                href={"/common/quarter-two"}
                _hover={{
                  color: "white",
                }}
              >
                <Heading size="xs" textTransform="uppercase">
                  Quarter II (Core)
                </Heading>
                <Text pt="2" fontSize="sm">
                  W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud
                  Apps and APIs using Next.js 13 and Cloud Development Kit (CDK)
                  for Terraform
                </Text>
              </Box>
              <Box
                as={Link}
                href={"/common/quarter-three"}
                _hover={{
                  color: "white",
                }}
              >
                <Heading size="xs" textTransform="uppercase">
                  Quarter III (Core)
                </Heading>
                <Text pt="2" fontSize="sm">
                  $-101: Dollar Making Bootcamp - Full-Stack Template and API
                  Product Development
                </Text>
              </Box>
            </Stack>
          </CardBody>
        </Card>

        <Box pt={"32px"}>
          <Heading>Specialized Tracks:</Heading>
          <Text pb="16px">
            After completing the first three quarters the participants will
            select one or more specializations consisting of two courses each:
          </Text>
        </Box>

        <SimpleGrid columns={[1, 1, 3]} spacingX="5" spacingY="5">
          <SimpleCardCourse
            title={"Web 3.0 (Blockchain) and Metaverse"}
            detail={
              "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences."
            }
          />
          <SimpleCardCourse
            title={"Artificial Intelligence (AI) and Deep Learning"}
            detail={
              "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models."
            }
          />
          <SimpleCardCourse
            title={"Cloud-Native Computing"}
            detail={
              "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes."
            }
          />
          <SimpleCardCourse
            title={"Ambient Computing and IoT"}
            detail={
              "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices."
            }
          />
          <SimpleCardCourse
            title={"Genomics and Bioinformatics"}
            detail={
              "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications."
            }
          />
          <SimpleCardCourse
            title={"Network Programmability and Automation"}
            detail={
              "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git."
            }
          />
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Courses;
