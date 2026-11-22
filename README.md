# Embry Development Wiki

Public documentation for the Embry Development products: FieldADE, HomeADE, Kingdom Guide and LightScan. Built with [Astro Starlight](https://starlight.astro.build) and deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push to `main`.

Live: https://wiki.embry.dev (a Worker in `host/` that forwards to GitHub Pages). The Pages address https://jtembry.github.io/embry-wiki/ still works, and a push to `main` still publishes there.

```
npm install
npm run dev      # http://localhost:4321/embry-wiki/
npm run build    # dist/
```

## Where things are

- Pages are Markdown under `src/content/docs/`. The sidebar is the `sidebar` list in `astro.config.mjs`; add a page there when you add a file.
- Release notes are not written here. `src/pages/fieldade/release-notes.astro` and `src/pages/homeade/release-notes.astro` read the JSON that the embry.dev site keeps (`src/data/*-releases.json` in `jtembry/embry.dev`) at build time, so one list feeds the product page, the App Store text and this wiki.
- Screenshots are the ones embry.dev serves (`https://embry.dev/work/...`); nothing is copied here.

## Rules

- This site is public. User-facing behavior only: what a screen shows, what a tap does, how to set something up. No ports, tokens, file paths of internal scripts, or security internals. Engineering notes stay in the private repos.
- House style is plain English: short words, active voice, one idea per sentence.
- A shipped FieldADE or HomeADE feature is not done until the wiki page that covers that screen says what changed.
