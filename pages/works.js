import NextLink from "next/link";
import Image from "next/image";
import {
  Container,
  Heading,
  Box,
  Text,
  LinkBox,
  SimpleGrid,
  Divider,
  useColorModeValue
} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { Global } from "@emotion/react";

import thumbInkdrop from "../public/images/works/inkdrop_eyecatch.png";
import thumbWalknote from "../public/images/works/walknote_eyecatch.png";
import thumbFourPainters from "../public/images/works/the-four-painters_eyecatch.jpg";
import thumbMenkiki from "../public/images/works/menkiki_eyecatch.png";
import thumbModeTokyo from "../public/images/works/modetokyo_eyecatch.png";
import thumbStyly from "../public/images/works/styly_eyecatch.png";
import thumbPichu2 from "../public/images/works/pichu2_eyecatch.png";
import thumbFreeDBTagger from "../public/images/works/freedbtagger_eyecatch.png";
import thumbAmembo from "../public/images/works/amembo_eyecatch.png";

const WorkItem = ({ children, id }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">{children}</LinkBox>
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
  <Image src={src} alt={alt} className="work-thumbnail" placeholder="blur" />
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
            <WorkImage src={thumbInkdrop} alt="Inkdrop" />
            <WorkName>Inkdrop</WorkName>
            <WorkDescription>
              A Markdown note-taking app with 100+ plugins, cross-platform and
              encrypted data sync support
            </WorkDescription>
          </WorkItem>
        </Section>
        <Section>
          <WorkItem id="walknote">
            <WorkImage src={thumbWalknote} alt="walknote" />
            <WorkName>walknote</WorkName>
            <WorkDescription>Music recommendation app for iOS</WorkDescription>
          </WorkItem>
        </Section>

        <Section delay={0.1}>
          <WorkItem id="fourpainters">
            <WorkImage src={thumbFourPainters} alt="The four painters" />
            <WorkName>The four painters</WorkName>
            <WorkDescription>
              A video work generated with deep learning, imitating famous four
              painters like Van Gogh
            </WorkDescription>
          </WorkItem>
        </Section>
        <Section delay={0.1}>
          <WorkItem>
            <WorkImage src={thumbMenkiki} alt="Menkiki" />
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
            <WorkImage src={thumbModeTokyo} alt="Mode.Tokyo" />
            <WorkName>mode.tokyo</WorkName>
            <WorkDescription>
              The mode magazine for understanding to personally enjoy Japan
            </WorkDescription>
          </WorkItem>
        </Section>
        <Section delay={0.3}>
          <WorkItem>
            <WorkImage src={thumbStyly} alt="Styly" />
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
            <WorkImage src={thumbPichu2} alt="Pichu pichu" />
            <WorkName>Pichu* Pichu</WorkName>
            <WorkDescription>
              Twitter client app for iPhone Safari
            </WorkDescription>
          </WorkItem>
        </Section>
        <Section delay={0.5}>
          <WorkItem>
            <WorkImage src={thumbFreeDBTagger} alt="freeDBTagger" />
            <WorkName>freeDBTagger</WorkName>
            <WorkDescription>
              Automatic audio file tagging tool using FreeDB for Windows
            </WorkDescription>
          </WorkItem>
        </Section>
        <Section delay={0.6}>
          <WorkItem>
            <WorkImage src={thumbAmembo} alt="Amembo" />
            <WorkName>Amembo</WorkName>
            <WorkDescription>
              P2P private file sharing tool with MSN Messenger integration for
              Windows
            </WorkDescription>
          </WorkItem>
        </Section>
      </SimpleGrid>
    </Container>

    <Global
      styles={`
      .work-thumbnail {
        border-radius: 12px;
      }
    `}
    />
  </Layout>
);

export default Works;
