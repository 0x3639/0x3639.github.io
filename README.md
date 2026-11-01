# 0x3639.com

Contact page and PGP public key for 0x3639. One static HTML page, built with
[Astro](https://astro.build), served from GitHub Pages at
[0x3639.com](https://0x3639.com).

## Layout

```
src/
  data/site.ts        every string on the page: channels, key, links
  layouts/Base.astro  <head>, page frame
  components/         one file per section of the page
  pages/index.astro   composes the sections
  styles/global.css   palette tokens and base styles
public/
  CNAME               custom domain for GitHub Pages
  0x3639.asc          the armored public key, for `gpg --import`
  simplex-0x3639.png  SimpleX connection QR
```

To change what the page says, edit `src/data/site.ts`. To change how it
looks, edit the `<style>` block of the matching component or the tokens in
`src/styles/global.css`.

## Develop

```
npm ci
npm run dev       # http://localhost:4321
npm run build     # writes dist/
npm run preview   # serves dist/
```

## Deploy

Pushes to `master` run `.github/workflows/deploy.yml`, which builds the site
and publishes it with GitHub's Pages deploy action. The repository's Pages
source must be set to **GitHub Actions** (Settings → Pages → Build and
deployment), not a branch.
