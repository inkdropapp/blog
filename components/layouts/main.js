import Head from "next/head";
import typography from "../../css/typography";
import colors from "../../css/colors";
import nprogress from "../../css/nprogress";
import NavBar from "../navbar";
import Header from "../header";
import { Box, Text, Link, Image, Container } from "@chakra-ui/react";
import VoxelDog from "../voxel-dog";
import NoSsr from "../no-ssr";

import "nprogress";

const Main = ({ children, headerActive }) => {
  return (
    <main style={{ overflow: "hidden" }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dev as Life - Blog</title>
      </Head>

      <style jsx global>
        {nprogress}
      </style>
      <style jsx global>
        {typography}
      </style>

      <NavBar />

      <Container maxW="container.md" pt={14}>
        <NoSsr>
          <VoxelDog />
        </NoSsr>

        <Box className="box" p={4} display={{ md: "flex" }}>
          <Box flexShrink={0}>
            <Image
              borderRadius="lg"
              width={{ md: 40 }}
              src="https://bit.ly/2jYM25F"
              alt="Woman paying for a purchase"
            />
          </Box>
          <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
            {children}
          </Box>
        </Box>
      </Container>
    </main>
  );
};

export default Main;
