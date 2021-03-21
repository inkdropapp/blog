const H = ({ id, level = 2, fontSize = 24, children }) => (
  <div id={id}>
    {React.createElement(
      `h${level}`,
      { style: { fontWeight: 700, fontSize } },
      <span>
        <a href={`#${id}`}>{'#'.repeat(level-1)}</a>
      </span>,
      children
    )}

    <style jsx>{`
      div {
        margin: 50px 0 25px -15px;
        padding-left: 10px;
        font-family: Helvetica Neue, Helvetica, Arial, "Lucida Grande",
          sans-serif;
      }

      span {
        margin-right: 6px;
        width: 15px;
        user-select: none;
      }

      a {
        text-decoration: none;
        color: #00000044;
      }
    `}</style>
  </div>
);

const H2 = H;
const H3 = props => H({ ...props, level: 3, fontSize: 20 });

export default H2;
export { H2, H3 };
