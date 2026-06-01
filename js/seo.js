/**
 * Patel Clinic — SEO, Open Graph, Twitter cards & structured data.
 * Requires js/site-config.js loaded first.
 */
(function () {
  if (typeof SITE === "undefined") return;

  const PAGE_META = {
    home: {
      title: "Patel Clinic · Dr. Hiren K. Patel & Dr. K. M. Patel | Gayatrinagar, Rajkot",
      description:
        "Patel Clinic, Gayatrinagar Rajkot — family physician, homeopathic care, ECG, vaccination, minor surgery. Dr. Hiren K. Patel 9978815066 · Dr. K. M. Patel 9825245002.",
      path: "index.html",
    },
    about: {
      title: "About · Patel Clinic | Gayatrinagar, Rajkot",
      description:
        "Meet Dr. Hiren K. Patel and Dr. K. M. Patel — family physicians serving Gayatrinagar, Rajkot since 1981. Clinic facilities, team and values.",
      path: "about.html",
    },
    services: {
      title: "Services · Patel Clinic | Gayatrinagar, Rajkot",
      description:
        "OPD, homeopathy, paediatrics, ECG, vaccination, minor surgery, emergency care and more at Patel Clinic, Rajkot.",
      path: "services.html",
    },
    testimonials: {
      title: "Testimonials · Patel Clinic | Rajkot",
      description:
        "Patient stories and video reviews for Patel Clinic — trusted family care in Gayatrinagar, Rajkot.",
      path: "testimonials.html",
    },
    gallery: {
      title: "Gallery · Patel Clinic | Rajkot",
      description:
        "Photos and videos from Patel Clinic — clinic interiors, patient care moments and community trust in Rajkot.",
      path: "gallery.html",
    },
    faq: {
      title: "FAQ · Patel Clinic | Gayatrinagar, Rajkot",
      description:
        "Common questions about appointments, doctors, facilities and emergencies at Patel Clinic, Gayatrinagar, Rajkot.",
      path: "faq.html",
    },
    contact: {
      title: "Contact · Patel Clinic | Gayatrinagar, Rajkot",
      description:
        "Contact Patel Clinic in Gayatrinagar, Rajkot — phone, WhatsApp, clinic hours, directions and map.",
      path: "contact.html",
    },
    appointment: {
      title: "Book appointment · Patel Clinic | Rajkot",
      description:
        "Book a visit at Patel Clinic, Gayatrinagar, Rajkot. WhatsApp booking in under a minute — Dr. Hiren & Dr. K. M. Patel.",
      path: "appointment.html",
    },
  };

  function pageKey() {
    const fromBody = document.body?.dataset?.page;
    if (fromBody) return fromBody;
    const file = (window.location.pathname.split("/").pop() || "index.html").toLowerCase();
    if (file === "index.html" || file === "") return "home";
    return file.replace(/\.html$/, "");
  }

  function siteBase() {
    const configured = (SITE.siteUrl || "").replace(/\/$/, "");
    if (configured) return configured;
    if (window.location.protocol === "file:") return "";
    return window.location.origin + window.location.pathname.replace(/\/[^/]*$/, "");
  }

  function absoluteUrl(relativePath) {
    const base = siteBase();
    const clean = relativePath.replace(/^\//, "");
    if (!base) return clean;
    return base + "/" + clean;
  }

  function upsertMeta(attr, key, content) {
    if (!content) return;
    let el = document.querySelector(`meta[${attr}="${key}"]`);
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute(attr, key);
      document.head.appendChild(el);
    }
    el.setAttribute("content", content);
  }

  function upsertLink(rel, href) {
    if (!href) return;
    let el = document.querySelector(`link[rel="${rel}"]`);
    if (!el) {
      el = document.createElement("link");
      el.rel = rel;
      document.head.appendChild(el);
    }
    el.href = href;
  }

  function injectResourceHints() {
    if (document.querySelector('link[rel="preconnect"][href*="fonts.googleapis"]')) return;
    if (document.querySelector("link[data-site-hints]")) return;
    const hints = [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: true },
      { rel: "dns-prefetch", href: "https://fonts.googleapis.com" },
    ];
    hints.forEach((h) => {
      const link = document.createElement("link");
      link.rel = h.rel;
      link.href = h.href;
      link.setAttribute("data-site-hints", "");
      if (h.crossOrigin) link.crossOrigin = "anonymous";
      document.head.appendChild(link);
    });
  }

  function injectJsonLd(key, url, imageUrl) {
    const existing = document.getElementById("site-jsonld");
    if (existing) existing.remove();

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": ["MedicalClinic", "Physician"],
          "@id": url + "#clinic",
          name: SITE.name,
          description: SITE.tagline,
          url,
          image: imageUrl,
          telephone: SITE.phoneTel,
          email: SITE.email,
          contactPoint: [
            {
              "@type": "ContactPoint",
              telephone: SITE.phoneTel,
              contactType: "customer service",
              areaServed: "Rajkot",
              availableLanguage: ["English", "Gujarati", "Hindi"],
            },
            {
              "@type": "ContactPoint",
              telephone: SITE.phoneAlt,
              contactType: "customer service",
              areaServed: "Rajkot",
            },
          ],
          address: {
            "@type": "PostalAddress",
            streetAddress:
              "Gayatri Nagar Main Road, Opposite SBI Bank, Near Jalaram Chowk, Vaniyawadi Main Road",
            addressLocality: "Rajkot",
            addressRegion: "Gujarat",
            postalCode: "360002",
            addressCountry: "IN",
          },
          geo: SITE.geo
            ? {
                "@type": "GeoCoordinates",
                latitude: SITE.geo.lat,
                longitude: SITE.geo.lng,
              }
            : undefined,
          openingHoursSpecification: (SITE.hours || []).map((h) => ({
            "@type": "OpeningHoursSpecification",
            dayOfWeek: h.day,
            description: h.hours,
          })),
          aggregateRating: SITE.rating
            ? {
                "@type": "AggregateRating",
                ratingValue: String(SITE.rating),
                reviewCount: String(SITE.ratingCount || 0),
                bestRating: "5",
              }
            : undefined,
          medicalSpecialty: ["FamilyMedicine", "Homeopathic"],
          sameAs: [SITE.whatsappUrl, SITE.mapsUrl?.replace("&output=embed", "")].filter(Boolean),
        },
      ],
    };

    if ((key === "faq" || key === "home") && SITE.faqs?.length) {
      schema["@graph"].push({
        "@type": "FAQPage",
        mainEntity: SITE.faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: { "@type": "Answer", text: f.a },
        })),
      });
    }

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "site-jsonld";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
  }

  function initSeo() {
    const key = pageKey();
    const meta = PAGE_META[key] || PAGE_META.home;
    const titleEl = document.querySelector("title");
    const docTitle = titleEl?.textContent?.trim() || meta.title;
    const docDesc =
      document.querySelector('meta[name="description"]')?.getAttribute("content")?.trim() ||
      meta.description;
    const pagePath = meta.path || (key === "home" ? "index.html" : key + ".html");
    const url = absoluteUrl(pagePath);
    const image = absoluteUrl(SITE.ogImage || SITE.logo || "images/patel2.jpeg");

    if (titleEl && !titleEl.textContent.trim()) titleEl.textContent = meta.title;
    upsertMeta("name", "description", docDesc);
    upsertMeta("name", "robots", "index, follow, max-image-preview:large");
    upsertMeta("name", "theme-color", "#0a1628");
    upsertLink("canonical", url);

    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", SITE.name);
    upsertMeta("property", "og:title", docTitle);
    upsertMeta("property", "og:description", docDesc);
    upsertMeta("property", "og:url", url);
    upsertMeta("property", "og:image", image);
    upsertMeta("property", "og:locale", "en_IN");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", docTitle);
    upsertMeta("name", "twitter:description", docDesc);
    upsertMeta("name", "twitter:image", image);

    injectJsonLd(key, url, image);
  }

  function injectSkipLink() {
    if (document.getElementById("skip-to-main")) return;
    const a = document.createElement("a");
    a.id = "skip-to-main";
    a.className = "skip-link";
    a.href = "#main-content";
    a.textContent = "Skip to main content";
    document.body.insertBefore(a, document.body.firstChild);
  }

  function markMain() {
    const main = document.querySelector("main");
    if (main && !main.id) main.id = "main-content";
    if (main && !main.hasAttribute("tabindex")) main.setAttribute("tabindex", "-1");
  }

  function run() {
    injectResourceHints();
    initSeo();
    injectSkipLink();
    markMain();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", run);
  } else {
    run();
  }
})();
