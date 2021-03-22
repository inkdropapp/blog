import Image from "next/image";

const Logo = () => (
  <span className="logo">
    <Image src="/images/footprint.png" width={20} height={20} />
    <span className="title">Dev as Life</span>
    <style jsx>{`
      .logo {
        font-weight: bold;
        font-size: 18px;
        display: inline-flex;
        align-items: center;
        height: 30px;
        line-height: 20px;
        padding: 10px;
      }

      .logo:hover :global(img) {
        transform: rotate(20deg);
      }

      .title {
        font-family: "M PLUS Rounded 1c", sans-serif;
        font-weight: bold;
        margin-left: 6px;
      }

      svg {
        margin-right: 10px;
      }
    `}</style>
  </span>
);

export default Logo;
