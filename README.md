# Patel Clinic — Static Website

Simple **HTML, CSS, and JavaScript** website. No npm or Node required.

## Deploy on Netlify (go live on the internet)

### Option A — Drag & drop (easiest)

1. Go to [https://app.netlify.com](https://app.netlify.com) and sign up / log in.
2. Open **Sites** → **Add new site** → **Deploy manually**.
3. Drag the whole **`patel`** folder (must include `index.html`, `css/`, `js/`, `images/`) onto the page.
4. Netlify gives you a URL like `https://random-name.netlify.app` — your site is live.

### Option B — Git + Netlify

1. Push this project to GitHub/GitLab/Bitbucket.
2. In Netlify: **Add new site** → **Import an existing project**.
3. Connect the repo.
4. Build settings (recommended):
   - **Build command:** `bash scripts/build-css-bundles.sh` (or leave empty for drag-and-drop)
   - **Publish directory:** `.` (root)
   - **Environment variable (optional):** `SITE_URL` = `https://www.patelclinic.in` (your real domain)
5. Click **Deploy**.

### Custom domain (for client — not the Netlify URL)

You can host on Netlify but show the client’s own domain (e.g. `https://www.patelclinic.in`). Patients should never need `*.netlify.app`.

1. Netlify → **Domain management** → add the client’s domain and follow DNS steps.
2. Set the production URL in the project (one command):

```bash
chmod +x scripts/set-site-url.sh
./scripts/set-site-url.sh https://www.patelclinic.in
```

3. Redeploy (or set Netlify env var `SITE_URL` to the same URL for automatic updates on each deploy).

Full checklist: **[docs/GO-LIVE.md](docs/GO-LIVE.md)**

### Performance

- Review videos are served from `images/optimized/` (~71 MB). **Do not** re-add full-size `images/pv*.mp4` at the repo root (duplicates deploy size).
- To re-compress videos: `chmod +x scripts/compress-videos.sh && ./scripts/compress-videos.sh`
- After changing CSS, rebuild bundles (fewer requests, faster first paint):
  - `./scripts/build-css-bundles.sh`
- After adding or replacing photos, create WebP copies:
  - `./scripts/optimize-images.sh` (requires `cwebp`; macOS `sips` resizes large JPEGs)
- Home page loads `css/bundles/site-base.bundle.css` + `css/bundles/home.bundle.css` instead of many separate files.
- Gallery and heroes use `images/webp/` when the browser supports WebP.
- After deploy, run [PageSpeed Insights](https://pagespeed.web.dev/) on your **custom domain** (not the Netlify subdomain).

### Notes

- No `npm install` or `npm run build` needed.
- All pages are real `.html` files (`about.html`, `contact.html`, etc.), so they work on Netlify without extra setup.
- Clinic photos are in `images/` — keep that folder in the deploy.

## How to view locally (XAMPP)

1. Start **Apache** in XAMPP.
2. Open in your browser: **http://localhost/patel/**

The home page is `index.html`.

## Edit clinic details

Open **`js/site-config.js`** and change phone, WhatsApp, email, and address.

## Files

| File / folder | Purpose |
|---------------|---------|
| `index.html` | Home page |
| `about.html`, `services.html`, … | Other pages |
| `css/style.css` | All styles |
| `js/site-config.js` | Clinic info (edit here) |
| `js/main.js` | Menu, slider, FAQ, form |
