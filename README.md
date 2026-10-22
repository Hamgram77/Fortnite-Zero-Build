# Fortnite-Zero-Build
Prazing Epic Games for the creation of Fortnite Zero Build

## Zero Build Field Guide

Zero Build is more than a game mode. It's a community.

This repository contains an independent, responsive information site for Fortnite Zero Build players. It covers weapon references, Battle Royale loot-pool reports, official updates, a multi-region tournament calendar, community-selected creators, and practical strategy. The interface is original and the project is not affiliated with or endorsed by Epic Games.

## Technology

- React and TypeScript
- Vite static build
- CSS with no UI framework
- Hash-based page navigation for reliable GitHub Pages hosting
- Local, typed data-provider layer with no backend and no secret keys

## Local development

Requirements: Node.js 22 or a currently supported LTS release and npm.

```bash
npm install
npm run dev
```

Vite prints the local preview URL. The development server uses root paths locally; the production build is configured for `/Fortnite-Zero-Build/`.

## Checks and production build

```bash
npm run lint
npm run typecheck
npm run build
npm run preview
```

The production output is written to `dist/`. `vite.config.ts` sets the repository-relative base path required by the GitHub Pages project URL.

## Data maintenance

The UI loads content through `src/providers/contentProvider.ts`, keeping presentation separate from the maintained data snapshot.

- Weapon references: `src/data/weapons.ts`
- Loot report: `src/data/loot.ts`
- Official updates: `src/data/updates.ts`
- Tournament calendar: `src/data/tournaments.ts`
- Creator directory: `src/data/creators.ts`
- Strategy guides: `src/data/guides.ts`

The Weapons page also includes a client-side 250-health damage calculator. The game-telemetry submission form is not exposed on the site while submission terms and a privacy policy are unavailable.

When updating data, change the source link, version context, and verification date together. Never fill an unknown field with a guess. Battle Royale information must not be labeled as Zero Build-specific unless its source confirms that scope.

The tournament page separates upcoming and past events, filters by region, mode, and platform, exposes source and eligibility notes, and creates all-day `.ics` downloads for confirmed dates. Exact local times appear only when Epic publishes a precise source-wide timestamp; otherwise visitors are directed to the regional schedule and the in-game Compete tab. Empty outlook cards explicitly identify periods for which Epic has not announced dates.

## Sources and limitations

Official Fortnite news and Epic Games Community update notes are the primary sources for announcements and availability. Selected rarity-specific weapon values are dated community-reference snapshots and are labeled with their version context in the interface.

The reviewed public APIs did not provide a verified, complete, browser-safe source for current Zero Build weapon stats and loot. The first version therefore uses manually maintained, source-attributed data instead of pretending to be live. No API key or secret is required.

Creator links are verified individually. Creator cards use confirmed Fortnite Icon Series outfits, featured outfits from official creator Locker Bundles, or site-owner-selected Fortnite outfits under Epic’s Fan Content Policy. Listing a creator does not imply endorsement or affiliation.

## GitHub Pages deployment

The production build prerenders a complete semantic HTML snapshot into `dist/index.html` before deployment. This keeps the existing interactive React interface while making the full maintained content readable without executing JavaScript. The repository and deployed artifact also include `.nojekyll`, an allow-all `robots.txt`, and a sitemap.

The included `.github/workflows/deploy.yml` workflow checks and builds the site, then deploys `dist/` when changes are pushed to `main` or the workflow is run manually.

After reviewing and committing the files:

1. On GitHub, open **Settings → Pages**.
2. Under **Build and deployment**, choose **GitHub Actions** as the source.
3. Push the reviewed commit to `main`.
4. Open the repository's **Actions** tab and wait for the Pages workflow to finish.
5. Visit `https://hamgram77.github.io/Fortnite-Zero-Build/`.

No commit or push is performed automatically by this project setup.

## Corrections

After publication, use the repository's GitHub Issues page for source corrections or creator-link updates. Do not post private contact information or credentials.
