import Logo from "./logo";
import NextLink from "next/link";
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Text,
  Button,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useDisclosure,
  useColorModeValue
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";
import styled from "@emotion/styled";

const LinkItem = ({ href, path, children }) => {
  const active = path === "/works";
  return (
    <NextLink href={href}>
      <Link
        p={2}
        bg={active ? "glassTeal" : undefined}
        color={active ? "#202023" : undefined}
      >
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = props => {
  const { path } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue("#ffffff40", "#20202380")}
      style={{ backdropFilter: "blur(10px)" }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={"tighter"}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: isOpen ? "block" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <Text>About</Text>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <Text>Art</Text>
        </Stack>

        <Box
          display={{ base: isOpen ? "block" : "none", md: "block" }}
          mt={{ base: 4, md: 0 }}
        >
          <ThemeToggleButton />
        </Box>

        <Box display={{ base: "block", md: "none" }} onClick={handleToggle}>
          <HamburgerIcon />
        </Box>

        <Box display={{ base: "block", md: "none" }} flex={1} textAlign="right">
          <Menu id="nav-menu-1">
            <MenuButton
              as={IconButton}
              icon={<HamburgerIcon />}
              variant="outline"
              aria-label="Options"
            />
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
