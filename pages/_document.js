import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/mqn0gln.css" />
      </Head>
      <body>
        <style>
          {`font-family: &quot;pirulen&quot;, sans-serif;
          font-weight: 400;
          font-style: normal;`}
        </style>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
