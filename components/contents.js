import Image from "next/image";
import {
  Link,
  LinkBox,
  LinkOverlay,
  Box,
  Text,
  SimpleGrid
} from "@chakra-ui/react";
import thumbFishWorkflow from "../public/images/contents/youtube-fish-workflow.jpg";
import thumbMyDeskSetup from "../public/images/contents/youtube-my-desk-setup.jpg";
import thumb500PaidUsers from "../public/images/contents/blog-500-paid-users.jpg";
import thumbIllustrations from "../public/images/contents/illustrations.jpg";
import thumbHowToPriceYourself from "../public/images/contents/blog-how-to-price-yourself.jpg";
import thumb50xFaster from "../public/images/contents/youtube-50x-faster.jpg";

import { Global } from "@emotion/react";

const ContentItem = ({ children, href, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="content-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
);

const Contents = () => (
  <SimpleGrid columns={[1, 1, 2]} gap={6}>
    <ContentItem
      title="My Fish workflow"
      thumbnail={thumbFishWorkflow}
      href="https://www.youtube.com/watch?v=KKxhf50FIPI"
    />
    <ContentItem
      title="My desk setup (Late 2020)"
      thumbnail={thumbMyDeskSetup}
      href="https://www.youtube.com/watch?v=1OFDMwDlnOE"
    />
    <ContentItem
      title="How I’ve Attracted The First 500 Paid Users For My SaaS That Costs $5/mo"
      thumbnail={thumb500PaidUsers}
      href="https://blog.inkdrop.app/how-ive-attracted-the-first-500-paid-users-for-my-saas-that-costs-5-mo-7a5b94b8e820"
    />
    <ContentItem
      title="Illustrations"
      thumbnail={thumbIllustrations}
      href="https://illust.odoruinu.net/"
    />
    <ContentItem
      title="How to Price Yourself as a Freelance Developer"
      thumbnail={thumbHowToPriceYourself}
      href="https://blog.inkdrop.app/how-to-price-yourself-as-a-freelance-developer-3453dfd59d91"
    />
    <ContentItem
      title="I made my React Native app 50x faster"
      thumbnail={thumb50xFaster}
      href="https://www.youtube.com/watch?v=vj723NlrIQc"
    />

    <Global
      styles={`
      .content-thumbnail {
        border-radius: 12px;
      }
    `}
    />
  </SimpleGrid>
);

export default Contents;
