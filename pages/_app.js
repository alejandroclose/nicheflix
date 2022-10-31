import '../styles/globals.css'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
  return (
  <>
<Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-98Q8PXTNZ4"></Script>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-98Q8PXTNZ4', {
            page_path: window.location.pathname,
          });
        `,
        }}
    />

<Component {...pageProps} />
  </>
  )
}

export default MyApp
