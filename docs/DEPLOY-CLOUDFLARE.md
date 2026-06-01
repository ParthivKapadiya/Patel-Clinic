# Deploy Patel Clinic on Cloudflare Pages (no domain needed yet)

You get a free live URL like **`https://patel-clinic.pages.dev`** immediately. Add the client’s domain later in the same dashboard.

> **Important:** This site is ~100 MB+ (photos + videos). You **cannot** use “drag folder upload” on Cloudflare (25 MB limit). Use **GitHub + Cloudflare** (steps below).

---

## Step 1 — Cloudflare account

1. Open [https://dash.cloudflare.com/sign-up](https://dash.cloudflare.com/sign-up)
2. Sign up (email is enough; no domain required to start)

---

## Step 2 — Put the site on GitHub

If it is not on GitHub yet:

1. Open [https://github.com/new](https://github.com/new)
2. Repository name: e.g. `Patel-Clinic`
3. **Private** or **Public** (both work with Cloudflare)
4. Do **not** add README/license (you already have files)

On your Mac, in Terminal:

```bash
cd /Applications/XAMPP/xamppfiles/htdocs/patel

git init
git add .
git commit -m "Patel Clinic website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/Patel-Clinic.git
git push -u origin main
```

Replace `YOUR_USERNAME` with your GitHub username.

**First push can take 10–20 minutes** (many images/videos).

---

## Step 3 — Create Cloudflare Pages project

1. Cloudflare dashboard → **Workers & Pages** (left menu)
2. **Create** → **Pages** → **Connect to Git**
3. **Connect GitHub** → authorize Cloudflare → pick repo **Patel-Clinic**
4. **Set up builds and deployments:**

| Setting | Value |
|--------|--------|
| **Production branch** | `main` |
| **Framework preset** | `None` |
| **Build command** | `bash scripts/build-css-bundles.sh` |
| **Build output directory** | `/` (or leave empty / `.`) |

5. Click **Save and Deploy**
6. Wait 5–15 minutes (first build is slow because of media)

When it finishes, open the URL shown, e.g.:

**`https://patel-clinic.pages.dev`**

That URL is **public on the internet** — share it with the client before buying a domain.

---

## Step 4 — Fix SEO URL for the preview (optional)

Until you buy a domain, point `siteUrl` at your Pages URL:

```bash
./scripts/set-site-url.sh https://patel-clinic.pages.dev
```

Use your **exact** URL from Cloudflare (name may differ).

Then commit and push — Cloudflare redeploys automatically:

```bash
git add js/site-config.js sitemap.xml robots.txt site.url
git commit -m "Set site URL for Cloudflare preview"
git push
```

---

## Step 5 — Later: add custom domain (no re-upload)

When the client buys a domain (e.g. `patelclinic.in`):

1. Cloudflare → your **Pages** project → **Custom domains**
2. **Set up a custom domain** → enter `www.patelclinic.in`
3. Cloudflare shows DNS records — add them at GoDaddy/Namecheap **or** move DNS to Cloudflare
4. Run:

```bash
./scripts/set-site-url.sh https://www.patelclinic.in
git add -A && git commit -m "Production domain" && git push
```

5. Set **www** as primary domain in Cloudflare

---

## Troubleshooting

| Problem | Fix |
|--------|-----|
| **Asset too large** `.git/objects/pack/...` | Push the latest repo — it includes **`.assetsignore`** so Cloudflare skips `.git`. Then **Retry deployment**. |
| **Asset too large** single `.mp4` over 25 MB | Run `./scripts/compress-videos.sh` — each file must be **under 25 MB**. |
| Build fails | Check **Build log**. Ensure `scripts/build-css-bundles.sh` is executable (Cloudflare runs bash on Linux). |
| 404 on pages | **Build output directory** must be root (`/`), not `dist`. |
| Images/videos missing | Confirm `images/` is committed and pushed to GitHub. |
| Old CSS after edit | Push changes; each push triggers a new deploy. |
| Repo too large for GitHub | One file must be **under 100 MB**. Run `./scripts/compress-videos.sh` if needed. |

---

## Quick checklist

- [ ] GitHub repo has all files (`images/optimized/`, `css/bundles/`, `js/`)
- [ ] Cloudflare Pages connected to GitHub
- [ ] Build command: `bash scripts/build-css-bundles.sh`
- [ ] Output directory: `/`
- [ ] Live `*.pages.dev` URL opens `index.html`
- [ ] Hamburger menu + videos work on mobile
- [ ] Domain added later under **Custom domains**
