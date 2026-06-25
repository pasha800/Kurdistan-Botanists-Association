# کۆمەڵەى ڕووەکناسانى کوردستان

**Kurdistan Herbalists Association (KHA)**  
**جمعية العشابين الكوردستانية**

Official static website for Kurdistan Herbalists Association, built from the uploaded official bylaws file `shetaa.docx`, the official logo reference, and the official permission / registration reference.

The public-facing Kurdish name is:

**کۆمەڵەى ڕووەکناسانى کوردستان**

## Implemented website content

- The homepage now uses the official KHA identity only.
- The full bylaws text from `shetaa.docx` is stored in `docs/shetaa-full-text.md` and rendered inside `index.html`.
- The logo is displayed from `assets/official/kha-logo.svg`.
- The permission / official document section is displayed from `assets/official/kha-permission.svg`.
- Previous sample flora, geography, event, and membership placeholder content was removed from the homepage.

## Official foundation

The project uses these uploaded official/reference files as the source of truth:

- Internal bylaws: `پەیڕەوى ناوخۆی کۆمەڵەى ڕووەکناسانى کوردستان`
- Official logo image: Kurdish, Arabic and English identity with KHA visual mark
- Government/official document scan related to registration and formal recognition

See:

- [`docs/shetaa-full-text.md`](docs/shetaa-full-text.md)
- [`docs/project-foundation.md`](docs/project-foundation.md)

## Main files

```text
index.html
official.css
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

## Notes

The visible website is now based on the official KHA bylaws and identity. The current logo and permission displays are SVG website assets prepared from the supplied references. If exact original scans are required as downloadable binary image files, add them later under `assets/official/`.
