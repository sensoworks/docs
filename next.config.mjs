import nextra from "nextra";

const nextConfig = {
  basePath: "/sensoworks-docs",
  assetPrefix: "/sensoworks-docs/",
  output: "export",
  images: {
    unoptimized: true,
  },
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

export default withNextra(nextConfig);
