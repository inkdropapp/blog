import css from "styled-jsx/css";

const style = css.global`
  @import url('https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap');

  body {
    font-family: -apple-system, BlinkMacSystemFont, sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  a[href] {
    color: var(--link-color);
  }
`;

export default style;
