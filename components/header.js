import Logo from "./logo";
import Link from "next/link";

const Header = () => (
  <header>
    <div className='container'>
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
        <a className="follow" target="_blank" href="https://twitter.com/inkdrop_app">
          Follow Me
        </a>
      </nav>
    </div>

    <style jsx>{`
      header {
        border-bottom: 1px dashed rgba(66,71,112,0.09);
      }

      .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-left: 1px dashed rgba(66,71,112,0.09);
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
        color: #333;
      }

      nav a.follow {
        font-weight: bold;
        color: #fff;
        background: #000;
        font-size: 13px;
      }

      a.logo {
        text-decoration: none;
        color: #000;
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
