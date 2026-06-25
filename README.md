# Kurdistan Herbalists Association (KHA)

**Kurdistan Herbalists Association (KHA)**  
**جمعية العشابين الكوردستانية**  
**کۆمەڵەى ڕووەکناسانى کوردستان**

Official multilingual static website for Kurdistan Herbalists Association.

## Language behavior

The website opens directly in **English** by default.

Users can switch between:

- English
- Arabic
- Kurdish

The page direction changes automatically:

- English: `ltr`
- Arabic and Kurdish: `rtl`

## Implemented website content

- Formal homepage for the association identity.
- Dedicated sections for: identity, bylaws/program, activities, research, knowledge, official documents, and full bylaws text.
- Full Kurdish bylaws text stored in `docs/shetaa-full-text.md`.
- English bylaws/program text stored in `docs/shetaa-full-text-en.md`.
- Arabic bylaws/program text stored in `docs/shetaa-full-text-ar.md`.
- Official assets used by the page:
  - `assets/official/kha-logo.svg`
  - `assets/official/kha-permission.svg`

## Main files

```text
index.html
official.css
assets/official/README.md
assets/official/kha-logo.svg
assets/official/kha-permission.svg
docs/shetaa-full-text.md
docs/shetaa-full-text-en.md
docs/shetaa-full-text-ar.md
docs/project-foundation.md
manifest.json
README.md
```

## Deploy

This is a static website and can be deployed with GitHub Pages, Netlify, Vercel, or any static host.

For GitHub Pages:

1. Open repository Settings.
2. Go to Pages.
3. Choose the `main` branch and root folder.
4. Save and wait for the Pages URL.
