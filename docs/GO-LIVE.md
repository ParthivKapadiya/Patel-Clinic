# Patel Clinic — client go-live (custom domain)

You can **keep hosting on Netlify** and still give the client a professional URL (e.g. `www.patelclinic.in`). Visitors never need to see `something.netlify.app`.

## 1. Buy or use a domain

Examples: `patelclinic.in`, `patelclinicrajkot.com`, `drpatelclinic.com`.

Buy from GoDaddy, Namecheap, Google Domains, etc., or use a domain the client already owns.

## 2. Connect domain in Netlify

1. Open your site in [Netlify](https://app.netlify.com).
2. **Site configuration** → **Domain management** → **Add a domain**.
3. Enter the domain (e.g. `patelclinic.in` and `www.patelclinic.in`).
4. Netlify shows **DNS records** to add at your registrar:
   - Often an **A record** to Netlify’s load balancer IP, and/or
   - **CNAME** for `www` → `your-site-name.netlify.app`
5. Wait for DNS (minutes to 48 hours). Netlify will issue **HTTPS** automatically.
6. Set **primary domain** to the version you want (usually `https://www.patelclinic.in`).
7. Enable **“Redirect netlify subdomain to primary”** so `*.netlify.app` also sends people to the client domain.

## 3. Update the website files (one command)

From the project folder, run (use the **real** client URL, with `https://`):

```bash
chmod +x scripts/set-site-url.sh
./scripts/set-site-url.sh https://www.patelclinic.in
```

This updates:

- `js/site-config.js` → `siteUrl` (Google, WhatsApp previews, canonical links)
- `sitemap.xml`
- `robots.txt`

Then **redeploy** (Git push or drag-and-drop the folder again). In Netlify use **Clear cache and deploy**.

**Netlify Git deploy:** add environment variable `SITE_URL=https://www.patelclinic.in` under **Site configuration → Environment variables**. The build will apply it automatically.

## 4. After deploy — quick checks

| Check | URL |
|--------|-----|
| Home loads on custom domain | `https://www.patelclinic.in/` |
| Sitemap | `https://www.patelclinic.in/sitemap.xml` |
| robots.txt | `https://www.patelclinic.in/robots.txt` |
| Page source: canonical | View source → `<link rel="canonical"` should use your domain |
| Mobile speed | [PageSpeed Insights](https://pagespeed.web.dev/) |

Submit sitemap in [Google Search Console](https://search.google.com/search-console) for the new property.

## 5. Optional: not using Netlify

Upload the same folder to any host (cPanel, Hostinger, etc.):

- Point domain document root to the folder containing `index.html`.
- Run `./scripts/set-site-url.sh` with that domain before upload.
- Ensure `.htaccess` is enabled if using Apache (XAMPP-style hosting).

## What the client sees

- **Public URL:** `https://www.patelclinic.in` (your real domain)
- **Hosting:** can stay Netlify (invisible to patients)
- **Do not share** the `.netlify.app` link in print, WhatsApp, or Google Business
