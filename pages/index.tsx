import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/hero";
import ProgramSummary from "@/components/summary";
import NavBar from "@/components/navbar";
import BasicStatistics from "@/components/stats";
import Courses from "@/components/courses";
import SimpleFooter from "@/components/footer";
import SingleTestimonial from "@/components/program-outcome";
import ProgramOutcome from "@/components/program-outcome";
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  Hide,
} from "@chakra-ui/react";
import { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //Using Inline Function and the The Logical Not (!) to toggle state
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <Head>
        <title>Panaverse | PIAIC</title>
        <meta name="description" content="Panaverse Syllabus" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {toggle && (
        <Alert
          status="warning"
          variant="subtle"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          textAlign="center"
          height="200px"
        >
          <AlertIcon boxSize="40px" mr={0} />
          <AlertTitle mt={4} mb={1} fontSize="lg">
            Under Development
          </AlertTitle>
          <AlertDescription maxWidth="sm">
            Some features of the website might not work, as it is in development
            phase. Sorry for inconvinence
          </AlertDescription>

          <Button mt={"16px"} onClick={() => setToggle(!toggle)}>
            Hide This Message
          </Button>
        </Alert>
      )}
      <NavBar />
      <Hero />
      <ProgramSummary />
      <Courses />
      <ProgramOutcome />
      <SimpleFooter />
      {/* <main className={styles.main}></main> */}
    </>
  );
}
