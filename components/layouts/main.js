import Head from "next/head";
import reset from "../../css/reset";
import typography from "../../css/typography";
import colors from "../../css/colors";
import nprogress from "../../css/nprogress";
import Header from "../header";
import { Box, Text, Link, Image, Container } from "@chakra-ui/react";

import "nprogress";

const Main = ({ children, headerActive }) => {
  return (
    <main style={{ overflow: "hidden" }}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Dev as Life - Blog</title>
      </Head>

      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {colors}
      </style>
      <style jsx global>
        {nprogress}
      </style>
      <style jsx global>
        {typography}
      </style>

      <Header active={headerActive} />

      <Container maxW="container.md">
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

      <style jsx>{`
        main {
          padding: 10px;
        }
        @media (max-width: 640px) {
          padding: 20px;
        }
      `}</style>
    </main>
  );
};

export default Main;
