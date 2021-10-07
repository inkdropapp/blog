import Head from "next/head";
import typography from "../../css/typography";
import colors from "../../css/colors";
import nprogress from "../../css/nprogress";
import NavBar from "../navbar";
import Header from "../header";
import { Box, Text, Image, Container, SimpleGrid } from "@chakra-ui/react";
import VoxelDog from "../voxel-dog";
import NoSsr from "../no-ssr";

import "nprogress";

const Main = ({ children, headerActive }) => {
  return (
    <main style={{ overflow: "hidden" }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Takuya Matsuyama - Homepage</title>
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

        {children}
      </Container>
    </main>
  );
};

export default Main;
