import css from "styled-jsx/css";

const style = css.global`
  @import url("https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");

  :root {
    --codeFontFamily: Source Code Pro, Menlo, monospace;
    --roundFontFamily: "M PLUS Rounded 1c", sans-serif;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a[href] {
    color: var(--link-color);
    text-decoration: none;
    font-weight: bold;
    font-family: var(--roundFontFamily);
  }

  a[href]:hover {
    color: var(--link-hover-color);
  }
`;

export default style;
