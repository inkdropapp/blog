import { ChakraProvider } from "@chakra-ui/react";
function MyApp({ Component, pageProps }) {
  console.log("my app", Component, pageProps);
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
