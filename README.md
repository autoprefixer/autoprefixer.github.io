# Autoprefixer Online

Interactive web demo for [Autoprefixer](https://github.com/postcss/autoprefixer).

Paste CSS, choose a [Browserslist](https://github.com/browserslist/browserslist)
query, and see the prefixed output immediately in the browser.

## Live Site

[autoprefixer.github.io](https://autoprefixer.github.io/)

## What Is Inside

- A small Vite app powered by Autoprefixer and PostCSS.
- Browser-side CSS processing, so the demo works without a backend.
- Browserslist input with a link to inspect the selected browsers on
  [browsersl.ist](https://browsersl.ist/).
- Localized pages for English, Russian, French, Brazilian Portuguese, and
  Simplified Chinese.
- Static output generated into `docs/` for GitHub Pages.

## Getting Started

Install dependencies:

```sh
npm install
```

Run the development server:

```sh
npm run dev
```

Build the static site:

```sh
npm run build
```

Preview the generated `docs/` build:

```sh
npm run preview
```

## Project Structure

```text
.
├── index.html          # English page
├── ru/                 # Russian page
├── fr/                 # French page
├── pt-br/              # Brazilian Portuguese page
├── zh-cn/              # Simplified Chinese page
├── src/                # JavaScript, SCSS, and app configuration
├── public/             # Static assets copied by Vite
└── docs/               # Built site for GitHub Pages
```

## Development Notes

- The default demo CSS and browser target are defined in `src/config.js`.
- Vite builds every localized HTML file through `vite.config.js`.
- `npm run build` clears and recreates `docs/`, so expect generated assets to
  change after a build.
- The site enables Autoprefixer's grid option for the demo output.

## Contributing

Small fixes are welcome: copy improvements, translation updates, UI tweaks, and
dependency maintenance all help keep the demo useful.

When changing user-facing text, update the matching localized HTML files where
possible. When changing app behavior, run a local build before opening a pull
request.

## Related Projects

- [Autoprefixer](https://github.com/postcss/autoprefixer)
- [PostCSS](https://github.com/postcss/postcss)
- [Browserslist](https://github.com/browserslist/browserslist)
