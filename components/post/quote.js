const Quote = ({ by, children }) => (
  <blockquote>
    <>
      {children}
      {by ? (
        <>
          <br />– {by}
        </>
      ) : null}
    </>
    <style jsx>{`
      blockquote {
        margin: 30px 0;
        color: #666;
        font-style: oblique;
        border-left: 1px solid black;
        padding-left: 20px;
        margin-left: -16px;
      }

      p {
        line-height: 28px;
      }
    `}</style>
  </blockquote>
);

export default Quote;
