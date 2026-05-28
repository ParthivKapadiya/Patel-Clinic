/** Page heroes — service chips & gallery mosaic (no full-bleed BG images) */
(function () {
  const SERVICE_ICONS = ["🩺", "🌿", "📊", "👶", "💉", "🚨", "🏠", "📋"];

  const SERVICE_LABELS = {
    "family-physician": "Physician",
    homeopathic: "Homoeopathy",
    "diabetes-clinic": "Diabetes & BP",
    paediatric: "Children",
    diagnostics: "ECG & vaccines",
    "emergency-opd": "Emergency",
    "home-visit": "Home visit",
    "insurance-panel": "Insurance",
  };

  function renderServiceChips() {
    const el = document.getElementById("hero-service-chips");
    if (!el || !SITE.services?.length) return;
    const isServicesHero = el.classList.contains("services-hero__pathways");
    el.innerHTML = SITE.services
      .map((s, i) => {
        const short = SERVICE_LABELS[s.id] || s.title.split("·")[0].trim().split(" ")[0];
        const chipClass = isServicesHero
          ? "services-hero__pathway reveal"
          : "page-hero--services__chip reveal";
        const iconClass = isServicesHero ? "services-hero__pathway-icon" : "";
        return (
          '<a href="services.html#' +
          s.id +
          '" class="' +
          chipClass +
          '">' +
          '<span class="' +
          iconClass +
          '">' +
          (SERVICE_ICONS[i] || "🩺") +
          "</span><span>" +
          short +
          "</span></a>"
        );
      })
      .join("");
    window.PatelReveal?.();
  }

  document.addEventListener("DOMContentLoaded", () => {
    renderServiceChips();
  });
})();
