import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Banner, Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
};

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>;
const navbar = (
  <Navbar
    logo={
      <img
        src="/docs/sensoworks_logo.png"
        alt="Sensoworks Logo"
        style={{ height: 50 }}
      />
    }
    // ... Your additional navbar options
  />
);
const footer = (
  <Footer>
    <span>
      {new Date().getFullYear()} ©{" "}
      <a href="https://sensoworks.com" target="_blank">
        Sensoworks
      </a>
      .
    </span>
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html
      // Not required, but good for SEO
      lang="en"
      // Required to be set
      dir="ltr"
      // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
      suppressHydrationWarning
    >
      <Head>
        <title>Sensoworks</title>
        <meta property="og:title" content="Sensoworks" />
        <meta
          property="og:description"
          content="The Sensoworks documentation"
        />
        <link rel="icon" href="/docs/sensoworks_logo_192x192.png"></link>
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap()}
          // docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
          footer={footer}
          // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
