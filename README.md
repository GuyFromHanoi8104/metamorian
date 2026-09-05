# Metamorian

Marketing site for Metamorian, a Vietnam-based holding company in digital
transformation and technology. Its first product is
[Kollab](https://appkollab.com), a verified brand-creator marketplace.

Single-page React + Vite site. No backend, no auth, no forms. Nav (Home /
Products / About / Careers) switches an in-page view; it does not route.

## Commands

```bash
npm install
npm run dev      # Vite dev server on :5173
npm run build    # production build to dist/
npm run lint     # eslint
npm run preview  # serve the built dist/
```

## Deploy (Vercel)

Same flow as Kollab: push to `main`, Vercel builds and deploys it.

1. Create a Vercel project pointed at this repo, framework preset **Vite**
   (build `npm run build`, output `dist`). No environment variables.
2. Push to `main`. `vercel.json` rewrites everything to `index.html`.

## The logo

`src/components/Mark.jsx` is a **traced approximation** of the Metamorian mark,
rebuilt as `currentColor` SVG so it themes and scales. The original supplied
file (`src/assets/metamorian-lockup-source.jpg`) is a raster lockup on a baked
background, unusable on the dark theme.

To drop in the real artwork: replace the SVG body of `Mark.jsx` with the
official vector paths (keep `fill="currentColor"` / `stroke="currentColor"` so
both themes keep working), and regenerate `public/favicon.svg` to match. The
wordmark next to it is live text (`IBM Plex Sans`), not part of the image.

The Kollab "K" on the product card is `src/assets/kollab-mark.jpg`, shown in a
small light tile so it reads on either theme.

`src/components/AresMark.jsx` is likewise a traced approximation of the Ares
logo (broadcast tower + signal arcs), drawn as SVG in the brand colours
(`#9e3b2e` / `#c55a2c`). Source raster: `src/assets/ares-lockup-source.jpg`.
Swap in the official vector when it exists.

## Products

`src/App.jsx` holds the product list. Kollab is live and links to
`https://appkollab.com`; Ares is marked **Coming soon** with no link. When Ares
launches, give it a real URL and swap the `status-pill` for a `product-card__link`.
