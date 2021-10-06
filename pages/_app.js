import { ChakraProvider } from "@chakra-ui/react";

function Blog({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default Blog;
