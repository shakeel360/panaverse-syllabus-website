import SimpleFooter from "@/components/footer";
import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  VisuallyHidden,
  List,
  OrderedList,
  ListItem,
  HStack,
  UnorderedList,
} from "@chakra-ui/react";
import Link from "next/link";
import { FaInstagram, FaTwitter, FaYoutube, FaAmazon } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { HiDocumentText } from "react-icons/hi";

import NavBar from "../../components/navbar";

export default function QuarterOne() {
  return (
    <>
      <NavBar />
      <Container maxW={"8xl"}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          // py={{ base: 18, md: 24 }}
          pt={{ base: 18, md: 24 }}
          pb={{ base: 12, md: 16 }}
        >
          <Flex>
            <Image
              rounded={"md"}
              alt={"product image"}
              src={"/images-courses/oops-ts.png"}
              fit={"cover"}
              align={"center"}
              w={"100%"}
              h={{ base: "100%", sm: "400px", lg: "500px" }}
            />
          </Flex>
          <Stack spacing={{ base: 6, md: 10 }}>
            <Box as={"header"}>
              <Heading
                lineHeight={1.1}
                fontWeight={600}
                fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
              >
                Quarter I (Core)
              </Heading>
              <Text
                color={useColorModeValue("gray.900", "gray.400")}
                fontWeight={300}
                fontSize={"2xl"}
              >
                CS-101: Object-Oriented Programming using TypeScript
              </Text>
              <Text>Duration: 13 Weeks</Text>
            </Box>

            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={"column"}
              divider={
                <StackDivider
                  borderColor={useColorModeValue("gray.200", "gray.600")}
                />
              }
            >
              <VStack spacing={{ base: 4, sm: 6 }}>
                <Text fontWeight={"400"} fontSize={"3xl"}>
                  Course Description
                </Text>
                <Text
                  color={useColorModeValue("gray.500", "gray.400")}
                  fontSize={"xl"}
                  fontWeight={"300"}
                >
                  We will start the program by learning the fundamentals of
                  Object-Oriented programming using JavaScript and TypeScript.
                  We will also understand the latest Web trends i.e. Web 3.0 and
                  Metaverse concepts and try to understand their working from
                  the perspective of the users.
                </Text>
              </VStack>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>

      <Container maxW={"8xl"} mb={16}>
        <Stack>
          <Stack>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Course Outline:
              </Text>

              <OrderedList spacing={2}>
                <ListItem fontSize={"xl"}>
                  <Text textDecorationLine={"underline"}>
                    HTML and CSS (Homework)
                  </Text>
                  <UnorderedList>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link
                          href={
                            "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQ3BALy86tIXICkG874wAc6"
                          }
                        >
                          Learn HTML by Hira Khan (Watch Recorded Videos)
                        </Link>
                        <FaYoutube />
                      </HStack>
                    </ListItem>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link
                          href={
                            "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQSWIen_zUSEBmtqzPLuRob"
                          }
                        >
                          Learn CSS Intro by Hira Khan (Watch Recorded Videos)
                        </Link>
                        <FaYoutube />
                      </HStack>
                    </ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem fontSize={"xl"}>
                  <Text textDecorationLine={"underline"}>
                    Web 3.0 and Metaverse Theory
                  </Text>
                  <UnorderedList>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link
                          href={
                            "https://docs.google.com/presentation/d/12C1s4UBTlR9nZNEkRE6aAuGeRA3s92jx-8nJKo9jdH4/edit?usp=sharing"
                          }
                        >
                          Introduction to Panaverse DAO
                        </Link>
                        <HiDocumentText />
                      </HStack>
                    </ListItem>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link
                          href={
                            "https://docs.google.com/presentation/d/1FSbr9aJwO0-fmZHqWy_eHO2N_jwJLmQCy4cG8rd4ctw/edit?usp=sharing"
                          }
                        >
                          Web 3.0 User Guide
                        </Link>
                        <HiDocumentText />
                      </HStack>
                    </ListItem>
                    <ListItem fontSize={"md"}>
                      Complete Web 3 Assignments included in the Web 3 User
                      Guide
                    </ListItem>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link
                          href={
                            "https://docs.google.com/presentation/d/1ADk87hQ0Etr2PfmN9XH7TQ0CHl6XSP_7JWNUbzPdDNc/edit?usp=sharing"
                          }
                        >
                          Virtual and Augmented Metaverse User Guide
                        </Link>
                        <HiDocumentText />
                      </HStack>
                    </ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem fontSize={"xl"}>
                  <Text textDecorationLine={"underline"}>
                    Fundamentals of JavaScript{" "}
                    <Text
                      as={"span"}
                      color={"blue"}
                      _hover={{ color: "teal.500" }}
                    >
                      <Link href={""}>
                        (ECMAScript 2022 Language Specification)
                      </Link>
                    </Text>
                  </Text>
                  <UnorderedList>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link
                          href={
                            "https://www.youtube.com/playlist?list=PLKvqnz8z1zWQdc0NSLknxmxBch5gLOqyo"
                          }
                        >
                          Learn JavaScript by Zeeshan Hanif (Watch Recorded
                          Videos)
                        </Link>
                        <FaYoutube />
                      </HStack>
                    </ListItem>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link
                          href={
                            "https://www.amazon.com/JavaScript-Beginner-Professional-building-interactive/dp/1800562527/ref=sr_1_4"
                          }
                        >
                          Chapters 2-6, 13 of JavaScript from Beginner to
                          Professional: Learn JavaScript quickly by building
                          fun, interactive, and dynamic web apps, games, and
                          pages
                        </Link>
                        <FaAmazon />
                      </HStack>
                    </ListItem>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link
                          href={
                            "https://github.com/PacktPublishing/JavaScript-from-Beginner-to-Professional"
                          }
                        >
                          JavaScript Book Code
                        </Link>
                        <BsGithub />
                      </HStack>
                    </ListItem>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link
                          href={
                            "https://github.com/panaverse/typescript-node-projects/blob/main/getting-started-exercises.md "
                          }
                        >
                          Getting Started Exercises with JavaScript and Node.js
                        </Link>
                        <BsGithub />
                      </HStack>
                    </ListItem>
                    <ListItem fontSize={"md"}>
                      <Text> Fundamentals of JavaScript and Node.js Quiz</Text>
                      <Text textDecorationLine={"underline"}>
                        Topics Covered in the Quiz:
                      </Text>
                      <OrderedList>
                        <ListItem>
                          Background of JavaScript and How to use JavaScript in
                          Browser
                        </ListItem>
                        <ListItem>
                          Variables, Primitive data types Analyzing and
                          modifying data types, and Operators (Chapter 2 of
                          JavaScript from Beginner to Professional)
                        </ListItem>
                        <ListItem>
                          Intro to Node.js, .mjs files, Modules, NPM, import,
                          export, and using external modules with npm: <br />
                          <Text
                            color={"blue"}
                            _hover={{
                              color: "teal.500",
                            }}
                          >
                            <Link
                              href={
                                "https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
                              }
                            >
                              https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
                            </Link>
                          </Text>
                        </ListItem>
                        <ListItem>
                          How to accept user input in your Node.js JavaScript
                          programs, this will allow us to create interactive
                          Node.js console programs using prompt-sync library.
                          The last example in this presentation shows you how to
                          use prompt-sync library in your Node.js programs:
                          <Text
                            color={"blue"}
                            _hover={{
                              color: "teal.500",
                            }}
                          >
                            <Link
                              href={
                                "https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing"
                              }
                            >
                              https://docs.google.com/presentation/d/1eOLJTN0FyVAw6lMUvA_XYLORKnudWXyzXsB6sg5oPIs/edit?usp=sharing
                            </Link>
                          </Text>
                          Note: After this point, we will do all our class work
                          and exercises using Node.js in .mjs files. We will
                          also be able to develop interactive Node.js console
                          programs which will greatly help the students to
                          learn.
                        </ListItem>
                        <ListItem>
                          Using Arrays and Objects in Node.js Programs (chapter
                          3 of JavaScript from Beginner to Professional)
                        </ListItem>
                        <ListItem>
                          Using if and if else statements, else if statements,
                          Conditional ternary operators, and switch statements
                          in Node.js programs (chapter 4 of JavaScript from
                          Beginner to Professional)
                        </ListItem>
                        <ListItem>
                          Using while loop, do while loop, for loop, for in, and
                          for of loop in Node.js (chapter 5 of JavaScript from
                          Beginner to Professional)
                        </ListItem>
                        <ListItem>
                          Using Basic functions, Function arguments, Return,
                          Variable scope in functions, Recursive functions,
                          Nested functions, Anonymous functions, and Function
                          callbacks in Node.js (chapter 6 of JavaScript from
                          Beginner to Professional)
                        </ListItem>
                        <ListItem>
                          Using Concurrency, Callbacks, Promises, async / await,
                          and Event loop (chapter 13 of JavaScript from Beginner
                          to Professional)
                        </ListItem>
                        <ListItem>
                          <Text
                            _hover={{
                              color: "teal.500",
                            }}
                          >
                            <Link
                              href={
                                "https://www.codingame.com/playgrounds/347/javascript-promises-mastering-the-asynchronous/what-is-asynchronous-in-javascript"
                              }
                            >
                              JavaScript promises, mastering the asynchronous
                            </Link>
                          </Text>
                        </ListItem>
                        <ListItem>
                          <Text
                            _hover={{
                              color: "teal.500",
                            }}
                          >
                            <Link
                              href={
                                "https://dev.to/brayanarrieta/new-javascript-features-ecmascript-2022-with-examples-4nhg"
                              }
                            >
                              New JavaScript Features in ECMAScript 2022 and
                              2021
                            </Link>
                          </Text>
                        </ListItem>
                      </OrderedList>
                    </ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem fontSize={"xl"}>
                  <Text textDecorationLine={"underline"}>
                    Object-Oriented Programming with TypeScript
                  </Text>
                  <UnorderedList>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link
                          href={
                            "https://www.amazon.com/Learning-TypeScript-Development-Type-Safe-JavaScript/dp/1098110331/ref=sr_1_1"
                          }
                        >
                          Chapters 1-11 of Learning TypeScript: Enhance Your Web
                          Development Skills Using Type-Safe JavaScript
                        </Link>
                        <FaAmazon />
                      </HStack>
                    </ListItem>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link
                          href={"https://github.com/panaverse/learn-typescript"}
                        >
                          Learning Repository
                        </Link>
                        <BsGithub />
                      </HStack>
                    </ListItem>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link href={"https://www.learningtypescript.com/"}>
                          In Class Companion projects and articles for Learning
                          TypeScript
                        </Link>
                        <BsGithub />
                      </HStack>
                    </ListItem>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link
                          href={
                            "https://github.com/panaverse/typescript-node-projects"
                          }
                        >
                          Homework Project
                        </Link>
                        <BsGithub />
                      </HStack>
                    </ListItem>
                    <ListItem fontSize={"md"}>
                      Fundamentals of TypeScript Quiz
                    </ListItem>
                    <ListItem fontSize={"md"}>
                      TypeScript Professional Proficiency Quiz
                    </ListItem>
                  </UnorderedList>
                </ListItem>
                <ListItem fontSize={"xl"}>
                  <Text textDecorationLine={"underline"}>
                    TypeScript for React
                  </Text>
                  <UnorderedList>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link
                          href={"https://profy.dev/article/react-typescript"}
                        >
                          Minimal TypeScript Crash Course For React With
                          Interactive Code Exercises
                        </Link>
                      </HStack>
                    </ListItem>
                  </UnorderedList>
                </ListItem>
              </OrderedList>
            </Box>
            <Box>
              <Text
                fontSize={{ base: "16px", lg: "18px" }}
                color={useColorModeValue("yellow.500", "yellow.300")}
                fontWeight={"500"}
                textTransform={"uppercase"}
                mb={"4"}
              >
                Quarter Break Assignments and Quizzes
              </Text>

              <Text>
                During the Quarter Break, we do the following Assignments:
                <br />
                <br />
                <Text
                  color={"blue"}
                  _hover={{
                    color: "teal.500",
                  }}
                >
                  <Link
                    href={
                      "https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge"
                    }
                  >
                    1.
                    https://github.com/panaverse/learn-nextjs/tree/main/assignment00_cloud_to_edge
                  </Link>
                </Text>
                <Text
                  color={"blue"}
                  _hover={{
                    color: "teal.500",
                  }}
                >
                  <Link
                    href={
                      "https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app"
                    }
                  >
                    2.
                    https://github.com/panaverse/learn-nextjs/tree/main/assignment01_todo_app
                  </Link>
                </Text>
                <Text
                  color={"blue"}
                  _hover={{
                    color: "teal.500",
                  }}
                >
                  <Link
                    href={
                      "https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui"
                    }
                  >
                    3.
                    https://github.com/panaverse/styling-nextjs-projects/tree/main/project00_pricing_ui
                  </Link>
                </Text>
                4. Build a Panaverse DAO Syllabus Website using Next.js 13 given
                the content from the following document:
                <Text
                  color={"blue"}
                  _hover={{
                    color: "teal.500",
                  }}
                >
                  <Link
                    href={
                      "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing"
                    }
                  >
                    https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing
                  </Link>
                </Text>
                The best-developed Website will be hosted on www.panaverse.co
                domain. <br />
                5. Build a new PIAIC Website using Next.js 13 given the content
                from the current PIAIC Website and from the following document:
                <Text
                  color={"blue"}
                  _hover={{
                    color: "teal.500",
                  }}
                >
                  <Link
                    href={
                      "https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing"
                    }
                  >
                    https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit?usp=sharing
                  </Link>
                </Text>
                The best-developed Website will be hosted on www.piaic.org
                domain. <br /> <br />
                After completing the above Five Assignments everyone will appear
                in the following two Quizzes covering Github and TypeScript:
              </Text>

              
              <OrderedList spacing={2} pt={2}>
                <ListItem fontSize={"xl"}>
                  <Text textDecorationLine={"underline"}>
                    TypeScript for React
                  </Text>
                  <UnorderedList>
                    <ListItem fontSize={"md"}>
                      <HStack
                        _hover={{
                          background: "white",
                          color: "teal.500",
                        }}
                      >
                        <Link
                          href={"https://profy.dev/article/react-typescript"}
                        >
                          Minimal TypeScript Crash Course For React With
                          Interactive Code Exercises
                        </Link>
                      </HStack>
                    </ListItem>
                  </UnorderedList>
                </ListItem>
              </OrderedList>
            </Box>
          </Stack>
        </Stack>
      </Container>

      <SimpleFooter />
    </>
  );
}
