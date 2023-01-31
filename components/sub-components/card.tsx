import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
  Link,
  Badge,
  useColorModeValue,
  Flex,
  Divider,
} from "@chakra-ui/react";

export default function SimpleCardCourse({
  title,
  detail,
}: {
  title: string;
  detail: string;
}) {
  return (
    <Center alignItems={"flex-start"}>
      <Flex
        direction={"column"}
        alignItems="center"
        maxW={"480px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        h={"500px"}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
        _hover={{
          bg: "green.100",
        }}
      >
        <Avatar
          size={"xl"}
          src={"panaverse-dao-icon-200.png"}
          // alt={'Avatar Alt'}
          mb={4}
          pos={"relative"}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {title}
        </Heading>
        <Divider orientation="horizontal" pt={"16px"} />
        <Text
          h={"200px"}
          noOfLines={6}
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={2}
        >
          {detail}
        </Text>

        <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            Quarter IV
          </Badge>
          <Badge
            px={2}
            py={1}
            bg={useColorModeValue("gray.50", "gray.800")}
            fontWeight={"400"}
          >
            Quarter V
          </Badge>
        </Stack>

        <Stack mt={8} direction={"row"} spacing={4}>
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"green.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "green.600",
            }}
            _focus={{
              bg: "green.600",
            }}
          >
            Learn More
          </Button>
        </Stack>
      </Flex>
    </Center>
  );
}
