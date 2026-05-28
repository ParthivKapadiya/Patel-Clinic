/** Patel Clinic — official details from signage, business card & flyer */
const SITE = {
  name: "Patel Clinic",
  logo: "images/patel2.jpeg",
  heroImage: "images/patel4.jpeg",
  tagline: "Family physician & homeopathic care in Gayatrinagar — full-time OPD & emergency.",
  address:
    "Patel Clinic, B/s. Radhe Shyam Dairy Farm, Gayatri Nagar Main Road, Opposite SBI Bank, Near Jalaram Chowk, Vaniyawadi Main Road, Rajkot, Gujarat 360002",
  landmark: "Beside Radhe Shyam Dairy Farm · Opposite SBI Bank",
  phoneDisplay: "+91 99788 15066",
  phoneTel: "+919978815066",
  phoneAlt: "+919825245002",
  phoneAltDisplay: "+91 98252 45002",
  phoneLandline: "0281-2361368",
  phoneLandlineTel: "+912812361368",
  whatsapp: "919978815066",
  whatsappUrl: "https://wa.me/919978815066",
  whatsappChannelUrl: "https://wa.me/message/TERNBOE4NUVEB1",
  email: "hirensing173@gmail.com",
  developer: {
    name: "Parthiv Kapadiya",
    url: "https://www.linkedin.com/in/parthiv-kapadiya-b808a5344?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  rating: 4.9,
  ratingCount: 320,
  established: 1981,
  affiliations: [
    "LIC — Authorized Medical Officer",
    "HDFC ERGO Health Adviser",
    "TATA AIA Life Adviser",
    "Panel Doctor — LIC",
  ],
  mapsUrl:
    "https://maps.google.com/maps?q=Patel+Clinic+Radhe+Shyam+Dairy+Gayatrinagar+Rajkot&z=16&output=embed",
  hours: [
    { day: "Monday", hours: "10:00 AM – 2:00 PM | 5:00 PM – 10:00 PM" },
    { day: "Tuesday", hours: "10:00 AM – 2:00 PM | 5:00 PM – 10:00 PM" },
    { day: "Wednesday", hours: "10:00 AM – 2:00 PM | 5:00 PM – 10:00 PM" },
    { day: "Thursday", hours: "10:00 AM – 2:00 PM | 5:00 PM – 10:00 PM" },
    { day: "Friday", hours: "10:00 AM – 2:00 PM | 5:00 PM – 10:00 PM" },
    { day: "Saturday", hours: "10:00 AM – 2:00 PM | 5:00 PM – 10:00 PM" },
    { day: "Sunday", hours: "10:00 AM – 2:00 PM" },
  ],
  clinicImages: [
    {
      id: "storefront",
      src: "images/patel4.jpeg",
      alt: "Patel Clinic storefront on Gayatri Nagar Main Road, Rajkot",
      title: "Clinic storefront",
      caption:
        "Main entrance on Gayatri Nagar Main Road, beside Radhe Shyam Dairy Farm. Signage for Dr. K. M. Patel (MBBS, RCGP) & Dr. Hiren K. Patel (BHMS, PGDHM, CCH, CSD) — serving since 1981.",
    },
    {
      id: "logo",
      src: "images/patel2.jpeg",
      alt: "Patel Clinic official logo",
      title: "Patel Clinic logo",
      caption: "Official branding used across signage, stationery, and our digital presence.",
    },
    {
      id: "flyer",
      src: "images/patel3.jpeg",
      alt: "Patel Clinic promotional flyer — doctors and services",
      title: "Doctors & services flyer",
      caption:
        "Dr. Hiren K. Patel & Dr. K. M. Patel — full-time at the clinic for OPD and emergency. Call 99788 15066 or 98252 45002.",
    },
    {
      id: "card",
      src: "images/patel1.jpeg",
      alt: "Patel Clinic business card — both doctors and facilities",
      title: "Business card",
      caption:
        "Contact details, address, and facilities: minor surgery, vaccination, ECG, glucometer, nebulizer, stitches, home visit, ICU care at home & homeopathic treatment.",
    },
  ],
  facilities: [
    { icon: "🏥", title: "Minor surgery", text: "Minor surgical procedures on site" },
    { icon: "🧵", title: "Stitches", text: "Stitching facility available" },
    { icon: "💉", title: "Vaccination", text: "All types of vaccines available" },
    { icon: "📈", title: "ECG & diagnostics", text: "ECG, glucometer & nebulizer available" },
    { icon: "🏠", title: "Home visit", text: "Home visit & ICU care at home" },
    { icon: "🩺", title: "Specialty clinics", text: "Diabetes, BP, thyroid, obesity & asthma" },
    { icon: "🌿", title: "Homeopathic", text: "Homeopathic treatment available" },
    { icon: "👶", title: "Paediatric care", text: "Expert care for children's illnesses" },
    { icon: "✨", title: "Ear piercing", text: "Earlobe piercing for beauty (as per convenience)" },
  ],
  services: [
    {
      id: "family-physician",
      title: "Family Physician & Surgery",
      short:
        "Dr. K. M. Patel — MBBS, RCGP. Family physician & surgeon. Authorized Medical Officer, LIC. Panel doctor since 1981.",
    },
    {
      id: "homeopathic",
      title: "Homeopathic Physician & Surgery",
      short:
        "Dr. Hiren K. Patel — BHMS, PGDHM, CCH, CSD. Homeopathic physician & surgeon. Ex. M.O. Madhuram & Wockhardt Hospital.",
    },
    {
      id: "diabetes-clinic",
      title: "Diabetes · BP · Thyroid Clinic",
      short:
        "Dedicated clinic for diabetes, blood pressure, thyroid, obesity, asthma & allergy — experienced management for adults.",
    },
    {
      id: "paediatric",
      title: "Children's Health",
      short:
        "Experienced, expert doctor for all types of children's diseases — compassionate paediatric care.",
    },
    {
      id: "diagnostics",
      title: "ECG · Vaccination · Nebulizer",
      short:
        "ECG, all types of vaccines, nebulizer, glucometer & minor surgical procedures including stitches.",
    },
    {
      id: "emergency-opd",
      title: "OPD & Emergency",
      short:
        "Both doctors available full-time on Gayatri Nagar Main Road beside Radhe Shyam Dairy Farm for OPD and emergency calls.",
    },
    {
      id: "home-visit",
      title: "Home Visit & ICU at Home",
      short: "Home visit available. ICU care at home for patients who need monitored support in familiar surroundings.",
    },
    {
      id: "insurance-panel",
      title: "Insurance & Panel",
      short:
        "LIC authorized medical officer. HDFC ERGO Health Adviser & TATA AIA Life Adviser services at the clinic.",
    },
  ],
  packages: [
    {
      name: "OPD Consultation",
      price: "On enquiry",
      features: [
        "Physician or homeopathic consult",
        "Clinical examination",
        "Treatment plan & prescription",
        "Follow-up guidance",
      ],
    },
    {
      name: "Diagnostics & procedures",
      price: "On enquiry",
      highlighted: true,
      features: [
        "ECG & glucometer",
        "Nebulizer treatment",
        "Vaccination",
        "Minor surgery & stitches",
      ],
    },
    {
      name: "Home visit",
      price: "On enquiry",
      features: [
        "Home visit (call to confirm)",
        "ICU care at home",
        "Emergency doctor on call",
        "WhatsApp coordination",
      ],
    },
  ],
  stats: [
    { value: 44, suffix: "+", label: "Years of trusted care (since 1981)" },
    { value: 4.9, suffix: "/5", label: "Patient rating", decimals: 1 },
    { value: 2, suffix: "", label: "Full-time consulting doctors" },
    { value: 9, suffix: "+", label: "Clinical facilities on site" },
  ],
  team: [
    {
      name: "Dr. Hiren K. Patel",
      role: "Homeopathic Physician & Surgeon",
      qualifications: "BHMS, PGDHM, CCH, CSD",
      phone: "99788 15066",
      bio: "Homoeopathic consultant with 15+ years of practice. BHMS from District Homoeopathy, Ratlam (2008). Medical Officer — Madhuram Hospital. Ex. M.O. Wockhardt Hospital. Vaccination, ECG, nebulizer, minor surgery, stitches, home visit & homoeopathic care.",
      image: "images/pi2.jpeg",
      imageWide: true,
    },
    {
      name: "Dr. K. M. Patel",
      role: "Family Physician & Surgeon",
      qualifications: "MBBS, RCGP",
      phone: "98252 45002",
      bio: "General physician with 40+ years of clinical experience. MBBS from M.P. Shah Medical College, Jamnagar (1979). Authorized LIC Medical Officer & panel doctor since 1981. Diabetes, BP, thyroid, obesity, asthma, allergy & children's health.",
      image: "images/pi3.jpeg",
      imageWide: true,
    },
  ],
  testimonials: [
    {
      quote:
        "Both doctors are available full-time at the clinic beside Radhe Shyam Dairy. Very helpful for OPD and emergency.",
      name: "Gayatrinagar patient",
      role: "Rajkot",
    },
    {
      quote:
        "Easy to find opposite SBI Bank. ECG, nebulizer and vaccination available under one roof.",
      name: "Local family",
      role: "Vaniyawadi Main Road",
    },
    {
      quote:
        "Transparent, patient-focused care. Dr. Hiren for homeopathic and Dr. K. M. Patel for physician consultation — highly trusted in the area.",
      name: "Long-term patient",
      role: "Patel Clinic",
    },
  ],
  faqs: [
    {
      category: "visits",
      q: "Are both doctors available full time?",
      a: "Yes. Dr. Hiren K. Patel and Dr. K. M. Patel are regularly available at Patel Clinic on Gayatri Nagar Main Road, beside Radhe Shyam Dairy Farm, for OPD and emergency. Call 99788 15066 or 98252 45002.",
    },
    {
      category: "emergency",
      q: "How do I reach you in an emergency?",
      a: "Call Dr. Hiren K. Patel on 99788 15066 or Dr. K. M. Patel on 98252 45002. You can also WhatsApp 99788 15066.",
    },
    {
      category: "facilities",
      q: "What facilities are available at the clinic?",
      a: "Minor surgery, vaccination, ECG, glucometer, nebulizer, stitches, home visit, ICU care at home, homeopathic treatment, specialty clinics for diabetes/BP/thyroid/obesity/asthma, and earlobe piercing facility.",
    },
    {
      category: "location",
      q: "Where is Patel Clinic located?",
      a: "B/s. Radhe Shyam Dairy Farm, Gayatri Nagar Main Road, opposite State Bank of India, near Jalaram Chowk, Vaniyawadi Main Road, Rajkot 360002.",
    },
    {
      category: "doctors",
      q: "What are Dr. K. M. Patel's qualifications?",
      a: "MBBS, RCGP — Family Physician & Surgeon. Authorized Medical Officer for LIC. Practising since 1981.",
    },
    {
      category: "doctors",
      q: "What are Dr. Hiren K. Patel's qualifications?",
      a: "BHMS, PGDHM, CCH, CSD — Homeopathic Physician & Surgeon. Ex. Medical Officer at Madhuram & Wockhardt Hospital.",
    },
    {
      category: "visits",
      q: "Do you offer home visits?",
      a: "Yes. Home visit and ICU care at home are available — please call or WhatsApp to confirm availability for your area.",
    },
  ],
  faqCategories: [
    { id: "visits", label: "Visits & doctors", desc: "Availability, OPD & home visits" },
    { id: "emergency", label: "Emergencies", desc: "Urgent care & after-hours contact" },
    { id: "facilities", label: "Clinic & services", desc: "Equipment, procedures & specialties" },
    { id: "location", label: "Find us", desc: "Address, landmarks & directions" },
    { id: "doctors", label: "Our physicians", desc: "Qualifications & experience" },
  ],
  /** Verified listings, social profiles & review links */
  connect: {
    heroImage: "images/pi31.png",
    heroImageAlt: "Dr. Hiren K. Patel with a young patient at Patel Clinic, Rajkot",
    groups: [
      {
        id: "message",
        title: "Book & reach us",
        links: [
          {
            id: "whatsapp",
            label: "WhatsApp",
            desc: "Appointments & quick questions",
            href: "https://wa.me/919978815066",
            icon: "whatsapp",
            featured: true,
          },
          {
            id: "whatsapp-channel",
            label: "WhatsApp updates",
            desc: "Clinic channel — health tips & news",
            href: "https://wa.me/message/TERNBOE4NUVEB1",
            icon: "whatsapp",
          },
          {
            id: "call-mobile",
            label: "Dr. Hiren — mobile",
            desc: "99788 15066",
            href: "tel:+919978815066",
            icon: "phone",
          },
          {
            id: "call-alt",
            label: "Dr. K. M. Patel",
            desc: "98252 45002",
            href: "tel:+919825245002",
            icon: "phone",
          },
          {
            id: "call-landline",
            label: "Clinic landline",
            desc: "0281-2361368",
            href: "tel:+912812361368",
            icon: "phone",
          },
        ],
      },
      {
        id: "directories",
        title: "Find us online",
        links: [
          {
            id: "google-profile",
            label: "Google",
            desc: "Clinic profile & directions",
            href: "https://share.google/T7h3VcydhnElFO5ZE",
            icon: "google",
            featured: true,
          },
          {
            id: "google-search",
            label: "Google Search",
            desc: "Dr. K. M. Patel & Dr. Hiren K. Patel",
            href: "https://www.google.com/search?kgmid=/g/11lc9t4tbm",
            icon: "google",
          },
          {
            id: "google-listing",
            label: "Google Maps listing",
            desc: "General Physician in Rajkot",
            href: "https://share.google/vW7OXb00kyNzLgbRu",
            icon: "google",
          },
          {
            id: "justdial",
            label: "JustDial",
            desc: "Clinic listing · Gayatrinagar",
            href: "https://www.justdial.com/Rajkot/Dr-K-M-Patel-Dr-Hiren-K-Patel-Near-By-Radhe-Shyam-Dairy-Opposite-To-Sbi-Bank-Gayatrinagar/0281PX281-X281-090822232604-A2S5_BZDET",
            icon: "justdial",
            featured: true,
          },
          {
            id: "practo-clinic",
            label: "Practo — Clinic",
            desc: "Book consultation online",
            href: "https://www.practo.com/rajkot/clinic/dr-k-m-patel-dr-hiren-k-patel-gundawadi",
            icon: "practo",
          },
          {
            id: "practo-km",
            label: "Practo — Dr. K. M. Patel",
            desc: "General Physician profile",
            href: "https://www.practo.com/rajkot/doctor/dr-71-general-physician",
            icon: "practo",
          },
          {
            id: "practo-hiren",
            label: "Practo — Dr. Hiren K. Patel",
            desc: "Homoeopath profile",
            href: "https://www.practo.com/rajkot/doctor/dr-hiren-k-patel-homeopath",
            icon: "practo",
          },
          {
            id: "eka",
            label: "eka.care",
            desc: "Online doctor profile",
            href: "https://www.eka.care/doctor/dr-drhiren-patel-clinic-rajkot",
            icon: "eka",
          },
          {
            id: "magicpin",
            label: "magicpin",
            desc: "Healthcare listing · Bhakti Nagar",
            href: "https://magicpin.in/Rajkot/Bhakti-Nagar/Healthcare/Dr-K.-M.-Patel-Dr.Hiren-K.-Patel/store/c342a2",
            icon: "magicpin",
          },
        ],
      },
      {
        id: "social",
        title: "Follow us",
        links: [
          {
            id: "instagram",
            label: "Instagram",
            desc: "@drhirenforever",
            href: "https://www.instagram.com/drhirenforever?igsh=ZnZucG8yZ2s3cGgx",
            icon: "instagram",
            featured: true,
          },
          {
            id: "facebook",
            label: "Facebook",
            desc: "Clinic updates & community",
            href: "https://www.facebook.com/share/1DVtMEFTNx/",
            icon: "facebook",
            featured: true,
          },
          {
            id: "youtube",
            label: "YouTube",
            desc: "@drkmpateldrhirenkpatel",
            href: "https://youtube.com/@drkmpateldrhirenkpatel?si=qKs6WceDdXV9A84u",
            icon: "youtube",
            featured: true,
          },
          {
            id: "linkedin",
            label: "LinkedIn",
            desc: "Dr. Hiren K. Patel — BHMS, PGDHM",
            href: "https://www.linkedin.com/in/dr-hiren-k-patel-b-h-m-s-p-g-d-h-m-411a2153?utm_source=share_via&utm_content=profile&utm_medium=member_android",
            icon: "linkedin",
            featured: true,
          },
        ],
      },
      {
        id: "reviews",
        title: "Share your experience",
        links: [
          {
            id: "justdial-review",
            label: "Rate on JustDial",
            desc: "Quick review link — help neighbours choose",
            href: "https://jsdl.in/RSL-SZE1779183796",
            icon: "star",
            featured: true,
            cta: "Write a review",
          },
          {
            id: "justdial-reviews",
            label: "Read JustDial reviews",
            desc: "See what patients say",
            href: "https://www.justdial.com/Rajkot/Dr-K-M-Patel-Dr-Hiren-K-Patel-Near-By-Radhe-Shyam-Dairy-Opposite-to-SBI-Bank-Gayatrinagar/0281PX281-X281-090822232604-A2S5_BZDET/reviews",
            icon: "justdial",
          },
        ],
      },
    ],
  },
  homoeopathicProducts: [
    {
      src: "images/promo/pp1.png",
      name: "SBL Calendula Pomade",
      desc: "Homoeopathic antiseptic healing cream — 25 g",
    },
    {
      src: "images/promo/pp2.png",
      name: "SBL Arnica Montana Shampoo",
      desc: "Herbal shampoo with conditioner — hair care therapy",
    },
    {
      src: "images/promo/pp3.png",
      name: "SBL Arnica Montana Hair Oil",
      desc: "Fortified hair oil — anti hair fall therapy, 200 ml",
    },
  ],
};

const CLINIC_FACILITY_COUNT = 11;
const PATIENT_PHOTO_PNG = new Set([30, 31, 32, 34, 35]);
/** pi33 was never uploaded — skip it so the gallery does not reference a missing file */
const PATIENT_PHOTO_NUMBERS = [
  ...Array.from({ length: 29 }, (_, i) => i + 1),
  30,
  31,
  32,
  34,
  35,
];

SITE.patientPhotos = PATIENT_PHOTO_NUMBERS.map((n) => {
  const ext = PATIENT_PHOTO_PNG.has(n) ? "png" : "jpeg";
  return {
    src: `images/pi${n}.${ext}`,
    alt: "Patel Clinic — consultations, care and patient stories in Rajkot",
  };
});

SITE.reviewVideos = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13].map((n) => ({
  src: `images/pv${n}.mp4`,
  alt: "Patient video review — Patel Clinic, Gayatrinagar, Rajkot",
}));

