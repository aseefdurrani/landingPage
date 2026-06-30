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

Pushes to `main` trigger the GitHub Actions workflow in `.github/workflows/deploy.yml`. You can also redeploy manually from the Actions tab via **workflow_dispatch**.

Repository settings (Settings → Pages):

- **Source:** GitHub Actions
- **Custom domain:** `aseefdurrani.com` (required for Actions-based deploys; the `public/CNAME` file alone is not used)

DNS for the apex domain should use GitHub Pages A records (`185.199.108.153`–`185.199.111.153`).
