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
  // contentDirBasePath: "/docs",
  defaultShowCopyCode: true,
});

export default withNextra(nextConfig);
