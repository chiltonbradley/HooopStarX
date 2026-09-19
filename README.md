# HoopStarX marketing website

Public GTM page for **https://hoopstarx.com**. The separate Lovable application belongs at **https://ball.hoopstarx.com**.

## Website

This is a dependency-free static site. Serve the repository root; no build command or environment variables are required. The page works without JavaScript; `site.js` updates the copyright year, provides a motion pause/play control, respects reduced-motion preferences, and pauses decorative loops while the hero is offscreen or the browser tab is hidden.

- `index.html`: homepage, metadata, inline SVG favicon and demo-safe product illustrations.
- `styles.css`: responsive layout and HoopStarX brand styling.
- `CNAME`: intended GitHub Pages custom domain, `hoopstarx.com`.
- `robots.txt` and `sitemap.xml`: search engine discovery.
- `.nojekyll`: serves static files without Jekyll processing.

The only external presentation dependency is Google Fonts (Oswald and Manrope), with system fallbacks. No analytics, tracking scripts, form collection or app credentials are included.

## Publish the domain

Publishing these files to GitHub does not by itself configure website hosting or DNS.

For GitHub Pages, select **Settings → Pages → Deploy from a branch → main → / (root)**, save, and use `hoopstarx.com` as the custom domain. Follow the current DNS records supplied by GitHub and enable HTTPS after verification. Any static hosting service can also serve this repository root.

Connect **ball.hoopstarx.com** to the existing HoopStarX project in Lovable's domain settings, using the exact DNS records Lovable supplies. Keep the application subdomain separate from the marketing site's apex domain. Check app authentication redirect settings after connecting the subdomain.

All primary calls to action and team sign-in links point to `https://ball.hoopstarx.com/auth`, the existing app's public authentication route. That route offers sign-in and account creation. No unimplemented signup query parameters are used.

## Content and brand

Prepared from the existing HoopStarX Product & Marketing Brief and reviewed against the app's Home, authentication, brand, and landing-page source on September 19, 2026. The marketing site contains current features only. Pricing, free tiers, trial periods, team-size limits, push notifications and native app availability are not claimed.

All team names, player information, statistics, events and messages shown in product illustrations are fictional. These illustrations are clearly labeled; they are not screenshots or live product data. No private brief, source app code, member data, invitation links or credentials are included in this repository.

The product remains **HoopStarX** regardless of the historical repository spelling **HooopStarX**.
