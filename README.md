# aseefdurrani.com

Personal portfolio site built with Next.js 15, TypeScript, and Tailwind CSS. Deployed to GitHub Pages at [aseefdurrani.com](https://aseefdurrani.com).

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

Static export for GitHub Pages:

```bash
npm run build
```

Output is written to `out/`.

## Deploy

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`.

Ensure GitHub Pages source is set to **GitHub Actions** in repository settings.
