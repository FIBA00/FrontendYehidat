// ─────────────────────────────────────────────────────────────
// SITE CONSTANTS (non-translated data)
// Copy/labels live in src/i18n/locales/{en,am}.json — this file
// only holds values that don't change per-language: numbers,
// phone/links, image paths, and IDs used to look up translations.
// Replace PHONE and WHATSAPP_NUMBER before going live.
// ─────────────────────────────────────────────────────────────

export const CONTACT = {
  PHONE_RAW: "+251968034000",
  PHONE_DISPLAY: "+251 96 80 34 000",
  WHATSAPP_NUMBER: "251968034000",
  EMAIL: "hawig74@gmail.com",
  LOCATION: "Dukem/Bishoftu, Addis Ababa, Ethiopia",
};

export const SOCIAL = {
  INSTAGRAM: '#',
  TIKTOK: '#',
  TELEGRAM: '#',
}

// id maps to packages.<id> in the translation files
export const PACKAGES = [
  { id: 'basic',    price: 4000,  deposit: 1000, featured: false },
  { id: 'standard', price: 6000,  deposit: 1500, featured: true },
  { id: 'premium',  price: 10000, deposit: 2500, featured: false },
]

// id maps to occasions.<id> in the translation files
export const OCCASIONS = [
  { id: 'birthday',     emoji: '🎂' },
  { id: 'anniversary',  emoji: '💍' },
  { id: 'graduation',   emoji: '🎓' },
  { id: 'valentines',   emoji: '💝' },
  { id: 'fathersDay',   emoji: '👨‍👩‍👧' },
  { id: 'mothersDay',   emoji: '💐' },
  { id: 'promotion',    emoji: '🎉' },
  { id: 'justBecause',  emoji: '✨' },
]

// ── GALLERY ──────────────────────────────────────────────────
// Replace src with real image/video paths.
// e.g. import g1 from '../assets/images/gallery-1.jpg' then src: g1

import cake from "../assets/images/hero_cake.JPG";
import hbd from "../assets/images/hero_banner.JPG";
import suprise_2 from "../assets/images/suprise_2.JPG";


export const GALLERY_ITEMS = [
  {
    id: 1,
    type: "image",
    src: hbd,
    alt: "Birthday surprise setup",
    large: true,
  },
  {
    id: 2,
    type: "image",
    src: suprise_2,
    alt: "Flower arrangement",
    large: false,
  },
  { id: 3, type: "image", src: cake, alt: "Cake decoration", large: false },
  {
    id: 4,
    type: "image",
    src: null,
    alt: "Anniversary decoration",
    large: false,
  },
  { id: 5, type: "image", src: null, alt: "Balloon setup", large: false },
];

// Replace with real face image paths (64×64px circular portraits)
export const TRUST_FACES = [null, null, null]
