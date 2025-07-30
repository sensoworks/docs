export default {
  logo: (
    <img
      src="/docs/sensoworks_logo.png"
      alt="Sensoworks Logo"
      style={{ height: 50 }}
    />
  ),
  head: (
    <>
      <title>Sensoworks</title>
      <meta property="og:title" content="Sensoworks" />
      <meta property="og:description" content="The Sensoworks documentation" />
      <link rel="icon" href="/docs/sensoworks_logo_192x192.png"></link>
    </>
  ),
  project: {
    link: "https://github.com/sensoworks",
  },
  sidebar: {
    toggleButton: true,
  },
  footer: {
    text: (
      <span>
        {new Date().getFullYear()} ©{" "}
        <a href="https://sensoworks.com" target="_blank">
          Sensoworks
        </a>
        .
      </span>
    ),
  },
};
