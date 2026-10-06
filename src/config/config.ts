/**
 * B'SAHA - Configuration Centrale
 * Centralisation des variables globales de marque, contact et réseaux sociaux.
 */

export const BRAND_NAME = "B'SAHA";
export const BRAND_TAGLINE = "Le fait maison, généreux & réconfortant";
export const BRAND_SUBTITLE = "Maison de cookies, muffins et cakes artisanaux préparés avec amour.";

// CONFIGURATION UNIQUE WHATSAPP - Ne pas dupliquer ailleurs
export const WHATSAPP_NUMBER = "+33745722761"; 

export const STORE_CONFIG = {
  currency: "€",
  openingHours: "Du Mardi au Dimanche, de 10h à 19h",
  pickupLocation: "Atelier B'SAHA — Retrait sur place (Île-de-France)",
  deliveryNote: "Livraison locale disponible sur créneaux réservés",
  minimumNoticeHours: 24, // Préavis de préparation artisanale
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/bsaha.patisserie",
  tiktok: "https://tiktok.com/@bsaha.patisserie",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`,
};

export const NAVIGATION_LINKS = [
  { label: "Accueil", href: "#hero" },
  { label: "Nos Gourmandises", href: "#catalogue" },
  { label: "Notre Histoire", href: "#histoire" },
  { label: "Le Fait Maison", href: "#savoir-faire" },
  { label: "Commander", href: "#etapes" },
];
