import Page from "./main";
import { Tweets } from "../../lib/tweets";

const Post = ({ tweets, children }) => (
  <Page>
    <Tweets.Provider value={tweets}>
      <main>
        <article>{children}</article>
      </main>
    </Tweets.Provider>

    <style jsx>{`
      main {
        padding: 15px;
        font-size: 18px;
        border-left: 1px dashed rgba(66,71,112,0.09);
      }
      @media (max-width: 500px) {
        font-size: 16px;
      }

      article {
        scroll-margin-top: 50px;
      }

      :global(h1, h2) {
        font-family: 'M PLUS Rounded 1c', sans-serif;
        font-weight: bold;
      }

      @media (min-width: 500px) {
        max-width: 46rem;
        margin: auto;
      }
    `}</style>
  </Page>
);

export default Post;
