import NextLink from "next/link";
import {
  Container,
  Heading,
  Box,
  Text,
  Link,
  Image,
  SimpleGrid,
  Divider,
  useColorModeValue
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";

const WorkItem = ({ children, id }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`}>
      <Link textUnderlineOffset={2}>{children}</Link>
    </NextLink>
  </Box>
);

const WorkName = ({ children }) => (
  <Text mt={2} fontSize={20}>
    {children}
  </Text>
);

const WorkDescription = ({ children }) => <Text fontSize={14}>{children}</Text>;

const WorkImage = ({ src, alt }) => (
  <Image borderRadius="lg" w="full" src={src} alt={alt} />
);

const Works = () => (
  <Layout>
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkItem id="inkdrop">
            <WorkImage src="/images/works/inkdrop_eyecatch.png" alt="Inkdrop" />
            <WorkName>Inkdrop</WorkName>
            <WorkDescription>
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkDescription>
          </WorkItem>
        </Section>
        <Section>
          <WorkItem id="walknote">
            <WorkImage
              src="/images/works/walknote_eyecatch.png"
              alt="walknote"
            />
            <WorkName>walknote</WorkName>
            <WorkDescription>Music recommendation app for iOS</WorkDescription>
          </WorkItem>
        </Section>

        <Section delay={0.1}>
          <WorkItem id="fourpainters">
            <WorkImage
              src="/images/works/the-four-painters_eyecatch.jpg"
              alt="The four painters"
            />
            <WorkName>The four painters</WorkName>
            <WorkDescription>
              A video work generated with deep learning, imitating famous four
              painters like Van Gogh
            </WorkDescription>
          </WorkItem>
        </Section>
        <Section delay={0.1}>
          <WorkItem>
            <WorkImage src="/images/works/menkiki_eyecatch.png" alt="Menkiki" />
            <WorkName>Menkiki</WorkName>
            <WorkDescription>
              An app that suggests ramen(noodle) shops based on a given photo of
              the ramen you want to eat
            </WorkDescription>
          </WorkItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkItem>
            <WorkImage
              src="/images/works/modetokyo_eyecatch.png"
              alt="Mode.Tokyo"
            />
            <WorkName>mode.tokyo</WorkName>
            <WorkDescription>
              The mode magazine for understanding to personally enjoy Japan
            </WorkDescription>
          </WorkItem>
        </Section>
        <Section delay={0.3}>
          <WorkItem>
            <WorkImage src="/images/works/styly_eyecatch.png" alt="Styly" />
            <WorkName>STYLY</WorkName>
            <WorkDescription>
              A VR Creative tools for fashion brands
            </WorkDescription>
          </WorkItem>
        </Section>
      </SimpleGrid>

      <Section delay={0.4}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Old works
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.5}>
          <WorkItem>
            <WorkImage
              src="/images/works/pichu2_eyecatch.png"
              alt="Pichu pichu"
            />
            <WorkName>Pichu* Pichu</WorkName>
            <WorkDescription>
              Twitter client app for iPhone Safari
            </WorkDescription>
          </WorkItem>
        </Section>
        <Section delay={0.5}>
          <WorkItem>
            <WorkImage
              src="/images/works/freedbtagger_eyecatch.png"
              alt="freeDBTagger"
            />
            <WorkName>freeDBTagger</WorkName>
            <WorkDescription>
              Automatic audio file tagging tool using FreeDB for Windows
            </WorkDescription>
          </WorkItem>
        </Section>
        <Section delay={0.6}>
          <WorkItem>
            <WorkImage src="/images/works/amembo_eyecatch.png" alt="Amembo" />
            <WorkName>Amembo</WorkName>
            <WorkDescription>
              P2P private file sharing tool with MSN Messenger integration for
              Windows
            </WorkDescription>
          </WorkItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
);

export default Works;
