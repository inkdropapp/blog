import Post from "../../components/layouts/post";
import Quote from "../../components/post/quote";
import P from "../../components/post/paragraph";
import Tweet from "../../components/post/tweet";
import Header from "../../components/post/header";
import Code from "../../components/post/code";
import Snippet from "../../components/post/snippet";
import { H2 } from "../../components/post/heading";
import Figure, { Image } from "../../components/post/figure";
import { Ref, FootNotes, Note } from "../../components/post/footnotes";
import UL, { LI } from "../../components/post/bullets-list";
import YouTube from "../../components/post/youtube";
import Head from "next/head";
import getTweets from "../../lib/get-tweets";

export async function getStaticProps() {
  const tweets = await getTweets(Page);
  return { props: { tweets } };
}

const Page = ({ tweets }) => (
  <Post tweets={tweets}>
    <Header
      title="How I thrived as an introverted developer"
      date="January 2, 2020"
    />
    <Head>
      <meta property="og:title" content="201aaa in Review" />
      <meta property="og:site_name" content="Guillermo Rauch's blog" />
      <meta
        property="og:description"
        content="The evolution of our company, our open-source work, interesting news and lessons in product design and engineering in 2019."
      />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@rauchg" />
      <meta
        property="og:image"
        content="https://rauchg.com/og/2019-in-review.png"
      />
    </Head>

    <section name="fbbe" class="section section--body section--first">
      <div class="section-divider">
        <hr class="section-divider" />
      </div>
      <div class="section-content">
        <div class="section-inner sectionLayout--insetColumn">
          <h3
            name="75ae"
            id="75ae"
            class="graf graf--h3 graf--leading graf--title"
          >
            How I thrived as an introverted developer
          </h3>
          <figure
            name="e57f"
            id="e57f"
            class="graf graf--figure graf-after--h3"
          >
            <img
              class="graf-image"
              data-image-id="1*4f3S6SiIUdtWm96YjOdA-A.jpeg"
              data-width="2000"
              data-height="1333"
              data-is-featured="true"
              src="https://cdn-images-1.medium.com/max/800/1*4f3S6SiIUdtWm96YjOdA-A.jpeg"
              alt=""
            />
          </figure>
          <p name="c021" id="c021" class="graf graf--p graf-after--figure">
            Hi, it’s{" "}
            <a
              href="https://twitter.com/inkdrop_app"
              data-href="https://twitter.com/inkdrop_app"
              class="markup--anchor markup--p-anchor"
              rel="noopener"
              target="_blank"
            >
              Takuya
            </a>{" "}
            here. I’m a software developer, an introvert, and happy.
            <br />
            You don’t have to become an extrovert person in order to become a
            successful developer.
          </p>
          <h3 name="0598" id="0598" class="graf graf--h3 graf-after--p">
            TL;DR
          </h3>
          <ul class="postList">
            <li name="691b" id="691b" class="graf graf--li graf-after--h3">
              I’m fine with being introverted
            </li>
            <li name="8ec4" id="8ec4" class="graf graf--li graf-after--li">
              Introverts’ trait is their reflecting thoughts
            </li>
            <li name="8cb3" id="8cb3" class="graf graf--li graf-after--li">
              How I joined Yahoo! Japan — Showed what I built
            </li>
            <li name="e7e7" id="e7e7" class="graf graf--li graf-after--li">
              Keep publishing your work to make and retain connections with
              people
            </li>
            <li name="9c20" id="9c20" class="graf graf--li graf-after--li">
              How to work remotely with few meetings
            </li>
          </ul>
          <h3 name="1f3b" id="1f3b" class="graf graf--h3 graf-after--li">
            I’m fine with being introverted
          </h3>
          <p name="face" id="face" class="graf graf--p graf-after--h3">
            I hate telephones. I have never made a sales call to get a freelance
            job. I have a fragile temperament. I don’t have so many friends. I
            can’t be always friendly to everyone. And I don’t like parties.
            Every time, I need to consider for more than 24 hours if I should
            join a party. I’m extremely nervous when I talk with unfamiliar
            people. I can hardly make eye contact when talking to people.
          </p>
          <p name="797f" id="797f" class="graf graf--p graf-after--p">
            On the other hand, being extroverted looks great. They look enjoying
            every day among a lot of their friends. They can get great
            opportunities because they can express themselves very well. So, you
            might think extroverts are always better than introverts.
          </p>
          <p name="8309" id="8309" class="graf graf--p graf-after--p">
            But, no, that’s a bad stereotype and the black and whitening of
            psychology.
            <br />
            I’m not anti-social. I love people. But I just can’t behave like
            extroverts.
            <br />
            What I want to say is that you can grow in a developer career
            despite being introverted. Being introverted is a trait rather than
            a disadvantage. In this video, I’m gonna talk about how I thrived as
            an introverted developer. It’s totally fine to be an introvert if
            you want to become a successful developer.
          </p>
          <p name="a666" id="a666" class="graf graf--p graf-after--p">
            In my daily life, I rarely talk with people except for my wife. And,
            I am about to forget Japanese vocabularies. But, as you can see, I’m
            doing good. I’m spending a comfortable life, doing what I love, and
            building apps that I want to use. In the previous video, I’ve shared
            my experience on how I earned $17,000 in a month as a freelancer.
            So, it’s possible. And currently, I’m running my own
            software-as-a-service called{" "}
            <a
              href="https://www.inkdrop.app/"
              data-href="https://www.inkdrop.app/"
              class="markup--anchor markup--p-anchor"
              rel="noopener"
              target="_blank"
            >
              Inkdrop
            </a>
            , which is a simple Markdown note-taking app. And it makes enough
            profit, so I don’t need to make sales calls or send cold emails to
            get freelance jobs.
          </p>
          <h3 name="6eb2" id="6eb2" class="graf graf--h3 graf-after--p">
            Introverts’ trait is their reflecting thoughts
          </h3>
          <figure
            name="6177"
            id="6177"
            class="graf graf--figure graf-after--h3"
          >
            <img
              class="graf-image"
              data-image-id="1*g-b0nkwpZY3n0I54fyP3vg.jpeg"
              data-width="1912"
              data-height="1070"
              src="https://cdn-images-1.medium.com/max/800/1*g-b0nkwpZY3n0I54fyP3vg.jpeg"
              alt=""
            />
          </figure>
          <p name="020e" id="020e" class="graf graf--p graf-after--figure">
            When I was young, I was so sad that I can’t make “good friendships”.
            <br />I tried hard to go along with people but soon I got exhausted.
            My energy to hang out with friends is extremely low. My interests
            usually didn’t match with other people’s. I really really envied
            those who are active with close friends.
          </p>
          <p name="f61f" id="f61f" class="graf graf--p graf-after--p">
            But I found myself happy when reading books, drawing pictures,
            shooting photos, playing rock music with guitar and drums, and
            coding software.
            <br />
            Creating things was so much fun for me. I could sit at a PC for a
            long extended time, through the night. My mom couldn’t understand
            that and asked me like “Why do you need to do such a thing for a
            long time?” That’s just because it was fun to do. It was fun to play
            music, it was fun to draw illustrations, and it was so fun to build
            things with programming. I couldn’t stop doing them because I didn’t
            get exhausted unlike being with friends. I think this is the ability
            of introverts that extroverts don’t have.
          </p>
          <p name="d380" id="d380" class="graf graf--p graf-after--p">
            Extroverts often find joy in socializing and interacting with the
            outside world. They can thrive best when there are action and
            movement. But they don’t like sitting at a PC for a long time or
            focusing on a lot of tasks alone.
          </p>
          <p name="10a5" id="10a5" class="graf graf--p graf-after--p">
            Introvert dominant people thrive in spaces where they can reflect,
            act and then reflect again. Something like, how do I feel, what is
            this feeling, what did happen exactly, why doesn’t it work, why is
            it so beautiful, how to improve this, how can I express this idea….
            They do those reflectings even while being with their friends. So,
            that’s why they tend to be soon exhausted. They need the mental
            space in order to pause and re-energize themselves. But people
            usually don’t care that or wait for you.
          </p>
          <p name="d891" id="d891" class="graf graf--p graf-after--p">
            But this habit gives you great creativity later, even if it’s
            currently painful for you. Trust me, you are ok.
          </p>
          <p name="4f35" id="4f35" class="graf graf--p graf-after--p">
            Olympic gold medalist David Hemery reports that almost nine out of
            ten top athletes identify as introverts:
          </p>
          <blockquote
            name="1372"
            id="1372"
            class="graf graf--pullquote graf-after--p"
          >
            A remarkably distinguishing feature is that a large proportion, 89
            percent of these sports achievers, classed themselves as introverts
          </blockquote>
          <blockquote
            name="393a"
            id="393a"
            class="graf graf--pullquote graf-after--pullquote"
          >
            — David Hemery
          </blockquote>
          <p name="cb33" id="cb33" class="graf graf--p graf-after--pullquote">
            And author Eric Barker says:
          </p>
          <blockquote
            name="e268"
            id="e268"
            class="graf graf--blockquote graf-after--p"
          >
            The superpower of introverts is that they are far more likely to
            become experts in their field.
          </blockquote>
          <blockquote
            name="2c60"
            id="2c60"
            class="graf graf--blockquote graf-after--blockquote"
          >
            — Barking Up the Wrong Tree: The Surprising Science Behind Why
            Everything You Know About Success Is (Mostly) Wrong by Eric Barker
          </blockquote>
          <p name="d837" id="d837" class="graf graf--p graf-after--blockquote">
            And Paul Graham says:
          </p>
          <blockquote
            name="dc2d"
            id="dc2d"
            class="graf graf--blockquote graf-after--p"
          >
            The most important thing is to be able to think what you want, not
            to say what you want.
          </blockquote>
          <blockquote
            name="7946"
            id="7946"
            class="graf graf--blockquote graf-after--blockquote"
          >
            — Hackers &amp; Painters
          </blockquote>
          <p name="e96a" id="e96a" class="graf graf--p graf-after--blockquote">
            So, you don’t have to be fluent to express yourself. To become a
            great hacker, just think and build what you want. Inside your head,
            anything is allowed.
          </p>
          <h3 name="488b" id="488b" class="graf graf--h3 graf-after--p">
            Tips to thrive
          </h3>
          <p name="bc12" id="bc12" class="graf graf--p graf-after--h3">
            Well, let’s talk about the strategy to thrive as an introverted
            developer. The key is just to keep building things and publishing
            them. You don’t need to make a ground-shaking thing from the
            beginning. You can start out by making something tiny and simple.
          </p>
          <h3 name="a91a" id="a91a" class="graf graf--h3 graf-after--p">
            How I joined Yahoo! Japan
          </h3>
          <figure
            name="4f23"
            id="4f23"
            class="graf graf--figure graf-after--h3"
          >
            <img
              class="graf-image"
              data-image-id="1*pBBj0ScXJSNlWYHL_gsfzA.jpeg"
              data-width="1916"
              data-height="1074"
              src="https://cdn-images-1.medium.com/max/800/1*pBBj0ScXJSNlWYHL_gsfzA.jpeg"
              alt=""
            />
          </figure>
          <p name="3a64" id="3a64" class="graf graf--p graf-after--figure">
            I joined Yahoo! Japan about 10 years ago as a new college graduate.
            <br />
            Companies want to know you are competent to solve real-world
            problems by coding. And showing what you built is the best way to
            prove that through a job interview. Because many people don’t have
            such the public works and they just tell what they learned in the
            college instead of what they built. So, showing your works would be
            impressive for the interviewers. I explained what I built during the
            interview. I talked about:
          </p>
          <ul class="postList">
            <li name="8577" id="8577" class="graf graf--li graf-after--p">
              What problem I solved
            </li>
            <li name="d0cc" id="d0cc" class="graf graf--li graf-after--li">
              What was the challenge
            </li>
            <li name="5bfa" id="5bfa" class="graf graf--li graf-after--li">
              How I tackled it
            </li>
            <li name="b73d" id="b73d" class="graf graf--li graf-after--li">
              What I learned
            </li>
          </ul>
          <p name="a676" id="a676" class="graf graf--p graf-after--li">
            from my projects. For example, I made{" "}
            <a
              href="https://www.craftz.dog/works/pichu2"
              data-href="https://www.craftz.dog/works/pichu2"
              class="markup--anchor markup--p-anchor"
              rel="noopener"
              target="_blank"
            >
              a Twitter client for iPhone Safari in 2010
            </a>
            . I made it because there wasn’t a solid browser client for Twitter
            yet on the internet. It was challenging for me to build an
            AJAX-based web app.
            <br />
            Since HTML5 APIs or ReactJS isn’t available yet at that time,
            manipulating DOMs based on the server response with jQuery was a
            cool way to build a product. I used LAMP stack, which is a
            server-side stack with Linux, Apache, MySQL, and PHP. And it
            successfully got traction and attracted 1,000 people in Japan. I’ve
            learned how to build a web app for small touch screens.
            <br />
            With this work, I proved my competence to build an attractive web
            app from scratch.
          </p>
          <p name="8157" id="8157" class="graf graf--p graf-after--p">
            So, just following some tutorials is not enough. You should build
            your own things yourself.
          </p>
          <h3 name="ee6d" id="ee6d" class="graf graf--h3 graf-after--p">
            Keep publishing your work
          </h3>
          <p name="e760" id="e760" class="graf graf--p graf-after--h3">
            When I’m freelancing, I kept publishing my personal works on the
            internet. It’s important to appeal to people that you make
            interesting things. Because your friends are actually checking them.
          </p>
          <p name="e1d8" id="e1d8" class="graf graf--p graf-after--p">
            I’ve got all the past freelance jobs through referrals via my
            friends. I said my friends, but they are not my close friends.
            Actually, I rarely contacted them, but we were aware of each other
            indirectly on social media. Then, they remember you, and once
            they’ve got a job to ask you, they will send a message to you. Or,
            they will introduce another person who is interested in working with
            you.
          </p>
          <p name="714e" id="714e" class="graf graf--p graf-after--p">
            So, no matter how small your achievement is, publish it!
          </p>
          <p name="aefa" id="aefa" class="graf graf--p graf-after--p">
            You don’t have to make a lot of connections like thousands. I have
            only 300 friends on facebook. You should connect with people who
            tell you they love your works. I very occasionally join a meetup and
            make some friends. Joining a hackathon would be a great way to make
            friends as well. And also, giving a talk at a conference attracts
            some people.
          </p>
          <p name="16c6" id="16c6" class="graf graf--p graf-after--p">
            Then, your friend will introduce someone who is looking for a
            software developer.
          </p>
          <h3 name="2261" id="2261" class="graf graf--h3 graf-after--p">
            How to work remotely with few meetings
          </h3>
          <figure
            name="3467"
            id="3467"
            class="graf graf--figure graf-after--h3"
          >
            <img
              class="graf-image"
              data-image-id="1*heB_d2hUo60Ww_D7fW2qTQ.png"
              data-width="1142"
              data-height="561"
              src="https://cdn-images-1.medium.com/max/800/1*heB_d2hUo60Ww_D7fW2qTQ.png"
              alt=""
            />
          </figure>
          <p name="3944" id="3944" class="graf graf--p graf-after--figure">
            As you may know, remote work is a great work-style for introverts.
            You don’t have to meet people every day, which is great. I have some
            tips for doing remote work.
          </p>
          <p name="69c8" id="69c8" class="graf graf--p graf-after--p">
            Most of my clients were startups. So, my job was basically to build
            a service from scratch. For example, building a new mobile app,
            including UI design and server-side program. Or, building a web
            service using Ruby on Rails with Slim and AngularJS.
          </p>
          <p name="2030" id="2030" class="graf graf--p graf-after--p">
            As I talked in the previous video, I only had contract jobs with
            project-based fees instead of hourly fees. First, I hold a meeting
            and hear what the client wants to make. After that, I have meetings
            with the client only once or twice a month. I use a voice chat or a
            video chat if I thought it doesn’t need to talk face-to-face with
            them.
          </p>
          <p name="6997" id="6997" class="graf graf--p graf-after--p">
            The point is that I frequently reported my work progress in order
            not to let the client be worried about me abandoning the work. When
            I’m making a prototype, I often send the screenshots via Slack or
            Email. Then, I deploy it somewhere so that the client can try it
            anytime. If it were a mobile app, I use TestFlight to show the
            progress. Once they trusted me, those frequent reports are no longer
            necessary.
          </p>
          <p
            name="1147"
            id="1147"
            class="graf graf--p graf-after--p graf--trailing"
          >
            Writing documentation significantly helps you reduce the
            communication cost because it answers questions on your behalf. So,
            I write documentation in as much detail as possible so it’ll be
            still ok even if I quit the project. The amount of the documentation
            would be like 20~30 pages of Keynote. And I send it to the client a
            week before the meeting and let them read it. So, I only need to
            clarify some points in the meeting and I can avoid explain them over
            and over again.
          </p>
        </div>
      </div>
      <section name="528a" class="section section--body">
        <div class="section-divider">
          <hr class="section-divider" />
        </div>
        <div class="section-content">
          <div class="section-inner sectionLayout--insetColumn">
            <p name="5b1a" id="5b1a" class="graf graf--p graf--leading">
              So, that’s how I thrived as an introverted developer. Hope that’s
              helpful!
            </p>
          </div>
        </div>
      </section>
      <section name="061e" class="section section--body section--last">
        <div class="section-divider">
          <hr class="section-divider" />
        </div>
        <div class="section-content">
          <div class="section-inner sectionLayout--insetColumn">
            <h4 name="6c55" id="6c55" class="graf graf--h4 graf--leading">
              Thank you so much for supporting Inkdrop!
            </h4>
            <ul class="postList">
              <li name="747e" id="747e" class="graf graf--li graf-after--h4">
                Inkdrop Website:{" "}
                <a
                  href="https://www.inkdrop.app/"
                  data-href="https://www.inkdrop.app/"
                  class="markup--anchor markup--li-anchor"
                  rel="noopener"
                  target="_blank"
                >
                  https://www.inkdrop.app/
                </a>
              </li>
              <li name="50e9" id="50e9" class="graf graf--li graf-after--li">
                Send feedback:{" "}
                <a
                  href="https://forum.inkdrop.app/"
                  data-href="https://forum.inkdrop.app/"
                  class="markup--anchor markup--li-anchor"
                  rel="noopener"
                  target="_blank"
                >
                  https://forum.inkdrop.app/
                </a>
              </li>
              <li name="e982" id="e982" class="graf graf--li graf-after--li">
                Contact us:{" "}
                <a
                  href="mailto:contact@inkdrop.app"
                  data-href="mailto:contact@inkdrop.app"
                  class="markup--anchor markup--li-anchor"
                  target="_blank"
                >
                  contact@inkdrop.app
                </a>
              </li>
              <li name="f2c2" id="f2c2" class="graf graf--li graf-after--li">
                Twitter:{" "}
                <a
                  href="https://twitter.com/inkdrop_app"
                  data-href="https://twitter.com/inkdrop_app"
                  class="markup--anchor markup--li-anchor"
                  rel="noopener"
                  target="_blank"
                >
                  https://twitter.com/inkdrop_app
                </a>
              </li>
              <li name="4fbe" id="4fbe" class="graf graf--li graf-after--li">
                Instagram:{" "}
                <a
                  href="https://www.instagram.com/craftzdog/"
                  data-href="https://www.instagram.com/craftzdog/"
                  class="markup--anchor markup--li-anchor"
                  rel="noopener"
                  target="_blank"
                >
                  https://www.instagram.com/craftzdog/
                </a>
              </li>
              <li name="a843" id="a843" class="graf graf--li graf-after--li">
                Discord community:{" "}
                <a
                  href="https://discord.gg/S7hDmvh"
                  data-href="https://discord.gg/S7hDmvh"
                  class="markup--anchor markup--li-anchor"
                  rel="nofollow noopener noopener noopener noopener noopener noopener noopener"
                  target="_blank"
                >
                  https://discord.gg/S7hDmvh
                </a>
              </li>
            </ul>
            <figure
              name="a1a2"
              id="a1a2"
              class="graf graf--figure graf-after--li"
            >
              <a
                href="https://www.youtube.com/c/devaslife"
                data-href="https://www.youtube.com/c/devaslife"
                class="graf-imageAnchor"
                data-action="image-link"
                data-action-observe-only="true"
                rel="noopener"
                target="_blank"
              >
                <img
                  class="graf-image"
                  data-image-id="1*r-daItizHpAU-fQZk3ISag.png"
                  src="https://cdn-images-1.medium.com/max/800/1*r-daItizHpAU-fQZk3ISag.png"
                  alt=""
                />
              </a>
            </figure>
            <figure
              name="b307"
              id="b307"
              class="graf graf--figure graf-after--figure graf--trailing"
            >
              <a
                href="http://eepurl.com/dNgJo6"
                data-href="http://eepurl.com/dNgJo6"
                class="graf-imageAnchor"
                data-action="image-link"
                data-action-observe-only="true"
                rel="noopener"
                target="_blank"
              >
                <img
                  class="graf-image"
                  data-image-id="1*m_OQH1uPXG_JcuW9BTe82A.png"
                  data-width="1192"
                  data-height="438"
                  src="https://cdn-images-1.medium.com/max/800/1*m_OQH1uPXG_JcuW9BTe82A.png"
                  alt=""
                />
              </a>
            </figure>
          </div>
        </div>
      </section>
    </section>

    <style jsx>{`
      table {
        border-collapse: collapse;
      }

      table td,
      table th {
        border: 1px solid #ededed;
        padding: 10px;
        font-size: 14px;
      }

      table td:first-child {
        text-align: center;
        font-weight: bold;
      }

      table th {
        text-align: left;
        font-size: 12px;
        text-transform: uppercase;
      }
    `}</style>
    <FootNotes>
      <Note id="1">
        Servers can be so hard to roll out without downtime that a keynote at
        this year's KubeCon starts with the glaring admission:{" "}
        <b>"Noticing your customers receive 503's every now-and-then?"</b>. By
        not needing to rotate pods, shut down containers, handle signals, wait
        for grace periods, configure and execute liveliness probes… static is
        also <b>faster and safer to roll</b>.
      </Note>

      <Note id="2">
        When the set of pages to pre-compute is too large and would make build
        times prohibitive, it's still probably a good idea to pre-compute your
        most critical public pages, and do the rest <em>asynchronously</em>.
      </Note>

      <Note id="3">
        Crucially, websites and apps that serve the same static markup and code
        to all users have a drastically simpler security model, which means…
        static is also <b>more secure</b>.
      </Note>

      <Note id="4">
        Our infrastructure makes use of CosmosDB, a serverless database by
        Microsoft Azure with remarkably (consistent) low-latency and effectively
        infinite horizontal scalability.
      </Note>

      <Note id="5">
        Perhaps the most fundamental way in which a mobile web app on iOS Safari
        cannot ever be "native" like an app is in the way the viewport size is
        dynamic and shifts as you scroll to reveal different toolbars.
      </Note>

      <Note id="6">
        Speaking of <a href="#native-means-platform-fidelity">native</a>, I
        intuit that, rather than native code generation, native mobile apps owe
        their generally better performance to the a rich standard library of
        well-optimized UI components. Go, when compared to Node.js+npm, has
        similarly demonstrated the success of a great stdlib for common,
        performance-critical needs.
      </Note>

      <Note id="7">
        What you do in{" "}
        <a href="https://swr.now.sh/#basic-data-loading" target="_blank">
          one line of SWR
        </a>
        , you tend to do in a few dozen lines of Redux.
      </Note>
    </FootNotes>
  </Post>
);

export default Page;
