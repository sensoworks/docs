import nextra from "nextra";

const nextConfig = {
  basePath: "/docs",
  assetPrefix: "/docs/",
  output: "export",
  images: {
    unoptimized: true,
  },
};

const withNextra = nextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  defaultShowCopyCode: true,
});

export default withNextra(nextConfig);
