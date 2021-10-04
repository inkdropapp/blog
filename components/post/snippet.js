import Prism from "prism-react-renderer/prism";
import Highlight, { defaultProps } from "prism-react-renderer";
import THEME from "prism-react-renderer//themes/shadesOfPurple";
(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs");
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-java");
require("prismjs/components/prism-kotlin");
require("prismjs/components/prism-swift");
/*
require("prismjs/components/prism-objectivec");
require("prismjs/components/prism-cpp");
 */

const Snippet = ({
  className,
  highlight,
  children,
  smallText = false,
  scroll = true,
  caption = null
}) => {
  const highlightedLines = highlight ? highlight.split(",").map(Number) : [];
  const language = (className || "")
    .replace(/language-/, "")
    .replace("-", "")
    .replace("c++", "cpp");
  return (
    <div className="snippet">
      <pre
        className={`
            ${scroll ? "" : "no-scroll"}
            ${smallText ? "small-text" : ""}
          `}
      >
        {language ? (
          <Highlight
            {...defaultProps}
            code={children.trim()}
            language={language}
            theme={THEME}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <code className={className} style={{ ...style }}>
                {tokens.map((line, i) => (
                  <div
                    className="line"
                    key={i}
                    {...getLineProps({ line, key: i })}
                    style={
                      highlightedLines.includes(i + 1)
                        ? {
                            background: "var(--c-highlight)",
                            margin: "0 -1rem",
                            padding: "0 1rem"
                          }
                        : null
                    }
                  >
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token, key })} />
                    ))}
                  </div>
                ))}
              </code>
            )}
          </Highlight>
        ) : (
          <code>{children}</code>
        )}
      </pre>

      {caption != null ? <p>{caption}</p> : null}

      <style jsx>{`
        pre {
          line-height: 22px;
          background: #2d2a55;
          padding: 20px;
          margin: 0 -15px 10px -15px;
          overflow-x: auto;
          border-radius: 8px;
          font-size: 14px;
        }

        code {
          font-family: var(--codeFontFamily);
        }

        pre.no-scroll {
          white-space: pre-wrap;
          word-break: break-all;
          overflow: none;
        }

        pre.small-text {
          font-size: 14px;
        }

        .snippet {
          margin-bottom: 20px;
        }

        p {
          font-size: 14px;
          color: #999;
          text-align: center;
          margin: 0;
          padding: 0;
        }

        p :global(code) {
          color: #333;
        }

        code {
          color: #fff;
        }
      `}</style>
    </div>
  );
};

export default Snippet;
