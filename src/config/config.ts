/**
 * B'SAHA - Configuration Centrale
 * Centralisation des variables globales de marque, contact et réseaux sociaux.
 */

export const BRAND_NAME = "Traiteur Toutou";
export const BRAND_TAGLINE = "L'Art Culinaire & Pâtisseries Gourmandes";
export const BRAND_SUBTITLE = "Maison traiteur d'exception, réceptions & douceurs artisanales préparées avec passion.";

// CONFIGURATION UNIQUE WHATSAPP - Ne pas dupliquer ailleurs
export const WHATSAPP_NUMBER = "+33745722761"; 

export const STORE_CONFIG = {
  currency: "€",
  openingHours: "Du Mardi au Dimanche, de 10h à 19h",
  pickupLocation: "Atelier Traiteur Toutou — Retrait & Événements (Île-de-France)",
  deliveryNote: "Livraison & service traiteur disponibles sur réservation",
  minimumNoticeHours: 24, // Préavis de préparation artisanale
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/traiteur.toutou",
  tiktok: "https://tiktok.com/@traiteur.toutou",
  whatsapp: `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}`,
};

export const NAVIGATION_LINKS = [
  { label: "Accueil", href: "#hero" },
  { label: "Nos Gourmandises", href: "#catalogue" },
  { label: "Notre Histoire", href: "#histoire" },
  { label: "Le Fait Maison", href: "#savoir-faire" },
  { label: "Commander", href: "#etapes" },
];
