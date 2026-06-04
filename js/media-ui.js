/** Premium gallery, lightbox & video showcase */
(function () {
  let lightboxItems = [];
  let lightboxIndex = 0;

  function wireLazyVideos(root) {
    const scope = root || document;
    scope.querySelectorAll("video[src]").forEach((video) => {
      if (video.dataset.lazySrc || video.dataset.videoEager !== undefined) return;
      const src = video.getAttribute("src");
      if (!src) return;
      video.dataset.lazySrc = src;
      video.removeAttribute("src");
      video.preload = "none";
    });

    const videos = scope.querySelectorAll("video[data-lazy-src]");
    if (!videos.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const video = entry.target;
          if (!video.dataset.lazySrc || video.src) return;
          video.src = video.dataset.lazySrc;
          video.preload = "metadata";
          io.unobserve(video);
        });
      },
      { rootMargin: "240px 0px", threshold: 0.01 }
    );
    videos.forEach((video) => io.observe(video));
  }

  function ensureVideoSrc(video) {
    if (!video || !video.dataset.lazySrc) return;
    if (!video.getAttribute("src")) {
      video.src = video.dataset.lazySrc;
      video.preload = "metadata";
      video.load();
    }
  }

  function posterLayerHtml(v, eager, posterClass) {
    if (!v.poster) return "";
    const cls = posterClass || "video-card__poster";
    const loading = eager ? "eager" : "lazy";
    const webp =
      typeof SITE !== "undefined" && SITE.webpPath ? SITE.webpPath(v.poster) : "";
    if (webp) {
      return (
        '<picture class="' +
        cls +
        '" aria-hidden="true">' +
        '<source srcset="' +
        webp +
        '" type="image/webp">' +
        '<img src="' +
        v.poster +
        '" alt="" loading="' +
        loading +
        '" decoding="async" width="600" height="800">' +
        "</picture>"
      );
    }
    return (
      '<img class="' +
      cls +
      '" src="' +
      v.poster +
      '" alt="" loading="' +
      loading +
      '" decoding="async" width="600" height="800">'
    );
  }

  function videoTagAttrs(v, eager) {
    const poster = v.poster ? ' poster="' + v.poster + '"' : "";
    if (eager) {
      return (
        ' src="' +
        v.src +
        '" data-video-eager preload="metadata"' +
        poster +
        " playsinline"
      );
    }
    return ' data-lazy-src="' + v.src + '" preload="none"' + poster + " playsinline";
  }

  function primeEagerVideos(container) {
    if (!container) return;
    container.querySelectorAll("video[data-video-eager]").forEach((video) => {
      const card = video.closest(".video-card, .gallery-reel-card");
      video.load();
      const markReady = () => {
        if (card) card.classList.add("video-card--ready");
      };
      if (video.readyState >= 2) markReady();
      else video.addEventListener("loadeddata", markReady, { once: true });
    });
  }

  function ensureLightbox() {
    if (document.getElementById("media-lightbox")) return;
    const el = document.createElement("div");
    el.id = "media-lightbox";
    el.className = "lightbox";
    el.hidden = true;
    el.innerHTML =
      '<div class="lightbox__backdrop" data-close tabindex="-1"></div>' +
      '<div class="lightbox__frame" role="dialog" aria-modal="true" aria-label="Media viewer">' +
      '<button type="button" class="lightbox__close" data-close aria-label="Close">×</button>' +
      '<button type="button" class="lightbox__nav lightbox__nav--prev" data-prev aria-label="Previous">‹</button>' +
      '<div class="lightbox__stage"></div>' +
      '<button type="button" class="lightbox__nav lightbox__nav--next" data-next aria-label="Next">›</button>' +
      "</div>";
    document.body.appendChild(el);

    const close = () => closeLightbox();
    el.querySelectorAll("[data-close]").forEach((n) => n.addEventListener("click", close));
    el.querySelector("[data-prev]")?.addEventListener("click", () => stepLightbox(-1));
    el.querySelector("[data-next]")?.addEventListener("click", () => stepLightbox(1));
    document.addEventListener("keydown", (e) => {
      if (el.hidden) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") stepLightbox(-1);
      if (e.key === "ArrowRight") stepLightbox(1);
    });
  }

  function renderLightboxStage() {
    const stage = document.querySelector("#media-lightbox .lightbox__stage");
    if (!stage || !lightboxItems.length) return;
    const item = lightboxItems[lightboxIndex];
    const cap =
      item.title || item.caption
        ? '<figcaption class="lightbox__caption"><strong>' +
          (item.title || "") +
          "</strong>" +
          (item.caption ? "<span>" + item.caption + "</span>" : "") +
          "</figcaption>"
        : "";
    if (item.type === "video") {
      stage.innerHTML =
        '<video src="' +
        item.src +
        '" controls autoplay playsinline class="lightbox__media"></video>' +
        cap;
    } else {
      const img =
        typeof SITE !== "undefined" && SITE.imgHtml
          ? SITE.imgHtml(item.src, {
              alt: item.alt || item.title || "Patel Clinic",
              className: "lightbox__media",
              loading: "eager",
              webp: true,
            })
          : '<img src="' + item.src + '" alt="' + (item.alt || "") + '" class="lightbox__media">';
      stage.innerHTML = '<figure class="lightbox__figure">' + img + cap + "</figure>";
    }
  }

  function openLightbox(items, index) {
    ensureLightbox();
    lightboxItems = items;
    lightboxIndex = index;
    const lb = document.getElementById("media-lightbox");
    lb.hidden = false;
    document.body.classList.add("lightbox-open");
    renderLightboxStage();
  }

  function closeLightbox() {
    const lb = document.getElementById("media-lightbox");
    if (!lb) return;
    lb.hidden = true;
    document.body.classList.remove("lightbox-open");
    const stage = lb.querySelector(".lightbox__stage");
    if (stage) stage.innerHTML = "";
  }

  function stepLightbox(dir) {
    if (!lightboxItems.length) return;
    lightboxIndex = (lightboxIndex + dir + lightboxItems.length) % lightboxItems.length;
    renderLightboxStage();
  }

  function bindLightboxGroup(container, groupName, items, type) {
    if (!container) return;
    const mediaType = type || "image";
    const payload = items.map((item) => ({
      src: item.src,
      alt: item.alt,
      title: item.title,
      caption: item.caption,
      type: item.type || mediaType,
    }));
    container.querySelectorAll('[data-lightbox-group="' + groupName + '"]').forEach((btn) => {
      btn.addEventListener("click", () => {
        openLightbox(payload, parseInt(btn.dataset.lightboxIndex, 10));
      });
    });
  }

  const GALLERY_FILTER_LABELS = {
    official: "Branding",
    facility: "Facilities",
    "patient-care": "Patient care",
    homoeopathy: "Pharmacy",
  };

  let galleryReservedSrc = null;

  function normGallerySrc(src) {
    return (src || "").split("?")[0];
  }

  function resetGalleryReserved() {
    galleryReservedSrc = new Set();
  }

  function reserveGallerySrc(src) {
    if (!galleryReservedSrc) resetGalleryReserved();
    const key = normGallerySrc(src);
    if (key) galleryReservedSrc.add(key);
  }

  function isGallerySrcReserved(src) {
    return galleryReservedSrc && galleryReservedSrc.has(normGallerySrc(src));
  }

  function dedupeGalleryItems(items) {
    const out = [];
    items.forEach((g) => {
      if (!g || !g.src) return;
      if (isGallerySrcReserved(g.src)) return;
      reserveGallerySrc(g.src);
      out.push(g);
    });
    return out;
  }

  const GALLERY_SECTION_THEMES = {
    official: "gallery-atlas-section--brand",
    facility: "gallery-atlas-section--facility",
    "patient-care": "gallery-atlas-section--care",
    homoeopathy: "gallery-atlas-section--pharmacy",
  };

  function heroMosaicItems() {
    const pool = []
      .concat(SITE.officialGallery || SITE.clinicImages || [])
      .concat(SITE.clinicFacilityImages || [])
      .concat(SITE.patientPhotos || []);
    const seen = new Set();
    const picks = [];
    pool.forEach((g) => {
      if (!g?.src || seen.has(g.src)) return;
      seen.add(g.src);
      picks.push(g);
    });
    return picks.slice(0, 4);
  }

  function filmstripItems() {
    const mosaicSrc = new Set(heroMosaicItems().map((g) => g.src));
    const pool = []
      .concat(SITE.clinicFacilityImages || [])
      .concat(SITE.patientPhotos || [])
      .concat(SITE.officialGallery || SITE.clinicImages || []);
    const seen = new Set(mosaicSrc);
    const out = [];
    pool.forEach((g) => {
      if (!g?.src || seen.has(g.src)) return;
      seen.add(g.src);
      out.push(g);
    });
    return out.slice(0, 14);
  }

  function galleryTileCaption(g) {
    const title = g.title || g.alt || "Photograph";
    const sub = g.caption || "";
    return (
      '<span class="gallery-tile__label"><strong>' +
      title +
      "</strong>" +
      (sub ? "<span>" + sub + "</span>" : "") +
      "</span>"
    );
  }

  function atlasTileModifiers(index) {
    if (index === 0) return " gallery-tile--feature";
    if (index % 11 === 0) return " gallery-tile--wide";
    if (index % 7 === 3) return " gallery-tile--tall";
    return "";
  }

  function galleryImageHtml(g, opts) {
    const src = g.src || "";
    const alt = (g.alt || g.title || "Patel Clinic").replace(/"/g, "&quot;");
    const useWebp =
      opts && opts.webp !== false && typeof SITE !== "undefined" && SITE.hasWebp && SITE.hasWebp(src);
    if (typeof SITE !== "undefined" && SITE.imgHtml) {
      return SITE.imgHtml(src, {
        alt: g.alt || g.title || "Patel Clinic",
        width: 800,
        height: 800,
        loading: (opts && opts.loading) || "lazy",
        webp: useWebp,
      });
    }
    return (
      '<img src="' +
      src +
      '" alt="' +
      alt +
      '" loading="' +
      ((opts && opts.loading) || "lazy") +
      '" width="800" height="800" decoding="async">'
    );
  }

  function galleryTileHtml(g, index, group, isPageAtlas, tileOpts) {
    const opts = tileOpts || {};
    const isHomoeo = group === "homoeopathy";
    const wide =
      isPageAtlas && !isHomoeo
        ? atlasTileModifiers(index)
        : !isHomoeo && index % 7 === 0
          ? " gallery-tile--wide"
          : "";
    const homoeoSize =
      isHomoeo && isPageAtlas
        ? index === 0
          ? " gallery-tile--homoeo-feature"
          : " gallery-tile--homoeo"
        : "";
    const caption = galleryTileCaption(g);
    const eager = opts && opts.eager === true;
    const loading = eager ? "eager" : index < 4 ? "eager" : "lazy";
    return (
      '<button type="button" class="gallery-tile' +
      (isPageAtlas ? " gallery-atlas-tile" : "") +
      wide +
      homoeoSize +
      " reveal" +
      '" data-lightbox-group="' +
      group +
      '" data-lightbox-index="' +
      index +
      '" aria-label="View ' +
      (g.title || "photograph") +
      '">' +
      galleryImageHtml(g, {
        webp: true,
        loading: loading,
      }) +
      '<span class="gallery-tile__veil" aria-hidden="true"></span>' +
      '<span class="gallery-tile__icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"/></svg></span>' +
      caption +
      "</button>"
    );
  }

  function renderGalleryHeroFilmstrip(container) {
    if (!container) return;
    const items = filmstripItems();
    if (!items.length) return;
    container.innerHTML = items
      .map(
        (g) =>
          typeof SITE !== "undefined" && SITE.imgHtml
            ? SITE.imgHtml(g.src, {
                alt: g.alt || "Patel Clinic",
                width: 120,
                height: 90,
                loading: "lazy",
              })
            : '<img src="' +
              g.src +
              '" alt="' +
              (g.alt || "Patel Clinic") +
              '" width="120" height="90" loading="lazy" decoding="async">'
      )
      .join("");
  }

  function renderGalleryHeroMosaic(container) {
    if (!container) return;
    resetGalleryReserved();
    const items = heroMosaicItems();
    items.forEach((g) => reserveGallerySrc(g.src));
    if (!items.length) return;
    container.innerHTML = items
      .map(
        (g, i) =>
          '<button type="button" class="gallery-hero__mosaic-frame' +
          (i === 0 ? " gallery-hero__mosaic-frame--hero" : "") +
          '" data-lightbox-group="hero-mosaic" data-lightbox-index="' +
          i +
          '" aria-label="View featured photo">' +
          (typeof SITE !== "undefined" && SITE.imgHtml
            ? SITE.imgHtml(g.src, {
                alt: g.alt || "Patel Clinic",
                loading: i === 0 ? "eager" : "lazy",
                width: 600,
                height: 800,
                webp: true,
              })
            : '<img src="' +
              g.src +
              '" alt="' +
              (g.alt || "Patel Clinic") +
              '" loading="' +
              (i === 0 ? "eager" : "lazy") +
              '" width="600" height="800">') +
          '<span class="gallery-hero__mosaic-hint">View</span></button>'
      )
      .join("");
    bindLightboxGroup(container, "hero-mosaic", items);
    window.PatelReveal?.();
  }

  function bindHomeGalleryBento() {
    const container = document.getElementById("home-gallery-bento");
    if (!container || !container.querySelector('[data-lightbox-group="home"]')) return;
    const picks = [];
    if (SITE.clinicImages?.[0]) picks.push(SITE.clinicImages[0]);
    if (SITE.clinicFacilityImages?.[0]) picks.push(SITE.clinicFacilityImages[0]);
    if (SITE.clinicFacilityImages?.[4]) picks.push(SITE.clinicFacilityImages[4]);
    if (SITE.patientPhotos?.[0]) picks.push(SITE.patientPhotos[0]);
    if (SITE.patientPhotos?.[8]) picks.push(SITE.patientPhotos[8]);
    if (SITE.clinicImages?.[2]) picks.push(SITE.clinicImages[2]);
    bindLightboxGroup(container, "home", picks.filter(Boolean).slice(0, 6));
  }

  window.PatelLightbox = { bindGroup: bindLightboxGroup, open: openLightbox };

  function applyGalleryFilter(nav, id) {
    nav.querySelectorAll(".gallery-filter").forEach((b) => {
      b.classList.toggle("is-active", b.dataset.filter === id);
    });
    document.querySelectorAll(".gallery-atlas-section, .gallery-section").forEach((sec) => {
      const match = id === "all" || sec.id === id;
      sec.classList.toggle("is-hidden", id !== "all" && sec.id !== id);
      sec.classList.toggle("is-dimmed", id === "all" ? false : !match);
    });
    if (id !== "all") {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }

  function initGalleryFilterScrollSpy(nav) {
    const sections = document.querySelectorAll(".gallery-atlas-section");
    if (!sections.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const active = nav.querySelector('.gallery-filter[data-filter="' + visible.target.id + '"]');
        if (!active || active.classList.contains("is-active")) return;
        const allBtn = nav.querySelector('.gallery-filter[data-filter="all"]');
        if (allBtn?.classList.contains("is-active")) return;
        nav.querySelectorAll(".gallery-filter").forEach((b) => b.classList.remove("is-active"));
        active.classList.add("is-active");
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: [0.15, 0.35, 0.55] }
    );

    sections.forEach((sec) => observer.observe(sec));
  }

  function initGalleryToolbarStuck() {
    const wrap = document.getElementById("gallery-toolbar-wrap");
    if (!wrap) return;
    const onScroll = () => {
      wrap.classList.toggle("is-stuck", wrap.getBoundingClientRect().top <= (parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--nav-h")) || 92) + 2);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function renderGalleryFilters(nav) {
    if (!nav || !SITE.gallerySections?.length) return;
    const total = SITE.gallery?.length || SITE.gallerySections.reduce((n, s) => n + s.items.length, 0);
    const filters = [{ id: "all", label: "All", count: total }].concat(
      SITE.gallerySections.map((s) => ({
        id: s.id,
        label: GALLERY_FILTER_LABELS[s.id] || s.title.split(" ")[0],
        count: s.items.length,
      }))
    );
    nav.innerHTML = filters
      .map(
        (f, i) =>
          '<button type="button" class="gallery-filter' +
          (i === 0 ? " is-active" : "") +
          '" data-filter="' +
          f.id +
          '">' +
          f.label +
          '<span class="gallery-filter__count">' +
          f.count +
          "</span></button>"
      )
      .join("");

    nav.querySelectorAll(".gallery-filter").forEach((btn) => {
      btn.addEventListener("click", () => applyGalleryFilter(nav, btn.dataset.filter));
    });

    initGalleryFilterScrollSpy(nav);
    initGalleryToolbarStuck();
  }

  function renderGallery(container) {
    if (!container) return;
    const sections = SITE.gallerySections;
    const isPageAtlas = container.classList.contains("gallery-page-sections");
    if (sections?.length) {
      if (isPageAtlas && !galleryReservedSrc) {
        resetGalleryReserved();
        heroMosaicItems().forEach((g) => reserveGallerySrc(g.src));
      }

      const built = sections.map((section, sectionIndex) => {
        const items = isPageAtlas ? dedupeGalleryItems(section.items) : section.items;
        const tiles = items
          .map((g, i) => galleryTileHtml(g, i, section.id, isPageAtlas))
          .join("");
        const theme = GALLERY_SECTION_THEMES[section.id] || "";
        const sectionNum = String(sectionIndex + 1).padStart(2, "0");
        const pharmacyClass = section.id === "homoeopathy" ? " gallery-atlas-section--pharmacy-muted" : "";
        let html = "";
        if (isPageAtlas) {
          html =
            '<section class="gallery-atlas-section reveal ' +
            theme +
            pharmacyClass +
            '" id="' +
            section.id +
            '"><header class="gallery-atlas-section__head"><span class="gallery-atlas-section__index" aria-hidden="true">' +
            sectionNum +
            '</span><div><h2>' +
            section.title +
            "</h2>" +
            (section.subtitle ? "<p>" + section.subtitle + "</p>" : "") +
            '</div><span class="gallery-atlas-section__count">' +
            items.length +
            ' photos</span></header><div class="gallery-atlas-masonry gallery-atlas-masonry--corporate gallery-masonry' +
            (section.id === "homoeopathy" ? " gallery-atlas-masonry--pharmacy" : "") +
            '" data-gallery-group="' +
            section.id +
            '">' +
            tiles +
            "</div></section>";
        } else {
          html =
            '<section class="gallery-section reveal" id="' +
            section.id +
            '"><header class="gallery-section__head"><h2>' +
            section.title +
            "</h2>" +
            (section.subtitle ? "<p>" + section.subtitle + "</p>" : "") +
            '</header><div class="gallery-masonry gallery-masonry--dense" data-gallery-group="' +
            section.id +
            '">' +
            tiles +
            "</div></section>";
        }
        return { id: section.id, items, html };
      });

      container.innerHTML = built.map((b) => b.html).join("");

      built.forEach(({ id, items }) => {
        const group = container.querySelector('[data-gallery-group="' + id + '"]');
        if (group) bindLightboxGroup(group, id, items);
      });
      window.PatelReveal?.();
      return;
    }

    const items = SITE.gallery || SITE.clinicImages || [];
    container.innerHTML =
      '<div class="gallery-masonry" data-gallery-group="all">' +
      items.map((g, i) => galleryTileHtml(g, i, "all")).join("") +
      "</div>";
    const group = container.querySelector('[data-gallery-group="all"]');
    if (group) bindLightboxGroup(group, "all", items);
    window.PatelReveal?.();
  }

  function renderReviewVideos(container) {
    if (!container || !SITE.reviewVideos?.length) return;
    const isTestimonialsPage = container.classList.contains("testimonials-video-showcase");
    const isGalleryShowcase = container.classList.contains("gallery-video-showcase");
    const maxAttr = parseInt(container.dataset.galleryVideosMax, 10);
    const galleryMax = isGalleryShowcase && maxAttr > 0 ? maxAttr : isGalleryShowcase ? 3 : 0;
    const eagerCount = isTestimonialsPage ? 4 : isGalleryShowcase ? Math.min(galleryMax, 3) : 2;
    const videos = galleryMax ? SITE.reviewVideos.slice(0, galleryMax) : SITE.reviewVideos;
    container.innerHTML = videos
      .map((v, i) => {
        const num = String(i + 1).padStart(2, "0");
        const eager = i < eagerCount;
        const useHero = isTestimonialsPage && i === 0;
        const label =
          isTestimonialsPage
            ? "Story " + num
            : isGalleryShowcase
              ? "Review " + num
              : "";
        return (
          '<article class="video-card reveal' +
          (useHero ? " video-card--hero" : "") +
          '"><div class="video-card__screen">' +
          (label ? '<span class="video-card__label">' + label + "</span>" : "") +
          posterLayerHtml(v, eager) +
          "<video " +
          videoTagAttrs(v, eager) +
          '></video><button type="button" class="video-card__play" aria-label="Play video ' +
          num +
          '"><span class="video-card__ring"></span><span class="video-card__triangle"></span></button><button type="button" class="video-card__expand" data-video-expand="' +
          i +
          '" aria-label="Full screen">⤢</button></div></article>'
        );
      })
      .join("");

    container.querySelectorAll(".video-card").forEach((card) => {
      const video = card.querySelector("video");
      const playBtn = card.querySelector(".video-card__play");
      if (!video || !playBtn) return;
      playBtn.addEventListener("click", () => {
        ensureVideoSrc(video);
        if (video.paused) {
          container.querySelectorAll("video").forEach((v) => {
            if (v !== video) v.pause();
          });
          container.querySelectorAll(".video-card").forEach((c) => c.classList.remove("is-playing"));
          video.play().then(() => card.classList.add("is-playing")).catch(() => {});
        } else {
          video.pause();
          card.classList.remove("is-playing");
        }
      });
      video.addEventListener("ended", () => card.classList.remove("is-playing"));
      video.addEventListener("pause", () => {
        if (video.paused) card.classList.remove("is-playing");
      });
    });

    container.querySelectorAll("[data-video-expand]").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        openLightbox(
          SITE.reviewVideos.map((v) => ({ src: v.src, alt: v.alt, type: "video" })),
          parseInt(btn.dataset.videoExpand, 10)
        );
      });
    });
    wireLazyVideos(container);
    primeEagerVideos(container);
    window.PatelReveal?.();
  }

  function renderReviewPhotos(container) {
    if (!container || !SITE.patientPhotos?.length) return;
    container.innerHTML = SITE.patientPhotos
      .map((p, i) => {
        return (
          '<button type="button" class="gallery-tile gallery-tile--photo reveal' +
          (i % 5 === 0 ? " gallery-tile--tall" : "") +
          '" data-lightbox-group="reviews" data-lightbox-index="' +
          i +
          '" aria-label="View photo">' +
          (typeof SITE !== "undefined" && SITE.imgHtml
            ? SITE.imgHtml(p.src, { alt: p.alt, width: 600, height: 600, loading: "lazy" })
            : '<img src="' + p.src + '" alt="' + p.alt + '" loading="lazy" width="600" height="600">') +
          '<span class="gallery-tile__veil" aria-hidden="true"></span><span class="gallery-tile__icon" aria-hidden="true"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h6v6M14 10l6.1-6.1M9 21H3v-6M10 14l-6.1 6.1"/></svg></span></button>'
        );
      })
      .join("");
    bindLightboxGroup(container, "reviews", SITE.patientPhotos);
    window.PatelReveal?.();
  }

  function renderGalleryReels(container) {
    if (!container || !SITE.reviewVideos?.length) return;
    if (container.classList.contains("gallery-video-showcase")) {
      renderReviewVideos(container);
      return;
    }
    const picks = SITE.reviewVideos.slice(0, 3);
    container.innerHTML = picks
      .map(
        (v, i) =>
          '<button type="button" class="gallery-reel-card reveal" data-video-expand="' +
          i +
          '" aria-label="Play patient video review">' +
          posterLayerHtml(v, true, "gallery-reel-card__poster") +
          "<video " +
          videoTagAttrs(v, true) +
          ' muted></video><span class="gallery-reel-card__shade" aria-hidden="true"></span><span class="gallery-reel-card__play" aria-hidden="true">▶</span><span class="gallery-reel-card__meta"><strong>Patient review</strong><span>Tap to watch full screen</span></span></button>'
      )
      .join("");

    container.querySelectorAll(".gallery-reel-card").forEach((card, i) => {
      const video = card.querySelector("video");
      const playHint = card.querySelector(".gallery-reel-card__play");
      if (!video) return;
      const previewPlay = () => {
        ensureVideoSrc(video);
        video.play().catch(() => {});
        card.classList.add("is-playing");
      };
      const previewStop = () => {
        video.pause();
        video.currentTime = 0;
        card.classList.remove("is-playing");
      };
      card.addEventListener("mouseenter", previewPlay);
      card.addEventListener("mouseleave", previewStop);
      if (playHint) {
        playHint.addEventListener("click", (e) => {
          e.stopPropagation();
          if (video.paused) previewPlay();
          else previewStop();
        });
      }
      card.addEventListener("click", () => {
        openLightbox(
          SITE.reviewVideos.map((item) => ({ src: item.src, alt: item.alt, type: "video" })),
          i
        );
      });
    });
    wireLazyVideos(container);
    primeEagerVideos(container);
    window.PatelReveal?.();
  }

  document.addEventListener("DOMContentLoaded", () => {
    const mosaicEl = document.getElementById("gallery-hero-mosaic");
    renderGalleryHeroMosaic(mosaicEl);
    renderGalleryHeroFilmstrip(document.getElementById("gallery-hero-filmstrip"));
    renderGalleryFilters(document.getElementById("gallery-filters"));
    renderGallery(document.getElementById("gallery-sections"));
    renderGalleryReels(document.getElementById("gallery-reels-grid"));
    renderReviewVideos(document.getElementById("review-videos-grid"));
    renderReviewPhotos(document.getElementById("review-photos-grid"));
    bindHomeGalleryBento();
    wireLazyVideos(document);
  });
})();
