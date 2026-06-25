# کۆمەڵەى ڕووەکناسانى کوردستان

**Kurdistan Herbalists Association (KHA)**  
**جمعية العشابين الكوردستانية**

Official static website for Kurdistan Herbalists Association, built from the uploaded official bylaws file `shetaa.docx`, the official logo reference, and the official permission / registration reference.

The public-facing Kurdish name is:

**کۆمەڵەى ڕووەکناسانى کوردستان**

## Implemented website content

- Formal homepage for the association identity.
- Dedicated sections for: identity, bylaws/program, activities, research, knowledge, official documents, and the full bylaws text.
- Full bylaws text from `shetaa.docx` stored in `docs/shetaa-full-text.md` and rendered inside `index.html`.
- Website paths prepared for the original uploaded images:
  - `assets/official/kha-logo-original.jpeg`
  - `assets/official/kha-permission-original.jpeg`
- Fallback display assets remain available until the exact original JPEG files are uploaded:
  - `assets/official/kha-logo.svg`
  - `assets/official/kha-permission.svg`

## Official foundation

The project uses these uploaded official/reference files as the source of truth:

- Internal bylaws: `پەیڕەوى ناوخۆی کۆمەڵەى ڕووەکناسانى کوردستان`
- Official logo image: Kurdish, Arabic and English identity with KHA visual mark
- Government/official document scan related to registration and formal recognition

See:

- [`docs/shetaa-full-text.md`](docs/shetaa-full-text.md)
- [`docs/project-foundation.md`](docs/project-foundation.md)
- [`assets/official/README.md`](assets/official/README.md)

## Main files

```text
index.html
official.css
assets/official/README.md
assets/official/kha-logo.svg
assets/official/kha-permission.svg
docs/shetaa-full-text.md
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

## Future content areas

The formal layout is prepared so the association can later add:

- Activities and official reports.
- Research summaries and field work.
- Herbal and plant knowledge pages.
- Membership, decisions, letters, and official registers.
- Downloadable official documents and publications.
