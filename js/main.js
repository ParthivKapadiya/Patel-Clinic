(function () {
  const NAV = [
    { href: "index.html", label: "Home", id: "home" },
    { href: "about.html", label: "About", id: "about" },
    { href: "services.html", label: "Services", id: "services" },
    { href: "testimonials.html", label: "Testimonials", id: "testimonials" },
    { href: "gallery.html", label: "Gallery", id: "gallery" },
    { href: "faq.html", label: "FAQ", id: "faq" },
    { href: "contact.html", label: "Contact", id: "contact" },
  ];

  const LOGO_IMG = () => SITE.logo || "images/patel2.jpeg";

  /** Search index built when FAQ list renders (question + answer, lowercased) */
  const faqSearchTexts = [];

  const ICON_PHONE =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>';
  const ICON_CALENDAR =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>';

  function waLink(text) {
    const msg = text || `Hello ${SITE.name}, I would like to book an appointment.`;
    const base = SITE.whatsappUrl || `https://wa.me/${SITE.whatsapp}`;
    return base + (base.includes("?") ? "&" : "?") + "text=" + encodeURIComponent(msg);
  }

  function renderHeader(activeId) {
    const links = NAV.map(
      (n) =>
        `<li><a href="${n.href}" class="${n.id === activeId ? "active" : ""}">${n.label}</a></li>`
    ).join("");

    const mobileLinks = NAV.map(
      (n) =>
        `<a href="${n.href}" class="${n.id === activeId ? "active" : ""}">${n.label}</a>`
    ).join("");

    const established = SITE.established || 1981;

    return `
      <div class="header-accent" aria-hidden="true"></div>
      <div class="container header-shell">
        <a href="index.html" class="logo logo--luxury">
          <span class="logo__frame">
            <img src="${LOGO_IMG()}" alt="${SITE.name}" width="48" height="48" loading="eager">
          </span>
          <span class="logo__copy">
            <span class="logo__establish">Est. ${established}</span>
            <strong>${SITE.name}</strong>
            <span class="logo__location">Gayatrinagar · Rajkot</span>
          </span>
        </a>
        <span class="header-open-badge" aria-hidden="true">OPD Open</span>
        <nav class="header-nav" aria-label="Primary">
          <ul class="nav-links nav-links--luxury">${links}</ul>
        </nav>
        <div class="nav-actions nav-actions--luxury">
          <a href="tel:${SITE.phoneTel}" class="header-btn header-btn--ghost">${ICON_PHONE}<span>Call</span></a>
          <a href="appointment.html" class="header-btn header-btn--primary">${ICON_CALENDAR}<span>Book</span></a>
        </div>
        <button type="button" class="nav-toggle nav-toggle--luxury" aria-label="Open menu" aria-expanded="false" id="nav-toggle">
          <span class="nav-toggle__bars"></span>
        </button>
      </div>
      <div class="mobile-menu mobile-menu--luxury" id="mobile-menu" aria-hidden="true">
        <p class="mobile-menu__label">Menu</p>
        ${mobileLinks}
        <div class="mobile-menu__actions">
          <a href="appointment.html" class="header-btn header-btn--primary">${ICON_CALENDAR}<span>Book appointment</span></a>
          <a href="tel:${SITE.phoneTel}" class="header-btn header-btn--ghost">${ICON_PHONE}<span>${SITE.phoneDisplay}</span></a>
          <a href="${waLink()}" class="header-btn header-btn--ghost" target="_blank" rel="noopener">WhatsApp</a>
          <p class="mobile-menu__phone">Dr. K. M. Patel · ${SITE.phoneAltDisplay || "98252 45002"}</p>
        </div>
      </div>`;
  }

  const ICON_MAP_PIN =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>';
  const ICON_MAIL =
    '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="m22 6-10 7L2 6"/></svg>';

  function renderFooter() {
    const established = SITE.established || 1981;
    const footerLinks = NAV.filter((n) => n.id !== "home")
      .concat([{ href: "appointment.html", label: "Appointments" }])
      .map((n) => `<li><a href="${n.href}">${n.label}</a></li>`)
      .join("");

    const connectBlock =
      typeof ConnectUI !== "undefined" ? ConnectUI.renderFooterIcons() : "";

    return `
      <div class="footer-crown__veil" aria-hidden="true"></div>
      <div class="footer-crown__horizon" aria-hidden="true"></div>
      <div class="container">
        <div class="footer-crown__panel">
          <div class="footer-crown__main">
            <div class="footer-crown__brand">
              <a href="index.html" class="footer-crown__logo">
                <span class="footer-crown__logo-frame">
                  <img src="${LOGO_IMG()}" alt="${SITE.name}" width="56" height="56" loading="lazy">
                </span>
                <span class="footer-crown__logo-copy">
                  <span class="footer-crown__establish">Est. ${established}</span>
                  <strong>${SITE.name}</strong>
                  <span>Gayatrinagar · Rajkot</span>
                </span>
              </a>
              <p class="footer-crown__tagline">${SITE.tagline}</p>
              <div class="footer-crown__badges">
                <span class="footer-crown__badge footer-crown__badge--gold">${SITE.rating}★ rated</span>
                <span class="footer-crown__badge">Rajkot · Local care</span>
              </div>
            </div>
            <div class="footer-crown__cols">
              <nav class="footer-crown__col" aria-label="Explore">
                <span class="footer-crown__label">Explore</span>
                <ul class="footer-crown__links">${footerLinks}</ul>
              </nav>
              <div class="footer-crown__col footer-crown__col--visit">
                <span class="footer-crown__label">Visit</span>
                <ul class="footer-crown__contact">
                  <li>
                    <span class="footer-crown__contact-icon">${ICON_MAP_PIN}</span>
                    <span>${SITE.address}</span>
                  </li>
                  <li>
                    <span class="footer-crown__contact-icon">${ICON_PHONE}</span>
                    <a href="tel:${SITE.phoneTel}">${SITE.phoneDisplay}</a>
                  </li>
                  ${
                    SITE.email
                      ? `<li><span class="footer-crown__contact-icon">${ICON_MAIL}</span><a href="mailto:${SITE.email}">${SITE.email}</a></li>`
                      : ""
                  }
                </ul>
              </div>
              <div class="footer-crown__col footer-crown__col--cta">
                <span class="footer-crown__label">Ready when you are</span>
                <p class="footer-crown__cta-lead">Book a slot — we confirm quickly on WhatsApp.</p>
                <div class="footer-crown__actions">
                  <a href="appointment.html" class="footer-crown__btn footer-crown__btn--primary">${ICON_CALENDAR}<span>Book appointment</span></a>
                  <a href="${waLink()}" class="footer-crown__btn footer-crown__btn--ghost" target="_blank" rel="noopener noreferrer">WhatsApp us</a>
                  <a href="${SITE.whatsappChannelUrl || waLink()}" class="footer-crown__btn footer-crown__btn--ghost footer-crown__btn--sub" target="_blank" rel="noopener noreferrer">WhatsApp channel</a>
                </div>
              </div>
            </div>
          </div>
          ${connectBlock}
        </div>
        <div class="footer-crown__bottom">
          <div class="footer-crown__bottom-row">
            <span>© ${new Date().getFullYear()} ${SITE.name}. All rights reserved.</span>
            <span class="footer-crown__motto">Crafted for modern primary care — calm, clear, and patient-first.</span>
          </div>
          ${
            SITE.developer
              ? `<p class="footer-crown__credit">Developed by <a href="${SITE.developer.url}" target="_blank" rel="noopener noreferrer">${SITE.developer.name}</a></p>`
              : ""
          }
        </div>
      </div>`;
  }

  function initLayout() {
    const page = document.body.dataset.page || "home";
    const header = document.getElementById("site-header");
    const footer = document.getElementById("site-footer");
    if (header) {
      header.className =
        "site-header site-header--luxury site-header--prestige" +
        (page === "home"
          ? " site-header--home"
          : page === "about"
            ? " site-header--about"
            : page === "services"
              ? " site-header--services"
              : page === "testimonials"
                ? " site-header--testimonials"
                : page === "gallery"
                  ? " site-header--gallery"
                  : page === "faq"
                    ? " site-header--faq"
                    : page === "contact"
                      ? " site-header--contact"
                      : "");
      header.innerHTML = renderHeader(page);
    }
    syncHomeTopOffset();
    if (footer) {
      footer.className = "site-footer site-footer--luxury site-footer--crown";
      footer.innerHTML = renderFooter();
    }

    const toggle = document.getElementById("nav-toggle");
    const menu = document.getElementById("mobile-menu");
    if (toggle && menu) {
      const closeMenu = () => {
        menu.classList.remove("open");
        menu.setAttribute("aria-hidden", "true");
        toggle.setAttribute("aria-expanded", "false");
        document.body.classList.remove("header-menu-open");
      };
      toggle.addEventListener("click", () => {
        const open = !menu.classList.contains("open");
        menu.classList.toggle("open", open);
        menu.setAttribute("aria-hidden", open ? "false" : "true");
        toggle.setAttribute("aria-expanded", open);
        document.body.classList.toggle("header-menu-open", open);
      });
      menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
    }

    const headerEl = document.querySelector(".site-header");
    if (headerEl) {
      const onScroll = () => headerEl.classList.toggle("scrolled", window.scrollY > 48);
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    document.querySelectorAll(".floating-actions").forEach((el) => {
      el.innerHTML = `
        <a href="tel:${SITE.phoneTel}" class="fab" aria-label="Call">📞</a>
        <a href="${waLink()}" class="fab whatsapp" target="_blank" rel="noopener">💬 WhatsApp</a>`;
    });
  }

  function initReveal() {
    const els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "-40px", threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
  }

  function initStats() {
    document.querySelectorAll("[data-stat]").forEach((el) => {
      const target = parseFloat(el.dataset.stat);
      const suffix = el.dataset.suffix || "";
      const decimals = parseInt(el.dataset.decimals || "0", 10);
      let started = false;

      const run = () => {
        if (started) return;
        started = true;
        const duration = 1100;
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min(1, (now - start) / duration);
          const eased = 1 - (1 - t) ** 3;
          const val = target * eased;
          el.textContent =
            (decimals > 0 ? val.toFixed(decimals) : Math.round(val)) + suffix;
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      };

      const io = new IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            run();
            io.disconnect();
          }
        },
        { threshold: 0.3 }
      );
      io.observe(el);
    });
  }

  function initTestimonialSlider() {
    const slider = document.getElementById("testimonial-slider");
    if (!slider || !SITE.testimonials.length) return;

    let index = 0;
    let progressTimer = null;
    let slideTimer = null;
    const intervalMs = 5200;
    const quoteEl = slider.querySelector(".testimonial-quote");
    const authorEl = slider.querySelector(".testimonial-author");
    const dotsEl = slider.querySelector(".slider-dots");
    const progressEl = slider.querySelector(".testimonial-slider__progress span");

    function setProgress(active) {
      if (!progressEl) return;
      if (progressTimer) clearInterval(progressTimer);
      if (!active) {
        progressEl.style.width = "0%";
        return;
      }
      const start = performance.now();
      progressEl.style.width = "0%";
      progressTimer = setInterval(() => {
        const pct = Math.min(((performance.now() - start) / intervalMs) * 100, 100);
        progressEl.style.width = pct + "%";
        if (pct >= 100) clearInterval(progressTimer);
      }, 50);
    }

    function render(i, animate) {
      const t = SITE.testimonials[i];
      const apply = () => {
        quoteEl.textContent = `"${t.quote}"`;
        authorEl.innerHTML = `<strong>${t.name}</strong> · ${t.role}`;
        dotsEl.querySelectorAll(".slider-dot").forEach((d, j) => {
          d.classList.toggle("active", j === i);
        });
        quoteEl.classList.remove("is-fading");
        setProgress(true);
      };
      if (animate && quoteEl) {
        quoteEl.classList.add("is-fading");
        setTimeout(apply, 220);
      } else {
        apply();
      }
    }

    function goTo(i) {
      index = (i + SITE.testimonials.length) % SITE.testimonials.length;
      render(index, true);
      resetAuto();
    }

    SITE.testimonials.forEach((_, i) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "slider-dot" + (i === 0 ? " active" : "");
      btn.setAttribute("aria-label", `Testimonial ${i + 1}`);
      btn.addEventListener("click", () => goTo(i));
      dotsEl.appendChild(btn);
    });

    slider.querySelector("[data-prev]")?.addEventListener("click", () => goTo(index - 1));
    slider.querySelector("[data-next]")?.addEventListener("click", () => goTo(index + 1));

    function resetAuto() {
      if (slideTimer) clearInterval(slideTimer);
      slideTimer = setInterval(() => goTo(index + 1), intervalMs);
    }

    render(0, false);
    resetAuto();
  }

  function renderHomeTestimonialChips(container) {
    if (!container || !SITE.testimonials?.length) return;
    const chipClass = container.classList.contains("testimonials-voice-chips")
      ? "testimonials-voice-chip"
      : container.classList.contains("atlas-testimonials__chips")
        ? "atlas-chip"
        : "home-testimonial-chip";
    container.innerHTML = SITE.testimonials
      .map(
        (t) => `
      <article class="${chipClass} reveal">
        <p class="testimonial-stars" aria-hidden="true">★★★★★</p>
        <p>&ldquo;${t.quote}&rdquo;</p>
        <span>${t.name} · ${t.role}</span>
      </article>`
      )
      .join("");
    initReveal();
  }

  function renderHomeGalleryBento(container) {
    if (!container) return;
    const picks = [];
    if (SITE.clinicImages?.[0]) picks.push(SITE.clinicImages[0]);
    if (SITE.clinicFacilityImages?.[0]) picks.push(SITE.clinicFacilityImages[0]);
    if (SITE.clinicFacilityImages?.[4]) picks.push(SITE.clinicFacilityImages[4]);
    if (SITE.patientPhotos?.[0]) picks.push(SITE.patientPhotos[0]);
    if (SITE.patientPhotos?.[8]) picks.push(SITE.patientPhotos[8]);
    if (SITE.clinicImages?.[2]) picks.push(SITE.clinicImages[2]);
    const items = picks.filter(Boolean).slice(0, 6);
    if (!items.length) return;

    const tileClass = container.classList.contains("atlas-gallery")
      ? "atlas-gallery__tile gallery-tile"
      : "gallery-tile";
    container.innerHTML = items
      .map(
        (g, i) => `
      <button type="button" class="${tileClass} reveal" data-lightbox-group="home" data-lightbox-index="${i}" aria-label="View ${g.title || "clinic photo"}">
        <img src="${g.src}" alt="${g.alt || "Patel Clinic"}" loading="lazy" width="800" height="600">
        <span class="gallery-tile__veil" aria-hidden="true"></span>
        <span class="gallery-tile__icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"/></svg></span>
        ${
          g.title
            ? `<span class="gallery-tile__label"><strong>${g.title}</strong><span>${g.caption || ""}</span></span>`
            : ""
        }
      </button>`
      )
      .join("");

    if (window.PatelLightbox?.bindGroup) {
      window.PatelLightbox.bindGroup(container, "home", items);
    }
    initReveal();
  }

  function injectMediaCounts() {
    const photoCount =
      (SITE.gallery?.length || 0) ||
      (SITE.patientPhotos?.length || 0) + (SITE.clinicFacilityImages?.length || 0);
    const videoCount = SITE.reviewVideos?.length || 0;
    const photoLabel = photoCount > 0 ? photoCount + "+" : "50+";

    document.querySelectorAll("[data-media-videos]").forEach((el) => {
      el.textContent = String(videoCount);
    });
    document.querySelectorAll("[data-media-photos]").forEach((el) => {
      el.textContent = photoLabel;
    });
    document.querySelectorAll("[data-gallery-count], [data-gallery-total]").forEach((el) => {
      el.textContent = photoLabel;
    });
  }

  function initFaq() {
    document.querySelectorAll(".faq-question").forEach((btn) => {
      if (btn.dataset.faqBound) return;
      btn.dataset.faqBound = "1";
      btn.addEventListener("click", () => {
        const item = btn.closest(".faq-item");
        const wasOpen = item.classList.contains("open");
        const scope = item.closest(".faq-list--atlas")
          ? item.closest(".faq-group__items") || item.closest(".faq-list")
          : document;
        scope.querySelectorAll(".faq-item").forEach((i) => {
          i.classList.remove("open");
          const q = i.querySelector(".faq-question");
          if (q) q.setAttribute("aria-expanded", "false");
        });
        if (!wasOpen) {
          item.classList.add("open");
          btn.setAttribute("aria-expanded", "true");
        }
      });
    });
  }

  function renderFaqTopicNav(nav) {
    const categories = getFaqCategories();
    if (!nav || !categories.length) return;
    nav.innerHTML = categories
      .map(
        (cat, i) =>
          '<button type="button" class="faq-topic-btn' +
          (i === 0 ? " is-active" : "") +
          '" data-faq-topic="' +
          cat.id +
          '"><strong>' +
          cat.label +
          "</strong><span>" +
          cat.desc +
          "</span></button>"
      )
      .join("");

    nav.querySelectorAll(".faq-topic-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        nav.querySelectorAll(".faq-topic-btn").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        const target = document.getElementById("faq-group-" + btn.dataset.faqTopic);
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    });

    if ("IntersectionObserver" in window) {
      const groups = document.querySelectorAll(".faq-group");
      const observer = new IntersectionObserver(
        (entries) => {
          const visible = entries
            .filter((e) => e.isIntersecting)
            .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
          if (!visible) return;
          const id = visible.target.id.replace("faq-group-", "");
          const active = nav.querySelector('[data-faq-topic="' + id + '"]');
          if (!active || active.classList.contains("is-active")) return;
          nav.querySelectorAll(".faq-topic-btn").forEach((b) => b.classList.remove("is-active"));
          active.classList.add("is-active");
        },
        { rootMargin: "-35% 0px -50% 0px", threshold: [0.2, 0.4] }
      );
      groups.forEach((g) => observer.observe(g));
    }
  }

  function getFaqCategories() {
    if (SITE.faqCategories?.length) return SITE.faqCategories;
    const ids = [];
    SITE.faqs.forEach((f) => {
      const id = f.category || "general";
      if (!ids.includes(id)) ids.push(id);
    });
    return ids.map((id) => ({
      id,
      label: id.charAt(0).toUpperCase() + id.slice(1).replace(/-/g, " "),
      desc: "",
    }));
  }

  function faqHaystackForItem(item) {
    const idx = parseInt(item.getAttribute("data-faq-idx"), 10);
    if (Number.isFinite(idx) && faqSearchTexts[idx]) return faqSearchTexts[idx];
    return (item.textContent || "").toLowerCase();
  }

  function faqItemMatchesQuery(item, query) {
    if (!query) return true;
    const haystack = faqHaystackForItem(item);
    const terms = query.split(/\s+/).filter(Boolean);
    return terms.every((term) => haystack.includes(term));
  }

  function resetFaqAccordionState() {
    const items = document.querySelectorAll("#faq-list .faq-item");
    items.forEach((item, index) => {
      const isFirst = index === 0;
      item.classList.remove("is-filtered-out");
      item.classList.toggle("open", isFirst);
      const btn = item.querySelector(".faq-question");
      if (btn) btn.setAttribute("aria-expanded", isFirst ? "true" : "false");
    });
    document.querySelectorAll(".faq-group").forEach((group) => group.classList.remove("is-hidden"));
  }

  function runFaqSearch() {
    const input = document.getElementById("faq-search-input");
    const status = document.getElementById("faq-search-status");
    const clearBtn = document.getElementById("faq-search-clear");
    const searchWrap = document.querySelector(".faq-search");
    if (!input) return;

    const q = input.value.trim().toLowerCase();
    const items = document.querySelectorAll("#faq-list .faq-item");
    let visible = 0;
    let firstMatch = null;

    items.forEach((item) => {
      const match = faqItemMatchesQuery(item, q);
      item.classList.toggle("is-filtered-out", !!q && !match);
      if (match) {
        visible += 1;
        if (!firstMatch) firstMatch = item;
      }
      if (q) {
        item.classList.toggle("open", match);
        const btn = item.querySelector(".faq-question");
        if (btn) btn.setAttribute("aria-expanded", match ? "true" : "false");
      }
    });

    if (!q) resetFaqAccordionState();

    document.querySelectorAll(".faq-group").forEach((group) => {
      const hasVisible = group.querySelector(".faq-item:not(.is-filtered-out)");
      group.classList.toggle("is-hidden", !!q && !hasVisible);
    });

    if (clearBtn) clearBtn.hidden = !q;
    if (searchWrap) searchWrap.classList.toggle("is-active", !!q);

    if (status) {
      if (!q) {
        status.textContent = "Type a word above — matching questions open below.";
      } else if (visible === 0) {
        status.textContent = "No match. Try: emergency, ECG, home visit, Rajkot, MBBS.";
      } else {
        status.textContent =
          visible === 1 ? "1 question found — opened below." : visible + " questions found — opened below.";
      }
    }

    if (q && firstMatch) {
      requestAnimationFrame(() => {
        firstMatch.scrollIntoView({ behavior: "smooth", block: "nearest" });
      });
    }
  }

  function initFaqSearch() {
    const input = document.getElementById("faq-search-input");
    const clearBtn = document.getElementById("faq-search-clear");
    if (!input) return;

    if (!input.dataset.faqSearchBound) {
      input.dataset.faqSearchBound = "1";
      input.addEventListener("input", runFaqSearch);
      input.addEventListener("keyup", runFaqSearch);
      input.addEventListener("change", runFaqSearch);
      if (clearBtn) {
        clearBtn.addEventListener("click", () => {
          input.value = "";
          runFaqSearch();
          input.focus();
        });
      }
    }

    runFaqSearch();
  }

  function initFaqPage() {
    if (document.body.dataset.page !== "faq") return;
    renderFaqList(document.getElementById("faq-list"));
    initFaqSearch();
  }

  function injectFaqCount() {
    const count = SITE.faqs?.length;
    if (!count) return;
    document.querySelectorAll("[data-faq-count]").forEach((el) => {
      el.textContent = String(count);
    });
  }

  function initAppointmentForm() {
    const form = document.getElementById("appointment-form");
    if (!form) return;

    const serviceSelect = form.querySelector('[name="service"]');
    if (serviceSelect && serviceSelect.options.length <= 1) {
      SITE.services.forEach((s) => {
        const opt = document.createElement("option");
        opt.value = s.title;
        opt.textContent = s.title;
        serviceSelect.appendChild(opt);
      });
      const other = document.createElement("option");
      other.value = "Other / unsure";
      other.textContent = "Other / unsure";
      serviceSelect.appendChild(other);
    }

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const fd = new FormData(form);
      const lines = [
        `Appointment request — ${SITE.name}`,
        `Name: ${fd.get("name")}`,
        `Phone: ${fd.get("phone")}`,
        `Service: ${fd.get("service")}`,
        `Preferred date: ${fd.get("date")}`,
      ];
      const msg = fd.get("message");
      if (msg) lines.push(`Message: ${msg}`);
      window.open(waLink(lines.join("\n")), "_blank", "noopener,noreferrer");
      const note = form.querySelector(".form-success");
      if (note) note.hidden = false;
    });
  }

  function renderFaqList(container) {
    if (!container) return;
    const isAtlas = container.classList.contains("faq-list--atlas");
    const luxury = container.classList.contains("faq-list--luxury");

    if (isAtlas) {
      faqSearchTexts.length = 0;
      const categories = getFaqCategories();
      container.innerHTML = categories
        .map((cat, catIndex) => {
          const items = SITE.faqs.filter((f) => (f.category || "visits") === cat.id);
          if (!items.length) return "";
          const sectionNum = String(catIndex + 1).padStart(2, "0");
          const itemsHtml = items
            .map((f, i) => {
              const searchIdx = faqSearchTexts.length;
              faqSearchTexts.push((f.q + " " + f.a).toLowerCase());
              return (
                '<div class="faq-item faq-item--atlas' +
                (catIndex === 0 && i === 0 ? " open" : "") +
                '" data-faq-idx="' +
                searchIdx +
                '"><button type="button" class="faq-question" aria-expanded="' +
                (catIndex === 0 && i === 0 ? "true" : "false") +
                '">' +
                f.q +
                '<span class="arrow" aria-hidden="true">▼</span></button><div class="faq-answer">' +
                f.a +
                "</div></div>"
              );
            })
            .join("");
          return (
            '<section class="faq-group faq-group--' +
            cat.id +
            '" id="faq-group-' +
            cat.id +
            '"><header class="faq-group__head"><span class="faq-group__index" aria-hidden="true">' +
            sectionNum +
            "</span><div><h3>" +
            cat.label +
            "</h3><p>" +
            cat.desc +
            '</p></div><span class="faq-group__count">' +
            items.length +
            (items.length === 1 ? " question" : " questions") +
            '</span></header><div class="faq-group__items">' +
            itemsHtml +
            "</div></section>"
          );
        })
        .join("");
      renderFaqTopicNav(document.getElementById("faq-topic-nav"));
      injectFaqCount();
      initFaq();
      return;
    }

    container.innerHTML = SITE.faqs
      .map(
        (f, i) =>
          '<div class="faq-item' +
          (luxury ? " faq-item--luxury" : "") +
          (i === 0 ? " open" : "") +
          '"><button type="button" class="faq-question" aria-expanded="' +
          (i === 0) +
          '">' +
          f.q +
          '<span class="arrow">▼</span></button><div class="faq-answer">' +
          f.a +
          "</div></div>"
      )
      .join("");
    initFaq();
  }

  function injectFavicon() {
    if (!SITE.logo) return;
    let link = document.querySelector('link[rel="icon"]');
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.href = SITE.logo;
    link.type = "image/jpeg";
  }

  window.PatelReveal = initReveal;

  function renderClinicImagesGrid(container, linkToGallery) {
    if (!container || !SITE.clinicImages) return;
    const isAboutGallery = container.classList.contains("about-gallery");
    container.innerHTML = SITE.clinicImages
      .map(
        (img, i) => {
          const num = String(i + 1).padStart(2, "0");
          if (isAboutGallery) {
            return `
      <a href="${linkToGallery ? "gallery.html" : img.src}" class="about-gallery-card reveal"${linkToGallery ? "" : ' target="_blank" rel="noopener"'}>
        <div class="about-gallery-card__media">
          <img src="${img.src}" alt="${img.alt}" loading="lazy" width="600" height="400">
          <span class="about-gallery-card__num">${num}</span>
        </div>
        <div class="about-gallery-card__body">
          <h3>${img.title}</h3>
          <p>${img.caption}</p>
        </div>
      </a>`;
          }
          return `
      <a href="${linkToGallery ? "gallery.html" : img.src}" class="clinic-image-card reveal"${linkToGallery ? "" : ' target="_blank" rel="noopener"'}>
        <img src="${img.src}" alt="${img.alt}" loading="lazy" width="600" height="400">
        <div class="clinic-image-card-caption">
          <strong>${img.title}</strong>
          <span>${img.caption}</span>
        </div>
      </a>`;
        }
      )
      .join("");
    initReveal();
  }

  function renderTestimonialGrid(container) {
    if (!container) return;
    const isPageAtlas = container.classList.contains("testimonials-quotes-grid");
    const luxury =
      isPageAtlas || container.classList.contains("testimonial-grid--luxury");
    container.innerHTML = SITE.testimonials
      .map((t) => {
        const cardClass = isPageAtlas
          ? "testimonials-quote-card"
          : luxury
            ? "testimonial-card--luxury"
            : "testimonial-card";
        return `
      <article class="${cardClass} reveal">
        ${luxury ? '<p class="testimonial-stars" aria-hidden="true">★★★★★</p>' : ""}
        <blockquote>&ldquo;${t.quote}&rdquo;</blockquote>
        <cite><strong>${t.name}</strong> · ${t.role}</cite>
      </article>`;
      })
      .join("");
    initReveal();
  }

  function renderServicesPage() {
    const container = document.getElementById("services-list");
    if (!container) return;
    const icons = ["🩺", "🌿", "📊", "👶", "💉", "🚨", "🏠", "📋"];
    const isAtlas = container.classList.contains("services-atlas-list");
    container.innerHTML = SITE.services
      .map((s, i) => {
        const num = String(i + 1).padStart(2, "0");
        if (isAtlas) {
          return `
      <article class="services-detail services-detail--${s.id} reveal" id="${s.id}">
        <span class="services-detail__shine" aria-hidden="true"></span>
        <div class="services-detail__lead">
          <span class="services-detail__num">${num}</span>
          <span class="services-detail__icon" aria-hidden="true">${icons[i] || "🩺"}</span>
        </div>
        <div class="services-detail__body">
          <h2>${s.title}</h2>
          <p>${s.short}</p>
        </div>
        <div class="services-detail__actions">
          <a href="appointment.html" class="services-detail__btn services-detail__btn--primary">Book visit</a>
          <a href="${SITE.whatsappUrl}" class="services-detail__btn services-detail__btn--wa" target="_blank" rel="noopener noreferrer">WhatsApp</a>
        </div>
      </article>`;
        }
        return `
      <article class="service-detail service-detail--luxury reveal" id="${s.id}">
        <p class="service-detail--luxury__index">Service ${num}</p>
        <div class="service-detail--luxury__head">
          <div class="service-detail--luxury__main">
            <span class="service-detail--luxury__icon" aria-hidden="true">${icons[i] || "🩺"}</span>
            <div>
              <h2>${s.title}</h2>
              <p class="service-detail--luxury__desc">${s.short}</p>
            </div>
          </div>
          <a href="appointment.html" class="btn btn-primary">Book visit</a>
        </div>
      </article>`;
      })
      .join("");
    initReveal();
  }

  function mapsOpenUrl() {
    const raw = SITE.mapsUrl || "";
    if (!raw) {
      return "https://www.google.com/maps/search/?api=1&query=Patel+Clinic+Gayatrinagar+Rajkot";
    }
    return raw.replace(/&?output=embed/gi, "").replace(/\?$/, "");
  }

  function mapsDirectionsUrl() {
    const open = mapsOpenUrl();
    if (open.includes("maps.google.com")) {
      return open + (open.includes("?") ? "&" : "?") + "dirflg=d";
    }
    return open;
  }

  function contactWhatsAppUrl(message) {
    const base = SITE.whatsappUrl || "https://wa.me/" + (SITE.whatsapp || "919978815066");
    const text = message || "Hello Patel Clinic, I have a question.";
    const sep = base.includes("?") ? "&" : "?";
    return base + sep + "text=" + encodeURIComponent(text);
  }

  function renderHoursList(container) {
    if (!container) return;
    const isAtlas = container.classList.contains("contact-atlas-hours");
    const today = new Date().toLocaleDateString("en-IN", { weekday: "long" });
    container.innerHTML = SITE.hours
      .map((h) => {
        const isToday = h.day === today;
        if (isAtlas) {
          return (
            '<li class="' +
            (isToday ? "is-today" : "") +
            '"><span>' +
            h.day +
            (isToday ? " · Today" : "") +
            "</span><span>" +
            h.hours +
            "</span></li>"
          );
        }
        return "<li><span>" + h.day + "</span><span>" + h.hours + "</span></li>";
      })
      .join("");
  }

  function phoneTelHref(phone) {
    const digits = String(phone || "").replace(/\D/g, "");
    if (!digits) return "#";
    const local = digits.length > 10 ? digits.replace(/^91/, "") : digits;
    return "tel:+91" + local;
  }

  function renderContactDoctors(container) {
    if (!container || !SITE.team?.length) return;
    container.innerHTML = SITE.team
      .map((m, i) => {
        const telHref = phoneTelHref(m.phone);
        const cardClass =
          "contact-doctor-card" +
          (i === 0 ? " contact-doctor-card--hiren" : " contact-doctor-card--km");
        return (
          '<article class="' +
          cardClass +
          '"><div class="contact-doctor-card__photo"><img src="' +
          (m.image || "images/patel2.jpeg") +
          '" alt="' +
          m.name +
          '" loading="lazy" width="200" height="200"></div><div class="contact-doctor-card__body"><p class="contact-doctor-card__eyebrow">Direct line</p><h3>' +
          m.name +
          '</h3><p class="contact-doctor-card__role">' +
          m.role +
          '</p><p class="contact-doctor-card__quals">' +
          m.qualifications +
          '</p><div class="contact-doctor-card__actions"><a href="' +
          telHref +
          '" class="contact-doctor-card__btn">Call ' +
          (m.phone || "") +
          '</a><a href="' +
          contactWhatsAppUrl("Hello Patel Clinic, I would like to speak with " + m.name + ".") +
          '" class="contact-doctor-card__btn contact-doctor-card__btn--wa" target="_blank" rel="noopener noreferrer">WhatsApp</a></div></div></article>'
        );
      })
      .join("");
  }

  function initContactPage() {
    if (document.body.dataset.page !== "contact") return;

    const waUrl = contactWhatsAppUrl();
    document.querySelectorAll("[data-site-address]").forEach((el) => {
      el.textContent = SITE.address || el.textContent;
    });
    document.querySelectorAll("[data-site-landmark]").forEach((el) => {
      el.textContent = SITE.landmark || el.textContent;
    });

    const waIds = [
      "contact-hero-wa",
      "contact-quick-wa",
      "contact-panel-wa",
    ];
    waIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        el.href = waUrl;
        el.target = "_blank";
        el.rel = "noopener noreferrer";
      }
    });

    const quickCall = document.getElementById("contact-quick-call");
    if (quickCall) quickCall.href = "tel:" + SITE.phoneTel;

    const mapsOpen = document.getElementById("contact-maps-open");
    const mapsDir = document.getElementById("contact-maps-dir");
    if (mapsOpen) mapsOpen.href = mapsOpenUrl();
    if (mapsDir) mapsDir.href = mapsDirectionsUrl();

    const mapFrame = document.getElementById("map-frame");
    if (mapFrame && SITE.mapsUrl) mapFrame.src = SITE.mapsUrl;

    if (SITE.email) {
      const emailRow = document.getElementById("contact-email-row");
      const emailLink = document.getElementById("contact-panel-email");
      if (emailRow) emailRow.hidden = false;
      if (emailLink) {
        emailLink.href = "mailto:" + SITE.email;
        emailLink.textContent = SITE.email;
      }
    }

    renderHoursList(document.getElementById("hours-list"));
    renderContactDoctors(document.getElementById("contact-doctors-grid"));
    window.PatelReveal?.();
  }

  function renderTeamGrid(container) {
    if (!container || !SITE.team) return;
    const isAtlas =
      container.classList.contains("atlas-team") ||
      container.classList.contains("about-atlas-team") ||
      !!container.closest(".atlas-team");
    container.innerHTML = SITE.team
      .map(
        (m, i) => {
          const tel = m.phone ? String(m.phone).replace(/\s/g, "") : "";
          if (isAtlas) {
            return `
      <article class="atlas-team-card reveal${i === 0 ? " atlas-team-card--hiren" : " atlas-team-card--km"}">
        <div class="atlas-team-card__frame">
          <img src="${m.image}" alt="${m.name}" loading="lazy" width="600" height="${m.imageWide ? 400 : 750}">
          <span class="atlas-team-card__shine" aria-hidden="true"></span>
        </div>
        <div class="atlas-team-card__body">
          <span class="atlas-team-card__badge">${i === 0 ? "BHMS · Homoeopathy" : "MBBS · Physician"}</span>
          <h3>${m.name}</h3>
          <p class="atlas-team-card__role">${m.role}</p>
          ${m.qualifications ? `<p class="atlas-team-card__qual">${m.qualifications}</p>` : ""}
          <p class="atlas-team-card__bio">${m.bio}</p>
          ${m.phone ? `<a href="tel:+91${tel}" class="atlas-team-card__phone"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>${m.phone}</a>` : ""}
        </div>
      </article>`;
          }
          return `
      <article class="team-card team-card--luxury reveal${m.imageWide ? " team-card--landscape" : ""}">
        <img src="${m.image}" alt="${m.name}" loading="lazy" width="600" height="${m.imageWide ? 400 : 750}">
        <div class="team-card-body">
          <h3>${m.name}</h3>
          <p class="role">${m.role}</p>
          ${m.qualifications ? `<p class="team-qual">${m.qualifications}</p>` : ""}
          <p>${m.bio}</p>
          ${m.phone ? `<p class="team-phone">📞 <a href="tel:+91${tel}">${m.phone}</a></p>` : ""}
        </div>
      </article>`;
        }
      )
      .join("");
    initReveal();
  }

  function renderFacilities(container) {
    if (!container || !SITE.facilities) return;
    const isAtlas =
      container.classList.contains("atlas-facilities") ||
      container.classList.contains("about-facilities");
    container.innerHTML = SITE.facilities
      .map(
        (f, i) => {
          const num = String(i + 1).padStart(2, "0");
          if (isAtlas) {
            return `
      <article class="atlas-facility reveal">
        <span class="atlas-facility__num">${num}</span>
        <span class="atlas-facility__icon" aria-hidden="true">${f.icon}</span>
        <h3>${f.title}</h3>
        <p>${f.text}</p>
        <span class="atlas-facility__shine" aria-hidden="true"></span>
      </article>`;
          }
          return `
      <div class="facility-card facility-card--luxury reveal">
        <div class="facility-icon">${f.icon}</div>
        <h3>${f.title}</h3>
        <p>${f.text}</p>
      </div>`;
        }
      )
      .join("");
    initReveal();
  }

  function syncHomeTopOffset() {
    if (document.body.dataset.page !== "home") return;
    const bar = document.getElementById("announcement-bar");
    const h = bar && bar.textContent.trim() ? bar.offsetHeight : 0;
    document.documentElement.style.setProperty("--top-announcement-h", `${h}px`);
  }

  function renderAnnouncement() {
    const el = document.getElementById("announcement-bar");
    if (!el || !SITE.announcement) return;
    el.innerHTML = `<div class="container"><span>${SITE.announcement}</span><span><a href="tel:${SITE.phoneTel}">Dr. Hiren: ${SITE.phoneDisplay}</a> · <a href="tel:${SITE.phoneAlt}">${SITE.phoneAltDisplay || SITE.phoneAlt}</a></span></div>`;
    syncHomeTopOffset();
  }

  function renderAffiliations(container) {
    if (!container || !SITE.affiliations) return;
    const isAtlas =
      container.classList.contains("atlas-partners") ||
      container.classList.contains("about-partners");
    container.innerHTML = SITE.affiliations
      .map((a, i) => {
        const short = a.includes("LIC") && a.includes("Authorized")
          ? "LIC Panel"
          : a.includes("HDFC")
            ? "HDFC ERGO"
            : a.includes("TATA")
              ? "TATA AIA"
              : a.includes("Panel")
                ? "Panel Doctor"
                : a;
        if (isAtlas) {
          return `<span class="atlas-partner${i === 0 ? " atlas-partner--featured" : ""}">${short}</span>`;
        }
        return `<span class="affiliation-tag affiliation-tag--luxury">${a}</span>`;
      })
      .join("");
    initReveal();
  }

  function renderHomeServices(container) {
    if (!container) return;
    const icons = ["🩺", "🌿", "📊", "👶", "💉", "🚨", "🏠", "📋"];
    const isAtlas = container.classList.contains("atlas-services");
    container.innerHTML = SITE.services
      .map(
        (s, i) => {
          const num = String(i + 1).padStart(2, "0");
          if (isAtlas) {
            return `
      <a href="services.html#${s.id}" class="atlas-service reveal atlas-service--${s.id}">
        <span class="atlas-service__num">${num}</span>
        <span class="atlas-service__icon" aria-hidden="true">${icons[i] || "🩺"}</span>
        <h3>${s.title}</h3>
        <p>${s.short}</p>
        <span class="atlas-service__link">Learn more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg></span>
        <span class="atlas-service__shine" aria-hidden="true"></span>
      </a>`;
          }
          return `
      <a href="services.html#${s.id}" class="service-card service-card--luxury reveal">
        <span class="service-icon">${icons[i] || "🩺"}</span>
        <h3>${s.title}</h3>
        <p>${s.short}</p>
        <span class="link">Learn more</span>
      </a>`;
        }
      )
      .join("");
    initReveal();
  }

  function renderHomePackages(container) {
    if (!container) return;
    const isAtlas = container.classList.contains("atlas-plans");
    container.innerHTML = SITE.packages
      .map(
        (p, i) => {
          if (isAtlas) {
            return `
      <article class="atlas-plan reveal${p.highlighted ? " atlas-plan--featured" : ""}">
        ${p.highlighted ? '<span class="atlas-plan__badge">Popular</span>' : ""}
        <span class="atlas-plan__num">${String(i + 1).padStart(2, "0")}</span>
        <h3>${p.name}</h3>
        <p class="atlas-plan__price">${p.price}</p>
        <ul class="atlas-plan__features">${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>
        <a href="appointment.html" class="atlas-plan__btn">Enquire now</a>
      </article>`;
          }
          return `
      <div class="package-card package-card--luxury${p.highlighted ? " featured" : ""} reveal">
        ${p.highlighted ? '<span class="package-badge">Popular</span>' : '<span class="package-badge" style="visibility:hidden">.</span>'}
        <h3>${p.name}</h3>
        <p class="package-price">${p.price}</p>
        <ul class="package-features">${p.features.map((f) => `<li>${f}</li>`).join("")}</ul>
        <a href="appointment.html" class="btn btn-dark" style="width:100%">Enquire now</a>
      </div>`;
        }
      )
      .join("");
    initReveal();
  }

  function renderHomeStats(container) {
    if (!container || !SITE.stats) return;
    const isAtlas = container.classList.contains("atlas-stats");
    container.innerHTML = SITE.stats
      .map(
        (s, i) => {
          if (isAtlas) {
            return `
      <article class="atlas-stat reveal">
        <span class="atlas-stat__num">${String(i + 1).padStart(2, "0")}</span>
        <p class="atlas-stat__value" data-stat="${s.value}" data-suffix="${s.suffix || ""}"${s.decimals ? ` data-decimals="${s.decimals}"` : ""}>0</p>
        <p class="atlas-stat__label">${s.label}</p>
      </article>`;
          }
          return `
      <div class="stat-card reveal">
        <p class="stat-value" data-stat="${s.value}" data-suffix="${s.suffix || ""}"${s.decimals ? ` data-decimals="${s.decimals}"` : ""}>0</p>
        <p class="stat-label">${s.label}</p>
      </div>`;
        }
      )
      .join("");
    initStats();
    initReveal();
  }

  document.addEventListener("DOMContentLoaded", () => {
    injectFavicon();
    initLayout();
    initReveal();
    initStats();
    initTestimonialSlider();
    initAppointmentForm();
    initFaqPage();
    initContactPage();
    renderClinicImagesGrid(document.getElementById("clinic-images-grid"), true);
    renderClinicImagesGrid(document.getElementById("about-images-grid"), false);
    renderHomeGalleryBento(document.getElementById("home-gallery-bento"));
    renderHomeTestimonialChips(document.getElementById("home-testimonial-chips"));
    renderHomeTestimonialChips(document.getElementById("testimonials-voice-chips"));
    renderTestimonialGrid(document.getElementById("testimonial-grid"));
    injectMediaCounts();
    renderServicesPage();
    renderHoursList(document.getElementById("hours-list-form"));

    const mapFrame = document.getElementById("map-frame");
    if (mapFrame && mapFrame.src === "" && SITE.mapsUrl) mapFrame.src = SITE.mapsUrl;

    renderAnnouncement();
    syncHomeTopOffset();
    window.addEventListener("resize", syncHomeTopOffset);
    requestAnimationFrame(syncHomeTopOffset);
    document.querySelectorAll("#team-grid").forEach((el) => renderTeamGrid(el));
    renderFacilities(document.getElementById("facilities-grid"));
    renderAffiliations(document.getElementById("affiliations"));
    renderHomeServices(document.getElementById("home-services"));
    renderHomePackages(document.getElementById("home-packages"));
    renderHomeStats(document.getElementById("stats-grid"));

    const heroImg = document.getElementById("hero-bg-img");
    if (heroImg && SITE.heroImage) heroImg.src = SITE.heroImage;

    document.querySelectorAll("[data-site-address]").forEach((el) => {
      el.textContent = SITE.address;
    });
    document.querySelectorAll("[data-site-rating]").forEach((el) => {
      el.textContent = SITE.rating;
    });
  });
})();
