/** Patel Clinic — platform links, reviews & connect hub */
(function () {
  const ICONS = {
    google: '<span class="connect-icon connect-icon--google" aria-hidden="true">G</span>',
    justdial: '<span class="connect-icon connect-icon--justdial" aria-hidden="true">JD</span>',
    practo: '<span class="connect-icon connect-icon--practo" aria-hidden="true">P</span>',
    facebook: '<span class="connect-icon connect-icon--facebook" aria-hidden="true">f</span>',
    instagram: '<span class="connect-icon connect-icon--instagram" aria-hidden="true">◎</span>',
    youtube: '<span class="connect-icon connect-icon--youtube" aria-hidden="true">▶</span>',
    linkedin: '<span class="connect-icon connect-icon--linkedin" aria-hidden="true">in</span>',
    whatsapp: '<span class="connect-icon connect-icon--whatsapp" aria-hidden="true">✓</span>',
    phone: '<span class="connect-icon connect-icon--phone" aria-hidden="true">☎</span>',
    star: '<span class="connect-icon connect-icon--star" aria-hidden="true">★</span>',
    eka: '<span class="connect-icon connect-icon--eka" aria-hidden="true">e</span>',
    magicpin: '<span class="connect-icon connect-icon--magicpin" aria-hidden="true">m</span>',
  };

  const BRAND_SVG = {
    whatsapp:
      '<svg class="connect-luxe__svg" viewBox="0 0 24 24" fill="#25D366" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>',
    google:
      '<svg class="connect-luxe__svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>',
    justdial:
      '<svg class="connect-luxe__svg" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#ff6b00"/><text x="12" y="16" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold" font-family="sans-serif">JD</text></svg>',
    instagram:
      '<svg class="connect-luxe__svg" viewBox="0 0 24 24" aria-hidden="true"><defs><linearGradient id="ig-grad" x1="2" y1="22" x2="22" y2="2"><stop stop-color="#F58529"/><stop offset="0.5" stop-color="#DD2A7B"/><stop offset="1" stop-color="#8134AF"/></linearGradient></defs><rect x="2" y="2" width="20" height="20" rx="5" fill="url(#ig-grad)"/><circle cx="12" cy="12" r="4.2" fill="none" stroke="#fff" stroke-width="1.6"/><circle cx="17.4" cy="6.6" r="1.1" fill="#fff"/></svg>',
    facebook:
      '<svg class="connect-luxe__svg" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#1877F2"/><path fill="#fff" d="M13.5 7.5h2.2V5.2h-2.5c-2.4 0-3.7 1.5-3.7 4v1.8H7v2.4h2.5v6.1h3V13.2h2.3l.4-2.4h-2.7V9.2c0-.8.4-1.2 1.2-1.2z"/></svg>',
    youtube:
      '<svg class="connect-luxe__svg" viewBox="0 0 24 24" aria-hidden="true"><path fill="#FF0000" d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8z"/><path fill="#fff" d="M9.75 15.02l6.26-3.51-6.26-3.51v7.02z"/></svg>',
    linkedin:
      '<svg class="connect-luxe__svg" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="4" fill="#0A66C2"/><path fill="#fff" d="M7.2 9.6H4.4v10.4h2.8V9.6zm-1.4-5.2a1.6 1.6 0 110 3.2 1.6 1.6 0 010-3.2zm4.2 5.2H7.2v10.4h2.8v-5.6c0-1.4.3-2.8 2-2.8 1.7 0 1.7 1.6 1.7 2.8v5.6H17V14c0-2.8-.6-5.4-4-5.4-1.9 0-3.1 1-3.6 2h-.1V9.6z"/></svg>',
    star:
      '<svg class="connect-luxe__svg connect-luxe__svg--star" viewBox="0 0 24 24" fill="#fff" aria-hidden="true"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    phone:
      '<svg class="connect-luxe__svg" viewBox="0 0 24 24" fill="none" stroke="#0c7a7a" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>',
    practo:
      '<svg class="connect-luxe__svg" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="6" fill="#28328c"/><text x="12" y="16" text-anchor="middle" fill="#fff" font-size="9" font-weight="bold" font-family="system-ui,sans-serif">P</text></svg>',
    eka:
      '<svg class="connect-luxe__svg" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="6" fill="#0d9488"/><text x="12" y="16" text-anchor="middle" fill="#fff" font-size="8" font-weight="bold" font-family="system-ui,sans-serif">eka</text></svg>',
    magicpin:
      '<svg class="connect-luxe__svg" viewBox="0 0 24 24" aria-hidden="true"><rect width="24" height="24" rx="6" fill="#e11d48"/><text x="12" y="16" text-anchor="middle" fill="#fff" font-size="7" font-weight="bold" font-family="system-ui,sans-serif">mp</text></svg>',
  };

  function brandSvg(id) {
    return BRAND_SVG[id] || iconHtml(id);
  }

  function linkById(id) {
    return allLinks().find((l) => l.id === id);
  }

  function iconHtml(id) {
    return ICONS[id] || '<span class="connect-icon connect-icon--default" aria-hidden="true">↗</span>';
  }

  function allLinks() {
    if (!SITE.connect?.groups) return [];
    return SITE.connect.groups.flatMap((g) => g.links.map((l) => ({ ...l, group: g.id })));
  }

  function featuredLinks() {
    return allLinks().filter((l) => l.featured);
  }

  function luxeTile(link, size) {
    if (!link) return "";
    const ext = !link.href.startsWith("tel:");
    const sz = size ? " connect-luxe__tile--" + size : "";
    return (
      '<a href="' +
      link.href +
      '" class="connect-luxe__tile connect-luxe__tile--' +
      (link.icon || "default") +
      " connect-luxe__tile--" +
      link.id +
      sz +
      '"' +
      (ext ? ' target="_blank" rel="noopener noreferrer"' : "") +
      ">" +
      '<span class="connect-luxe__tile-icon">' +
      brandSvg(link.icon) +
      "</span>" +
      '<span class="connect-luxe__tile-body">' +
      "<strong>" +
      link.label +
      "</strong>" +
      "<span>" +
      link.desc +
      "</span>" +
      "</span>" +
      '<span class="connect-luxe__tile-arrow" aria-hidden="true">↗</span>' +
      "</a>"
    );
  }

  function luxeHeroCard(link, variant) {
    if (!link) return "";
    const ext = !link.href.startsWith("tel:");
    const isReview = variant === "review";
    const cls = isReview
      ? "connect-luxe__hero connect-luxe__hero--review"
      : "connect-luxe__hero connect-luxe__hero--whatsapp";
    const label = isReview ? "Your voice matters" : "Private concierge";
    const sub = isReview
      ? "Help families in Rajkot discover trusted care"
      : "Appointments · enquiries · clinic updates";
    const cta = isReview ? link.cta || "Write a review" : "Message now";
    return (
      '<a href="' +
      link.href +
      '" class="' +
      cls +
      '"' +
      (ext ? ' target="_blank" rel="noopener noreferrer"' : "") +
      ">" +
      '<span class="connect-luxe__hero-shine" aria-hidden="true"></span>' +
      '<span class="connect-luxe__hero-icon">' +
      brandSvg(link.icon) +
      "</span>" +
      '<span class="connect-luxe__hero-label">' +
      label +
      "</span>" +
      "<strong>" +
      link.label +
      "</strong>" +
      '<span class="connect-luxe__hero-sub">' +
      sub +
      "</span>" +
      '<span class="connect-luxe__hero-cta">' +
      cta +
      ' <span aria-hidden="true">→</span></span></a>'
    );
  }

  function renderLuxeConnect(container) {
    const wa = linkById("whatsapp");
    const waChannel = linkById("whatsapp-channel");
    const review = linkById("justdial-review");
    const social = ["instagram", "facebook", "youtube", "linkedin"].map(linkById).filter(Boolean);
    const findUs = ["google-profile", "justdial", "practo-clinic", "google-listing"]
      .map(linkById)
      .filter(Boolean);

    container.className = "connect-luxe reveal";
    container.setAttribute("aria-label", "Connect with Patel Clinic");

    const channelTile = waChannel
      ? '<a href="' +
        waChannel.href +
        '" class="connect-luxe__channel" target="_blank" rel="noopener noreferrer">' +
        '<span class="connect-luxe__channel-icon">' +
        brandSvg("whatsapp") +
        "</span><span><strong>WhatsApp channel</strong> — health tips &amp; clinic news</span>" +
        '<span class="connect-luxe__channel-arrow" aria-hidden="true">→</span></a>'
      : "";

    container.innerHTML =
      '<div class="connect-luxe__ambient" aria-hidden="true"></div>' +
      '<header class="connect-luxe__head">' +
      '<p class="connect-luxe__eyebrow"><span class="connect-luxe__eyebrow-line"></span>Always within reach<span class="connect-luxe__eyebrow-line"></span></p>' +
      "<h2>Connect with Patel Clinic</h2>" +
      "<p>Book, follow, and review us on the platforms Rajkot families trust — every profile verified, every channel answered.</p>" +
      "</header>" +
      '<div class="connect-luxe__stage">' +
      '<div class="connect-luxe__column connect-luxe__column--primary">' +
      luxeHeroCard(wa, "whatsapp") +
      luxeHeroCard(review, "review") +
      channelTile +
      "</div>" +
      '<div class="connect-luxe__column connect-luxe__column--grid">' +
      '<div class="connect-luxe__group">' +
      '<div class="connect-luxe__group-head"><span class="connect-luxe__group-num">01</span><div><h3>Find us</h3><p>Directories &amp; maps</p></div></div>' +
      '<div class="connect-luxe__tiles connect-luxe__tiles--find">' +
      findUs.map((l) => luxeTile(l, "wide")).join("") +
      "</div></div>" +
      '<div class="connect-luxe__group">' +
      '<div class="connect-luxe__group-head"><span class="connect-luxe__group-num">02</span><div><h3>Follow us</h3><p>Social &amp; video</p></div></div>' +
      '<div class="connect-luxe__tiles connect-luxe__tiles--social">' +
      social.map((l) => luxeTile(l, "social")).join("") +
      "</div></div></div></div>" +
      '<a href="contact.html#connect-hub" class="connect-luxe__catalog">' +
      '<span class="connect-luxe__catalog-text"><strong>Complete directory</strong><span>Practo · Eka · Magicpin · all official profiles</span></span>' +
      '<span class="connect-luxe__catalog-cta">Explore every link <span aria-hidden="true">→</span></span></a>';
  }

  function linkCard(link) {
    const review = link.group === "reviews" || link.id === "justdial-review";
    const external = !link.href.startsWith("tel:");
    const cls = [
      "connect-card",
      "connect-card--" + (link.icon || "default"),
      link.featured ? "connect-card--featured" : "",
      review ? "connect-card--review" : "",
    ]
      .filter(Boolean)
      .join(" ");

    const cta = link.cta || (external ? "Open" : "Call");
    const target = external ? ' target="_blank" rel="noopener noreferrer"' : "";

    return (
      '<a href="' +
      link.href +
      '" class="' +
      cls +
      '"' +
      target +
      ">" +
      iconHtml(link.icon) +
      '<span class="connect-card__body"><strong>' +
      link.label +
      "</strong><span>" +
      link.desc +
      '</span></span><span class="connect-card__arrow" aria-hidden="true">' +
      cta +
      " →</span></a>"
    );
  }

  function stripPillHtml(link, extraClass) {
    const ext = !link.href.startsWith("tel:");
    const review = link.id === "justdial-review" ? " connect-strip__pill--review" : "";
    return (
      '<a href="' +
      link.href +
      '" class="connect-strip__pill connect-strip__pill--' +
      (link.icon || "default") +
      (extraClass || "") +
      review +
      '"' +
      (ext ? ' target="_blank" rel="noopener noreferrer"' : "") +
      ">" +
      iconHtml(link.icon) +
      "<span>" +
      link.label +
      "</span></a>"
    );
  }

  function renderStrip(container) {
    const variant = container.dataset.connectVariant || "";
    const links = featuredLinks().slice(0, 10);
    if (!links.length) return;

    if (variant === "luxe") {
      renderLuxeConnect(container);
      return;
    }

    if (variant === "prestige") {
      renderLuxeConnect(container);
      return;
    }

    container.className = "connect-strip reveal";
    container.setAttribute("aria-label", "Find Patel Clinic online");
    const pills = links.map((l) => stripPillHtml(l)).join("");
    container.innerHTML =
      '<div class="connect-strip__inner">' +
      pills +
      '<a href="contact.html#connect-hub" class="connect-strip__pill connect-strip__pill--all">All links →</a></div>';
  }

  function renderCrownHubInner(cfg) {
    const wa = linkById("whatsapp");
    const waHref = wa?.href || SITE.whatsappUrl || "https://wa.me/919978815066";
    const reviewLink = allLinks().find((l) => l.id === "justdial-review");
    const googleLink = allLinks().find((l) => l.id === "google-profile");
    const established = SITE.established || 1981;

    let reviewBlock = "";
    if (reviewLink) {
      reviewBlock =
        '<div class="connect-crown__review">' +
        '<span class="connect-crown__review-eyebrow">Your voice matters</span>' +
        "<h3>Help families in Rajkot choose trusted care</h3>" +
        "<p>A quick star rating on JustDial or Google helps neighbours find both our physicians.</p>" +
        '<div class="connect-crown__review-actions">' +
        luxeHeroCard(reviewLink, "review") +
        (googleLink
          ? '<a href="' +
            googleLink.href +
            '" class="connect-crown__review-google" target="_blank" rel="noopener noreferrer">Review on Google →</a>'
          : "") +
        "</div></div>";
    }

    let sectionsHtml = "";
    cfg.groups.forEach((g, i) => {
      const num = String(i + 1).padStart(2, "0");
      sectionsHtml +=
        '<section class="connect-crown__section reveal">' +
        '<header class="connect-crown__section-head">' +
        '<span class="connect-crown__section-num">' +
        num +
        "</span>" +
        "<h3>" +
        g.title +
        "</h3></header>" +
        '<div class="connect-crown__tiles">' +
        g.links.map((l) => luxeTile({ ...l, group: g.id }, l.featured ? "wide" : "")).join("") +
        "</div></section>";
    });

    return (
      '<div class="connect-crown">' +
      '<div class="connect-crown__intro">' +
      '<figure class="connect-crown__photo">' +
      '<img src="' +
      (cfg.heroImage || "images/pi31.png") +
      '" alt="' +
      (cfg.heroImageAlt || "Patel Clinic") +
      '" loading="lazy" width="640" height="720">' +
      '<figcaption><span data-site-rating>' +
      SITE.rating +
      "</span>★ · Rajkot families</figcaption></figure>" +
      '<div class="connect-crown__intro-side">' +
      reviewBlock +
      "</div></div>" +
      '<div class="connect-crown__trust-strip">' +
      '<div class="connect-crown__trust-strip-score">' +
      '<span class="connect-crown__score" data-site-rating>' +
      SITE.rating +
      "</span>" +
      '<div><strong>Patient excellence</strong><span>Trusted in Gayatrinagar since ' +
      established +
      "</span></div></div>" +
      '<p class="connect-crown__trust-strip-tagline">' +
      (SITE.tagline || "Family physician & homeopathic care — full-time OPD.") +
      "</p>" +
      '<div class="connect-crown__trust-strip-actions">' +
      '<a href="' +
      waHref +
      '" class="connect-crown__btn connect-crown__btn--wa" target="_blank" rel="noopener noreferrer">' +
      brandSvg("whatsapp") +
      "<span>WhatsApp</span></a>" +
      '<a href="appointment.html" class="connect-crown__btn connect-crown__btn--book"><span>Book visit</span></a>' +
      '<a href="tel:' +
      SITE.phoneTel +
      '" class="connect-crown__btn connect-crown__btn--call"><span>' +
      SITE.phoneDisplay +
      "</span></a>" +
      "</div>" +
      '<ul class="connect-crown__trust-strip-phones">' +
      '<li><a href="tel:' +
      SITE.phoneTel +
      '"><span>Dr. Hiren</span> ' +
      SITE.phoneDisplay +
      "</a></li>" +
      '<li><a href="tel:' +
      SITE.phoneAlt +
      '"><span>Dr. K. M. Patel</span> ' +
      (SITE.phoneAltDisplay || SITE.phoneAlt) +
      "</a></li>" +
      "</ul></div>" +
      '<div class="connect-crown__directory">' +
      sectionsHtml +
      "</div></div>"
    );
  }

  function renderHub(container, variant) {
    const cfg = SITE.connect;
    if (!cfg?.groups) return;

    const isHome = variant === "home";
    if (variant === "contact" || !variant) container.id = "connect-hub";

    container.className =
      "connect-hub" +
      (isHome
        ? " connect-hub--home connect-hub--atlas connect-hub--crown home-atlas home-atlas--connect"
        : " connect-hub--page section--luxury-muted");

    const headHtml =
      '<header class="connect-hub__head reveal">' +
      '<p class="eyebrow">' +
      (isHome ? "Stay connected" : "Find us everywhere") +
      "</p>" +
      "<h2>" +
      (isHome
        ? "Book, follow & review Patel Clinic online"
        : "All official links, listings & social profiles") +
      "</h2>" +
      "<p>Verified profiles on Google, JustDial, Practo, WhatsApp, Instagram & Facebook — one trusted address in Gayatrinagar since 1981.</p>" +
      "</header>";

    if (isHome) {
      container.innerHTML =
        '<div class="container">' +
        headHtml +
        '<div class="connect-crown-panel">' +
        renderCrownHubInner(cfg) +
        "</div></div>";
      return;
    }

    const reviewLink = allLinks().find((l) => l.id === "justdial-review");
    const googleLink = allLinks().find((l) => l.id === "google-profile");

    let reviewBanner = "";
    if (reviewLink) {
      reviewBanner =
        '<aside class="connect-hub__review reveal">' +
        '<p class="eyebrow">Your voice matters</p>' +
        "<h3>Help families in Rajkot choose trusted care</h3>" +
        "<p>A quick star rating on JustDial or Google helps neighbours find both our physicians.</p>" +
        linkCard(reviewLink) +
        (googleLink
          ? '<a href="' +
            googleLink.href +
            '" class="connect-hub__review-secondary" target="_blank" rel="noopener noreferrer">Review on Google →</a>'
          : "") +
        "</aside>";
    }

    let groupsHtml = "";
    cfg.groups.forEach((g) => {
      groupsHtml +=
        '<div class="connect-hub__group reveal"><h3>' +
        g.title +
        '</h3><div class="connect-hub__grid">' +
        g.links.map((l) => linkCard({ ...l, group: g.id })).join("") +
        "</div></div>";
    });

    container.innerHTML =
      '<div class="container">' +
      headHtml +
      '<div class="connect-hub__layout">' +
      '<figure class="connect-hub__visual reveal">' +
      '<img src="' +
      (cfg.heroImage || "images/pi31.png") +
      '" alt="' +
      (cfg.heroImageAlt || "Patel Clinic") +
      '" loading="lazy" width="640" height="800">' +
      '<figcaption class="connect-hub__badge"><span>' +
      SITE.rating +
      "★</span> rated · Rajkot</figcaption></figure>" +
      '<div class="connect-hub__panels">' +
      reviewBanner +
      groupsHtml +
      "</div></div></div>";
  }

  function renderReviewCta(container) {
    const link = allLinks().find((l) => l.id === "justdial-review");
    const google = allLinks().find((l) => l.id === "google-profile");
    if (!link) return;
    container.className = "connect-review-cta reveal";
    container.innerHTML =
      '<div class="connect-review-cta__inner">' +
      '<div class="connect-review-cta__copy">' +
      '<p class="eyebrow eyebrow--light">Loved your visit?</p>' +
      "<h2>Share a quick review — it helps Rajkot families find us</h2>" +
      "<p>Tap below to rate your experience on JustDial. Your words support both Dr. K. M. Patel and Dr. Hiren K. Patel.</p>" +
      '<div class="connect-review-cta__actions">' +
      linkCard(link) +
      (google
        ? '<a href="' +
          google.href +
          '" class="btn btn-ghost" target="_blank" rel="noopener noreferrer">Review on Google</a>'
        : "") +
      "</div></div>" +
      '<figure class="connect-review-cta__img" aria-hidden="true"><img src="images/pi32.png" alt="" role="presentation" loading="lazy"></figure></div>';
  }

  function renderFooterIcons() {
    const icons = featuredLinks().slice(0, 8);
    if (!icons.length) return "";
    return (
      '<div class="footer-crown__social">' +
      '<span class="footer-crown__label footer-crown__label--social">Find us online</span>' +
      '<div class="footer-crown__social-row">' +
      icons
        .map((l) => {
          const ext = !l.href.startsWith("tel:");
          return (
            '<a href="' +
            l.href +
            '" class="footer-crown__social-link footer-crown__social-link--' +
            (l.icon || "default") +
            '" title="' +
            l.label +
            '"' +
            (ext ? ' target="_blank" rel="noopener noreferrer"' : "") +
            ">" +
            iconHtml(l.icon) +
            "<span>" +
            l.label +
            "</span></a>"
          );
        })
        .join("") +
      "</div></div>"
    );
  }

  function renderHomoeoProducts(container) {
    const items = SITE.homoeopathicProducts;
    if (!items?.length || !container) return;
    const isServices = document.body.dataset.page === "services";
    if (isServices) {
      container.className =
        "services-atlas services-atlas--muted services-atlas--homoeo reveal";
      container.innerHTML =
        '<div class="container">' +
        '<header class="services-atlas__head reveal">' +
        '<p class="services-atlas__eyebrow">Homoeopathic care</p>' +
        "<h2>Recommended pharmacy products</h2>" +
        "<p>Quality SBL formulations available at Patel Clinic — guided by Dr. Hiren K. Patel.</p>" +
        "</header>" +
        '<div class="services-homoeo__grid">' +
        items
          .map(
            (p) =>
              '<article class="services-homoeo-card reveal">' +
              '<div class="services-homoeo-card__media">' +
              (typeof SITE !== "undefined" && SITE.imgHtml
                ? SITE.imgHtml(p.src, { alt: p.name, width: 280, height: 360, loading: "lazy" })
                : '<img src="' + p.src + '" alt="' + p.name + '" loading="lazy" width="280" height="360">') +
              "</div>" +
              "<h3>" +
              p.name +
              "</h3><p>" +
              p.desc +
              "</p></article>"
          )
          .join("") +
        "</div></div>";
      window.PatelReveal?.();
      return;
    }
    container.className = "homoeo-products section--luxury reveal";
    container.innerHTML =
      '<div class="container">' +
      '<header class="homoeo-products__head">' +
      '<p class="eyebrow">Homoeopathic care</p>' +
      "<h2>Recommended pharmacy products</h2>" +
      "<p>Quality SBL formulations available at Patel Clinic — guided by Dr. Hiren K. Patel.</p>" +
      "</header>" +
      '<div class="homoeo-products__grid">' +
      items
        .map(
          (p) =>
            '<article class="homoeo-product-card">' +
            (typeof SITE !== "undefined" && SITE.imgHtml
              ? SITE.imgHtml(p.src, { alt: p.name, width: 280, height: 360, loading: "lazy" })
              : '<img src="' + p.src + '" alt="' + p.name + '" loading="lazy" width="280" height="360">') +
            "<h3>" +
            p.name +
            "</h3><p>" +
            p.desc +
            "</p></article>"
        )
        .join("") +
      "</div></div>";
    window.PatelReveal?.();
  }

  window.ConnectUI = {
    renderStrip,
    renderHub,
    renderReviewCta,
    renderFooterIcons,
    renderHomoeoProducts,
    allLinks,
    featuredLinks,
  };

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-connect-strip]").forEach((el) => renderStrip(el));
    document.querySelectorAll("[data-connect-hub]").forEach((el) =>
      renderHub(el, el.dataset.connectVariant || "contact")
    );
    document.querySelectorAll("[data-connect-review]").forEach((el) => renderReviewCta(el));
    document.querySelectorAll("[data-homoeo-products]").forEach((el) => renderHomoeoProducts(el));
  });
})();
