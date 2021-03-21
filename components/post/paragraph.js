const Paragraph = ({ children }) => (
  <p>
    {children}
    <style jsx>{`
      p {
        margin: 20px 0;
        line-height: 1.5;
        text-align: justify;
        text-indent: 1ex;
      }
    `}</style>
  </p>
);

export default Paragraph;
