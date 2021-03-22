import NextImage from "next/image";
import { useContext, createContext, useState } from "react";

const FigureContext = createContext({
  width: null,
  height: null,
});

const Figure = ({ desc, href, children, wide, height, width }) => {
  const [isZoomed, setZoomed] = useState(false);
  const handleClick = () => {
    setZoomed(!isZoomed);
  };

  const content =
    width && height ? (
      <div
        style={{
          position: "relative",
          display: "block",
          maxWidth: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width,
            paddingBottom: (height / width) * 100 + "%",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            margin: "auto",
            height: "auto",
            maxWidth: "100%",
          }}
        >
          <FigureContext.Provider value={{ width, height }}>
            {children}
          </FigureContext.Provider>
        </div>
      </div>
    ) : (
      children
    );

  return isZoomed ? (
    <div className="fullscreen">
      <div onClick={handleClick} className="backdrop">
        {content}
      </div>
      <style jsx>{`
        div {
          text-align: center;
        }
        .fullscreen {
          position: fixed;
          z-index: 100;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
          cursor: zoom-out;
        }
        .backdrop {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          background: #000000cc;
          left: 0;
          right: 0;
          top: 0;
          bottom: 0;
        }
      `}</style>
    </div>
  ) : (
    <div className={wide && "wide"}>
      {href ? (
        <a href={href} target="_blank">
          {content}
        </a>
      ) : (
        <div onClick={handleClick} className="zoomable content">
          {content}
        </div>
      )}
      {desc && <p className="desc">{desc}</p>}
      <style jsx>{`
        div {
          text-align: center;
        }
        .zoomable {
          cursor: zoom-in;
        }
        .content {
          margin-left: -15px;
          margin-right: -15px;
        }
        p.desc {
          font-size: 13px;
          color: #999;
          text-align: center;
          display: block;
          margin-top: 10px;
        }
        p.desc > :global(a) {
          color: #666;
        }
        .wide {
          position: relative;
        }
        .wide::before {
          width: 10000%;
          content: "";
          left: -1000px;
          height: 100%;
          position: absolute;
          background: #f2f2f2;
          z-index: -1;
          border-top: 1px dashed rgba(66, 71, 112, 0.09);
          border-bottom: 1px dashed rgba(66, 71, 112, 0.09);
        }
      `}</style>
    </div>
  );
};

const Image = ({ width = null, height = null, style, src }) => {
  const { width: contextWidth, height: contextHeight } = useContext(
    FigureContext
  );

  if (width == null) {
    width = contextWidth;
  }

  if (height == null) {
    height = contextHeight;
  }

  if (!height) {
    throw new TypeError("The height attribute is required");
  }

  if (!width) {
    throw new TypeError("The width attribute is required");
  }

  return (
    <div style={style}>
      <NextImage src={src} width={width} height={height} />
      <style jsx>{`
        div {
          margin: auto;
        }
      `}</style>
    </div>
  );
};

const Video = ({ src }) => (
  <div>
    <video autoPlay loop src={src} />
    <style jsx>{`
      video {
        max-width: 100%;
      }
    `}</style>
  </div>
);

export default Figure;
export { Image, Video };