SITE.clinicFacilityImages = Array.from({ length: CLINIC_FACILITY_COUNT }, (_, i) => {
  const n = i + 1;
  return {
    src: `images/clinic-${n}.jpg`,
    alt: "Patel Clinic — consultation rooms and on-site facilities, Gayatrinagar",
  };
});

SITE.officialGallery = [
  ...SITE.clinicImages,
  {
    src: "images/logo.png",
    alt: "Patel Clinic logo artwork",
    title: "Clinic logo",
    caption: "Branding used on signage and stationery.",
  },
  {
    src: "images/clinic-storefront.png",
    alt: "Patel Clinic storefront illustration",
    title: "Storefront",
    caption: "Gayatri Nagar Main Road, beside Radhe Shyam Dairy Farm, opposite SBI Bank.",
  },
  {
    src: "images/clinic-flyer.png",
    alt: "Patel Clinic promotional flyer",
    title: "Services flyer",
    caption: "Dr. Hiren K. Patel & Dr. K. M. Patel — OPD, emergency and specialty clinics.",
  },
  {
    src: "images/clinic-card.png",
    alt: "Patel Clinic business card design",
    title: "Business card",
    caption: "Contact numbers, address and on-site facilities.",
  },
  {
    src: "images/pi35.png",
    alt: "Patel Clinic signage — Dr. K. M. Patel and Dr. Hiren K. Patel, Gayatrinagar",
    title: "Clinic signage",
    caption:
      "Family physician & surgeon — diabetes, BP, thyroid, vaccines and homoeopathic care. Ph. 0281-2361368 · Mo. 99788 15066.",
  },
];

