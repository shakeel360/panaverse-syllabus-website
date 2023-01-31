import NavBar from "@/components/navbar";
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
  VStack,
} from "@chakra-ui/react";
import QuarterCard from "@/components/sub-components/quarter-card";

const index = () => {
  return (
    <>
      <NavBar />
      <Center>
        <VStack maxW={"80%"} spacing={8}>
          <QuarterCard
            quarterName={"Quarter I (Core)"}
            quarterTitle={
              "CS-101: Object-Oriented Programming using TypeScript"
            }
            quarterDetails={
              "We will start the program by learning the fundamentals of Object-Oriented programming using JavaScript and TypeScript. We will also understand the latest Web trends i.e. Web 3.0 and Metaverse concepts and try to understand their working from the perspective of the users."
            }
          />
          <QuarterCard
            quarterName={"Quarter II (Core)"}
            quarterTitle={
              "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform"
            }
            quarterDetails={
              "The objective of this course is to teach participants to develop customer-facing planet-scale Websites, Full-Stack Apps and templates, Dashboards, and Muti-Cloud Serverless APIs. By the end of the quarter, the participants will be able to develop and deploy web platforms like Facebook, Shopify, etc. The technologies covered in this course will include Next.js 13, Figma, Tailwind CSS, Chakra UI, tRPC, QraphQL, Prisma, Cockroachdb Serverless (PostgreSQL Compatible), AWS Serverless Technologies, and Cloud Development Kit for Terraform (CDKTF)."
            }
          />
        </VStack>
      </Center>
    </>
  );
};

export default index;
