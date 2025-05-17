import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Preconnect to critical origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical fonts with display swap */}
        <link 
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" 
          rel="stylesheet"
          media="print"
          onLoad="this.media='all'"
        />
        
        {/* Add DNS prefetch for third-party domains */}
        <link rel="dns-prefetch" href="https://res.cloudinary.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
} 