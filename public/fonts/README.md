# Self-hosted web fonts

These files used to be fetched from Google Fonts by Next's Google font loader at build time. Google sometimes answers with font URLs that break the Turbopack build, so the files now live here and are declared in `app/fonts-en.css` and `app/fonts-he.css`.

## Licence

DM Sans, Inter and Heebo are licensed under the SIL Open Font License 1.1 (https://openfontlicense.org). The files are unmodified copies of the Google Fonts distribution. The licence text with each font's copyright line, as published in the google/fonts repository (ofl/dmsans, ofl/inter, ofl/heebo), is in [`OFL.txt`](OFL.txt).

## Updating a font

Files in `public/` are not content-hashed and `/fonts/*` is served with `Cache-Control: public, max-age=31536000, immutable` (see `next.config.ts`). A changed font must therefore ship under a new file name (for example `inter-latin-v21.woff2`), with the CSS and the preload links in the layouts updated to match. Never overwrite a file in place.

## Files

`lib/fonts.test.ts` checks every `.woff2` here against the SHA-256 column below, so a file overwritten in place fails the tests.

Each file is byte-identical to the one the Google font loader downloaded for the previous build, fetched with that loader's user agent (Chrome 104 on macOS; other user agents get different binaries).

| File | Family | Subset | Bytes | Source | SHA-256 |
|---|---|---|---|---|---|
| `dm-sans-latin-ext.woff2` | DM Sans | latin-ext | 18192 | https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu6-K6z9mXgjU0.woff2 | `219b02c7d8884817d3d6ad4c8771f2c000ce4c5669a67ef4e2e5617ffa25c4cc` |
| `dm-sans-latin.woff2` | DM Sans | latin | 36980 | https://fonts.gstatic.com/s/dmsans/v17/rP2Yp2ywxg089UriI5-g4vlH9VoD8Cmcqbu0-K6z9mXg.woff2 | `468d56b6b25b05b70190b6c233d773f6f1770e8579827ce022a57f03fa8002fb` |
| `heebo-hebrew.woff2` | Heebo | hebrew | 12000 | https://fonts.gstatic.com/s/heebo/v28/NGS6v5_NC0k9P9H0TbFhsqMA6aw.woff2 | `5272f40edeb1940202dd278d9121649047819a24b1cf0c8d8773f670f95f2596` |
| `heebo-latin-ext.woff2` | Heebo | latin-ext | 14796 | https://fonts.gstatic.com/s/heebo/v28/NGS6v5_NC0k9P9H4TbFhsqMA6aw.woff2 | `54037b588f809fb7b07b74c8ba3c59668480bbf4473c53a11a4ed15a72a6bac3` |
| `heebo-latin.woff2` | Heebo | latin | 30148 | https://fonts.gstatic.com/s/heebo/v28/NGS6v5_NC0k9P9H2TbFhsqMA.woff2 | `5968ef50a00f549a771e975d978c22127bd00d170c2be85867bc72050b848071` |
| `heebo-math.woff2` | Heebo | math | 23772 | https://fonts.gstatic.com/s/heebo/v28/NGS6v5_NC0k9P9GKTbFhsqMA6aw.woff2 | `e453266d0aa8387d84c95d21601ac87d05d8166e363c3163aea490236f28f5c5` |
| `heebo-symbols.woff2` | Heebo | symbols | 14244 | https://fonts.gstatic.com/s/heebo/v28/NGS6v5_NC0k9P9GYTbFhsqMA6aw.woff2 | `e9da7481ef83ad0f06e331f6022bb0a9e2ead0145468f5a26f2d2e0413e6a41a` |
| `inter-cyrillic-ext.woff2` | Inter | cyrillic-ext | 25844 | https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2JL7W0Q5n-wU.woff2 | `fccca918fea40089dacadc7045861314d1a6bc91f1f323cc1eeb22ebcdb321b5` |
| `inter-cyrillic.woff2` | Inter | cyrillic | 18744 | https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa0ZL7W0Q5n-wU.woff2 | `aebf2ab4a4ce6810d73c1ac7be7cafb4e5ec4cee2d6db5fb3e09691747ec4bd6` |
| `inter-greek-ext.woff2` | Inter | greek-ext | 11272 | https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2ZL7W0Q5n-wU.woff2 | `a2e2c783ca6f9c20486e81e72a279203e86730bbf8f01ff6a5ee9dbd09e1c271` |
| `inter-greek.woff2` | Inter | greek | 19044 | https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1pL7W0Q5n-wU.woff2 | `46dd4cdca58c26ae87cc6927657bf83b2e8abfc39ffd0ab176e301a8d28d22bf` |
| `inter-latin-ext.woff2` | Inter | latin-ext | 85272 | https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa25L7W0Q5n-wU.woff2 | `a28eb6d3ccb534ae0c94ca999371df024aab60b08c3c8a5720ee9e32fa0faaa2` |
| `inter-latin.woff2` | Inter | latin | 48432 | https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa1ZL7W0Q5nw.woff2 | `c940764593d0fe5d596be327ca7558855e018039fb78509aa21921fd3644c3e4` |
| `inter-vietnamese.woff2` | Inter | vietnamese | 10280 | https://fonts.gstatic.com/s/inter/v20/UcC73FwrK3iLTeHuS_nVMrMxCp50SjIa2pL7W0Q5n-wU.woff2 | `8db00ff46c67b22cda8bed865acf7077651cac8d2841d5b40980556b48961931` |
