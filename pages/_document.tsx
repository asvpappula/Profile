import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.svg" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <meta name="description" content="Adithya Pappula - Full Stack Developer & AI Engineer" />
        <meta name="keywords" content="Adithya Pappula, Full Stack Developer, AI Engineer, React, Python, Machine Learning" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Adithya Pappula - Full Stack Developer & AI Engineer" />
        <meta property="og:description" content="Experienced Full Stack Developer and AI Engineer specializing in React, Python, and Machine Learning solutions." />
        <meta property="og:image" content="/favicon.svg" />
        <meta property="og:url" content="https://profile-tau-lac.vercel.app" />
        <meta property="og:site_name" content="Adithya Pappula Portfolio" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="Adithya Pappula - Full Stack Developer & AI Engineer" />
        <meta name="twitter:description" content="Experienced Full Stack Developer and AI Engineer specializing in React, Python, and Machine Learning solutions." />
        <meta name="twitter:image" content="/favicon.svg" />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}