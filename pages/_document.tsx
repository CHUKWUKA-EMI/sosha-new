import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta name="description" content="A Social media platform" />
      </Head>
      <body
        className={`overflow-x-hidden dark:bg-black bg-[#dcd7cd]
        `}
      >
        <Main />
        <NextScript />
        <div id="modal"></div>
      </body>
    </Html>
  );
}
