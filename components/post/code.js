const Code = ({ children }) => (
  <code>
    {children}
    <style jsx>{`
      code {
        color: #2c3a57;
        padding: 2px 4px 3px;
        border-radius: 2px;
        font-size: 15px;
        background: #e6ecf2;
        font-family: var(--codeFontFamily);
        font-size: 0.95em;
      }

      code :global(> a) {
        color: #2c3a57;
      }
    `}</style>
  </code>
);

export default Code;
