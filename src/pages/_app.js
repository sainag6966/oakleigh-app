import Head from 'next/head'
import LayoutWrapper from '@/components/LayoutWrapper'
import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap" rel="stylesheet" />
      </Head>
      <LayoutWrapper>
      <Component {...pageProps} />
      </LayoutWrapper>
    </>
  )
}
