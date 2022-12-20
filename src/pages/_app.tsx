import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Amigo secreto</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