SITE.gallerySections = [
  {
    id: "official",
    title: "Official branding & signage",
    subtitle: "Storefront, logo, flyer and business materials from Patel Clinic.",
    items: SITE.officialGallery,
  },
  {
    id: "facility",
    title: "Clinic & facilities",
    subtitle: "Consultation rooms, equipment and everyday care at our Gayatrinagar centre.",
    items: SITE.clinicFacilityImages,
  },
  {
    id: "patient-care",
    title: "Patient care, reviews & results",
    subtitle: "Real photos from consultations, treatments and grateful patients in Rajkot.",
    items: SITE.patientPhotos,
  },
  {
    id: "homoeopathy",
    title: "Homoeopathic pharmacy",
    subtitle: "Quality SBL homoeopathic products recommended at our clinic.",
    items: SITE.homoeopathicProducts.map((p) => ({
      src: p.src,
      alt: p.name + " — Patel Clinic Rajkot",
      title: p.name,
      caption: p.desc,
    })),
  },
];

SITE.gallery = SITE.gallerySections.flatMap((section) => section.items);

/** Per-page cinematic hero content (image, copy, optional panels) */
SITE.pageHeroes = {
  about: {
    image: "images/patel4.jpeg",
    imageAlt: "Patel Clinic storefront — Gayatrinagar, Rajkot",
    pill: "Since 1981 · Gayatrinagar",
    title: "Two doctors. One trusted address in ",
    accent: "Rajkot.",
    lead:
      "Full-time OPD & emergency beside Radhe Shyam Dairy Farm — opposite SBI Bank, Vaniyawadi Main Road, Rajkot 360002.",
    crumb: "About",
  },
  services: {
    image: "images/clinic-storefront.png",
    imageAlt: "Patel Clinic storefront — Gayatrinagar, Rajkot",
    pill: "8 care pathways",
    title: "Complete care from ",
    accent: "two full-time doctors.",
    lead:
      "Family physician, homeopathy, diagnostics, vaccination, minor surgery, home visits & specialty clinics — under one roof.",
    crumb: "Services",
  },
  contact: {
    image: "images/patel4.jpeg",
    imageAlt: "Patel Clinic location",
    pill: "Open 6 days a week",
    title: "We're a ",
    accent: "message away.",
    lead:
      "Appointments, package enquiries, or directions — we respond quickly on WhatsApp during clinic hours.",
    crumb: "Contact",
  },
  testimonials: {
    image: "images/patel2.jpeg",
    imageAlt: "Patel Clinic — patient trust",
    pill: "4.9★ · Trusted in Rajkot",
    title: "Stories that speak ",
    accent: "louder than words.",
    lead:
      "Real video reviews and photographs from patients who chose Patel Clinic for calm, capable care since 1981.",
    crumb: "Testimonials",
  },
  gallery: {
    image: "images/patel4.jpeg",
    imageAlt: "Patel Clinic gallery",
    pill: "50+ photographs",
    title: "A visual journey through ",
    accent: "four decades of care.",
    lead:
      "Storefront, facilities, and real moments from our Gayatri Nagar clinic — captured with gratitude from families we serve.",
    crumb: "Gallery",
  },
  faq: {
    image: "images/patel1.jpeg",
    imageAlt: "Patel Clinic business card",
    pill: "Common questions",
    title: "Answers before you ",
    accent: "pick up the phone.",
    lead:
      "Everything you need to know about visits, doctors, facilities, and emergencies at Patel Clinic.",
    crumb: "FAQ",
    compact: true,
  },
  appointment: {
    image: "images/patel4.jpeg",
    imageAlt: "Book Patel Clinic appointment",
    pill: "Book in 60 seconds",
    title: "Reserve your visit ",
    accent: "in under a minute.",
    lead:
      "Tell us who you are, what you need, and when you'd like to visit — we confirm quickly on WhatsApp.",
    crumb: "Appointment",
    compact: true,
  },
};
