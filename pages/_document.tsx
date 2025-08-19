import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <meta name="description" content="Adithya Pappula - Full Stack Developer Portfolio" />
        <meta name="keywords" content="developer, portfolio, react, nextjs, typescript" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}