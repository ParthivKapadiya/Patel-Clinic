# Fix SSL error on patelclinic.pkapadiya257.workers.dev

Error: `ERR_SSL_VERSION_OR_CIPHER_MISMATCH`

This usually means the **workers.dev certificate is not ready** on a brand-new account, or the site was deployed as a **Worker** instead of **Pages**.

---

## Fix A — Custom domain (fastest, HTTPS works)

If you own a domain on Cloudflare (e.g. **archevoinfra.com**):

1. **Workers & Pages** → **patelclinic**
2. **Domains** (or Settings → Domains & Routes)
3. **Add** → **Custom domain**
4. Enter: `patel.archevoinfra.com` (or `clinic.archevoinfra.com`)
5. Cloudflare creates DNS + SSL automatically (5–15 minutes)
6. Open `https://patel.archevoinfra.com` — share **this** with the client

Then run:

```bash
./scripts/set-site-url.sh https://patel.archevoinfra.com
git add -A && git commit -m "Production domain" && git push
```

---

## Fix B — Enable workers.dev route

1. **Workers & Pages** → **patelclinic** → **Domains**
2. Find **workers.dev** → make sure it is **Enabled** (not disabled)
3. If **Cloudflare Access** is on for workers.dev → **turn it off** for public clinic site
4. Wait 1 hour, try again in incognito

---

## Fix C — New Cloudflare **Pages** project (get `*.pages.dev`)

Do **not** delete patelclinic until the new site works.

1. **Workers & Pages** → **Create** → choose **Pages** (not Worker)
2. **Connect to Git** → `ParthivKapadiya/Patel-Clinic`
3. Project name: `patel-clinic-web`
4. Build command: `bash scripts/build-css-bundles.sh`
5. Build output directory: `/` or `.`
6. Deploy

Open the URL shown (e.g. `https://patel-clinic-web.pages.dev`). SSL on **pages.dev** is usually immediate.

Remove `wrangler.toml` from the repo first (push a commit) so Cloudflare does not treat it as a Worker-only deploy — see Fix D.

---

## Fix D — Push Pages-only config (recommended with Fix C)

We removed Worker `[assets]` deploy from `wrangler.toml`. After you push, redeploy.

If SSL on workers.dev still fails, use **Fix A** or **Fix C** — do not wait forever on workers.dev.

---

## Fix E — Netlify (if Cloudflare keeps failing)

You already had Netlify working. You can:

1. Deploy folder to Netlify again
2. Add custom domain when ready
3. Run `./scripts/set-site-url.sh` with that domain

---

## What to share with the client

Only URLs that open with **https** and a padlock:

- `https://patel.archevoinfra.com` (custom domain), or
- `https://something.pages.dev` (Pages), or
- Netlify/custom domain

Do **not** share `patelclinic.pkapadiya257.workers.dev` until HTTPS works in your browser.
