import Layout from "../components/layouts/main";
import Link from "next/link";
import postsData from "../posts";
import { Container, Box, Text, Image, SimpleGrid } from "@chakra-ui/react";
const { posts } = postsData;

export function getStaticProps() {
  return {
    props: {
      posts: posts.map(post => ({
        ...post,
        url: `${new Date(post.date).getFullYear()}/${post.id}`
      }))
    }
  };
}

const Home = ({ posts, date }) => (
  <Layout>
    <Container>
      <Box
        borderRadius="lg"
        mb={6}
        p={3}
        textAlign="center"
        bg="whiteAlpha.500"
      >
        Hello, I'm a full-stack developer based in Japan!
      </Box>
      <SimpleGrid columns={[1, 1, 2]} gap={6} textAlign="center">
        <Box w="100%">
          <Image
            borderRadius="lg"
            w="full"
            src="/images/banners/youtube.png"
            alt="My YouTube channel"
          />
          YouTube
        </Box>
        <Box w="100%">
          <Image
            borderRadius="lg"
            w="full"
            src="/images/banners/youtube.png"
            alt="My YouTube channel"
          />
          YouTube
        </Box>
        <Box w="100%">
          <Image
            borderRadius="lg"
            w="full"
            src="/images/banners/youtube.png"
            alt="My YouTube channel"
          />
          YouTube
        </Box>
        <Box w="100%">
          <Image
            borderRadius="lg"
            w="full"
            src="/images/banners/youtube.png"
            alt="My YouTube channel"
          />
          YouTube
        </Box>
        <Box w="100%">
          <Image
            borderRadius="lg"
            w="full"
            src="/images/banners/youtube.png"
            alt="My YouTube channel"
          />
          YouTube
        </Box>
        <Box w="100%">
          <Image
            borderRadius="lg"
            w="full"
            src="/images/banners/youtube.png"
            alt="My YouTube channel"
          />
          YouTube
        </Box>
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
        <Box w="100%" h="10" bg="blue.500" />
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Home;
