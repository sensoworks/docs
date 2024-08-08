import nextra from "nextra";

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/sensoworks-docs" : "",
  assetPrefix: isProd ? "/sensoworks-docs/" : "",
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
