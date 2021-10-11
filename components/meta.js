import Head from "next/head";
import NProgress from "nprogress";
import Router from "next/router";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

const Meta = () => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </Head>
);

export default Meta;
