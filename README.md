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
4. Build settings (important):
   - **Build command:** leave empty
   - **Publish directory:** `.` (root)
5. Click **Deploy**.

### Custom domain

In Netlify: **Site configuration** → **Domain management** → add your domain (e.g. `patelclinic.in`).

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
