import Head from 'next/head';
import type { AppProps } from 'next/app';
import "../app/globals.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <title>My next</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp;

