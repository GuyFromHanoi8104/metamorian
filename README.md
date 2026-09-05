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
