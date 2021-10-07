import Logo from "./logo";
import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuIcon,
  MenuCommand,
  MenuDivider,
  IconButton
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import ThemeToggleButton from "./theme-toggle-button";

const Header = () => (
  <header>
    <div className="container">
      <Link href="/">
        <a className="logo" href="/">
          <Logo />
        </a>
      </Link>

      <nav>
        <a
          className="src"
          target="_blank"
          href="https://github.com/inkdropapp/blog"
        >
          Source
        </a>
        <a
          className="follow"
          target="_blank"
          href="https://twitter.com/inkdrop_app"
        >
          Follow Me
        </a>

        <ThemeToggleButton />
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<HamburgerIcon />}
            variant="outline"
            aria-label="Options"
          />
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </nav>
    </div>

    <style jsx>{`
      header {
        border-bottom: 1px dashed rgba(66, 71, 112, 0.09);
      }

      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-left: 1px dashed rgba(66, 71, 112, 0.09);
      }

      nav {
        padding: 10px 0 10px 5px;
      }

      nav a {
        padding: 6px 10px;
        display: inline-block;
        text-decoration: none;
        margin-right: 15px;
      }

      nav a.src {
        font-size: 13px;
      }

      nav a.follow {
        font-weight: bold;
        background: #000;
        font-size: 13px;
        border-radius: 2em;
      }

      a.logo {
        text-decoration: none;
        display: inline-flex;
        transition: 150ms background-color ease;
        padding: 5px;
      }

      @media (any-hover: hover) {
        a.logo:hover {
          background-color: var(--link-highlight);
        }

        a.logo:active {
          background-color: #fff445;
        }
      }

      @media (min-width: 500px) {
        .container {
          max-width: 46rem;
          margin: auto;
          padding: 10px 0;
        }

        nav {
          padding: 0;
        }
      }
    `}</style>
  </header>
);

export default Header;
