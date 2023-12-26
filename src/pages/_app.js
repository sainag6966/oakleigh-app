import Head from 'next/head'
import LayoutWrapper from '@/components/LayoutWrapper'
import PasswordProtection from '@/components/PasswordProtected'
import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/Images/fav.svg" type="image/svg+xml" />
      </Head>
      <PasswordProtection>
        <LayoutWrapper>
          <NextNProgress
            color="#CDAA72"
            startPosition={0.3}
            stopDelayMs={200}
            height={2}
            options={{ showSpinner: false }}
          />
          <Component {...pageProps} />
        </LayoutWrapper>
      </PasswordProtection>
    </>
  )
}
