import { site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted sm:flex-row">
        <p>
          © {year}{" "}
          <a
            href="#home"
            className="transition-colors hover:text-accent"
          >
            {site.identity.name}
          </a>
          . All rights reserved.
        </p>
        <p className="font-mono text-xs">
          Built with Next.js · Deployed on GitHub Pages
        </p>
      </div>
    </footer>
  );
}
