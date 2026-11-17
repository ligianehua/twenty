# Branding

This fork ships under its own brand. Twenty's trademark policy (`.github/TRADEMARK.md`) requires a
publicly operated fork to use its own name and logo, so every user-facing brand touchpoint reads from
one place.

## Rebrand in four steps

1. **Name, URLs, legal entity**: edit `packages/twenty-shared/src/constants/BrandConfig.ts`.
2. **Logo**: replace `packages/twenty-front/public/images/brand/logo.svg` (in-app logo) and
   `logo-1024.png` (square master, at least 1024px), then regenerate favicons, PWA and email icons:

   ```bash
   bash packages/twenty-front/scripts/generate-brand-icons.sh
   ```

   Upload `public/images/brand/logo-150.png` somewhere public and set `emailLogoUrl` to it, since
   email clients need an absolute URL.
3. **Static files** that cannot import TypeScript: `<title>` and meta tags in
   `packages/twenty-front/index.html`, and `name` / `short_name` in
   `packages/twenty-front/public/manifest.json`.
4. **Translations**: brand-bearing strings use a `{productName}` placeholder, so renaming does not need
   new translations. After changing any of those strings, regenerate catalogs:

   ```bash
   npx nx run twenty-front:lingui:extract && npx nx run twenty-front:lingui:compile
   ```

   ```bash
   npx nx run twenty-emails:lingui:extract && npx nx run twenty-emails:lingui:compile
   ```

## What is rebranded

| Surface | Source |
|---|---|
| Browser tab, social cards, PWA install name | `index.html`, `manifest.json` |
| Favicons and app icons (112 PNGs) | `generate-brand-icons.sh` |
| Onboarding, app connection and getting-started logos | `/images/brand/logo.svg` |
| Default workspace logo and favicon fallback | `DEFAULT_WORKSPACE_LOGO` → `BRAND_CONFIG.logoPath` |
| Sign-up footer, Terms and Privacy links | `FooterNote`, `getTwentyWebsiteUrl` |
| System author in record timelines | `getTimelineActivityAuthorFullName` |
| Transactional emails: logo, footer, invite, verification, password, billing | `packages/twenty-emails` |

## Deliberately left alone

- **Package and code identifiers** (`twenty-front`, `TwentyORM`, `getTwentyWebsiteUrl`, ...). Users
  never see them, and renaming them turns every upstream merge into a conflict.
- **Twenty Cloud only screens**: billing plans, partner codes, trust center, "Sharing with Twenty",
  book-a-call. They are gated to Twenty's hosted offering or to the Enterprise billing module; remove
  them, or rebrand them when you build your own billing.
- **MCP connector setup copy** and the marketplace review notice, which name Twenty's own registries.

## License obligations for selling this as a hosted product

- **AGPLv3, section 13**: users of your hosted service must be able to get the complete source of the
  modified core you run. Publish this fork and link to it (`BRAND_CONFIG.sourceCodeUrl` feeds the
  email footer).
- **Enterprise files** (`/* @license Enterprise */`, including billing, row-level security and record
  sharing) need a Twenty Enterprise subscription in production. Do not enable them commercially
  without one.
- **Your moat stays closed**: vertical features built as apps through `twenty-sdk` (MIT, plus the
  Twenty Application Exception) and a separate billing service that talks to the public API can be
  proprietary. Keep business logic out of the core.
- You may truthfully say the product is "built on Twenty" or "a fork of Twenty"; you may not suggest
  endorsement or reuse Twenty's logo.
