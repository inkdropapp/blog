import NextLink from "next/link";
import Image from "next/image";
import {
  Container,
  Heading,
  Box,
  Text,
  LinkBox,
  LinkOverlay,
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

const WorkItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/works/${id}`}>
      <LinkBox cursor="pointer">
        <Image
          src={thumbnail}
          alt={title}
          className="work-thumbnail"
          placeholder="blur"
        />
        <LinkOverlay href={`/works/${id}`}>
          <Text mt={2} fontSize={20}>
            {title}
          </Text>
        </LinkOverlay>
        <Text fontSize={14}>{children}</Text>
      </LinkBox>
    </NextLink>
  </Box>
);

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
            A Markdown note-taking app with 100+ plugins, cross-platform and
            encrypted data sync support
          </WorkItem>
        </Section>
        <Section>
          <WorkItem id="walknote" title="walknote" thumbnail={thumbWalknote}>
            Music recommendation app for iOS
          </WorkItem>
        </Section>

        <Section delay={0.1}>
          <WorkItem
            id="fourpainters"
            title="The four painters"
            thumbnail={thumbFourPainters}
          >
            A video work generated with deep learning, imitating famous four
            painters like Van Gogh
          </WorkItem>
        </Section>
        <Section delay={0.1}>
          <WorkItem id="menkiki" thumbnail={thumbMenkiki} title="Menkiki">
            An app that suggests ramen(noodle) shops based on a given photo of
            the ramen you want to eat
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
          <WorkItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkItem>
        </Section>
        <Section delay={0.3}>
          <WorkItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
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
          <WorkItem id="pichu2" thumbnail={thumbPichu2} title="Pichu*Pichu">
            Twitter client app for iPhone Safari
          </WorkItem>
        </Section>
        <Section delay={0.5}>
          <WorkItem
            id="freedbtagger"
            thumbnail={thumbFreeDBTagger}
            title="freeDBTagger"
          >
            Automatic audio file tagging tool using FreeDB for Windows
          </WorkItem>
        </Section>
        <Section delay={0.6}>
          <WorkItem id="amembo" thumbnail={thumbAmembo} title="Amembo">
            P2P private file sharing tool with MSN Messenger integration for
            Windows
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
