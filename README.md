# Sensoworks Documentation

A documentation site built with [Nextra](https://nextra.site/) version 4, powered by [Next.js](https://nextjs.org/).

## Features

- 📝 MDX-based documentation
- 🎨 Built-in dark mode support
- 🔍 Full-text search powered by Pagefind
- 📱 Responsive design
- ⚡ Fast static site generation

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm, yarn, or pnpm

### Installation

Clone the repository and install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the documentation site.

### Building for Production

To build the static site:

```bash
npm run build
```

This will:
1. Build the Next.js application with static export
2. Run the postbuild script to generate the Pagefind search index

The output will be in the `out` directory.

### Preview Production Build

After building, you can preview the production build locally:

```bash
npm run start
```

## Project Structure

```
├── app/                    # Next.js App Router
│   ├── [[...mdxPath]]/    # Dynamic MDX page routing
│   └── layout.tsx         # Root layout with Nextra theme
├── content/               # MDX documentation files
├── public/                # Static assets
├── .github/workflows/     # GitHub Actions
│   └── nextjs.yml        # Deployment workflow
├── next.config.ts        # Next.js configuration
└── mdx-components.tsx    # Custom MDX components
```

## Writing Documentation

Documentation pages are written in MDX format. Place your `.mdx` files in the `content` directory.

### Creating a New Page

1. Create a new `.mdx` file in the `content` directory
2. Add frontmatter with metadata (optional):
   ```mdx
   ---
   title: Page Title
   description: Page description
   ---
   
   # Your Content Here
   ```

### Organizing Content

Use `_meta.js` files to configure the sidebar navigation and page ordering. See the [Nextra documentation](https://nextra.site/docs/guide/organize-files) for more details.

## Deployment

This project is configured to automatically deploy to GitHub Pages when changes are pushed to the `main` branch.

### How It Works

1. Push your changes to the `main` branch
2. GitHub Actions workflow (`.github/workflows/nextjs.yml`) automatically triggers
3. The workflow:
   - Installs dependencies
   - Builds the Next.js static site
   - Generates the Pagefind search index
   - Deploys to GitHub Pages

### Manual Deployment

You can also manually trigger the deployment from the **Actions** tab in your GitHub repository by selecting the workflow and clicking "Run workflow".

### GitHub Pages Configuration

Ensure your repository has GitHub Pages enabled:

1. Go to your repository **Settings**
2. Navigate to **Pages** in the sidebar
3. Under "Build and deployment", select **GitHub Actions** as the source

## Learn More

- [Nextra Documentation](https://nextra.site/) - Learn about Nextra features and configuration
- [Next.js Documentation](https://nextjs.org/docs) - Learn about Next.js features and API
- [MDX Documentation](https://mdxjs.com/) - Learn about MDX syntax and capabilities

## License

© Sensoworks