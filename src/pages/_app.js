import Head from 'next/head'
import LayoutWrapper from '@/components/LayoutWrapper'
import PasswordProtection from '@/components/PasswordProtected'
import '@/styles/globals.css'
import NextNProgress from 'nextjs-progressbar'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
const stripePromise = loadStripe(
  'pk_test_51IdGbhGLGyyBwMWYc5xmFlYPVXQ6RK0TfPmi2f0MfSxqM8A9SOtJ0b89jgcmsgYCWA0e5UMcuUAXvT0lAAVVr6XZ00xDjpyMtg',
)
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
        <script
          type="text/javascript"
          src="//widget.trustpilot.com/bootstrap/v5/tp.widget.bootstrap.min.js"
          async
        ></script>
      </Head>
      <PasswordProtection>
        <Elements stripe={stripePromise}>
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
        </Elements>
      </PasswordProtection>
    </>
  )
}
