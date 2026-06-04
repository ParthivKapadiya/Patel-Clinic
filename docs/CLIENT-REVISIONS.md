# Client manager revisions (Jun 2026)

## Implemented in code

| # | Request | Status |
|---|---------|--------|
| 1 | Red & white light theme | `css/theme-revision.css` on all pages |
| 2 | Hero / title pages less crowded | `css/home-revision.css` + shorter home headline |
| 3 | Light theme | Same as #1 |
| 4 | Remove Popular tag on enquiry cards | `highlighted: false` in `site-config.js` packages |
| 5 | Home less repeat near address | Hidden duplicate connect blocks; visit section simplified |
| 6–8 | Services, About, Testimonials | No change (OK) |
| 9 | Gallery more corporate / organised | Uniform grid `gallery-atlas-masonry--corporate`; section copy updated |
| 10 | FAQ design OK; Q&A check | **Pending @hirenbhai** — review `SITE.faqs` in `js/site-config.js` |
| 11 | Contact OK | No change |

## FAQ review (for Dr. Hiren)

Open `js/site-config.js` → search `faqs:` and verify medical/legal wording, phone numbers, and timings.

## Deploy

```bash
git add -A
git commit -m "Client revisions: light red theme, cleaner hero, gallery grid"
git push
```

Hard refresh live site after deploy.
