import React from 'react';
import { Heart, Phone } from 'lucide-react';
import { BRAND_NAME, BRAND_TAGLINE, SOCIAL_LINKS, STORE_CONFIG } from '../../config/config';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-chocolate text-[#FAF7F2] pt-16 pb-12 border-t border-chocolate/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#FAF7F2]/10">
          
          {/* Marque & Signature */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-serif text-3xl font-bold tracking-tight text-[#FAF7F2]">
                {BRAND_NAME}
              </span>
              <span className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <p className="text-sm text-[#FAF7F2]/70 leading-relaxed max-w-sm">
              « {BRAND_TAGLINE} »
            </p>
            <p className="text-xs text-[#FAF7F2]/50">
              Des pâtisseries réconfortantes, façonnées à la main avec les meilleurs ingrédients et une passion inaltérable.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF7F2]/90 mb-4">
              Gourmandises
            </h4>
            <ul className="space-y-2.5 text-sm text-[#FAF7F2]/70">
              <li>
                <a href="#catalogue" className="hover:text-honey transition-colors">
                  Cookies Fondants & Pépites
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-honey transition-colors">
                  Muffins Moelleux Cœur Coulant
                </a>
              </li>
              <li>
                <a href="#catalogue" className="hover:text-honey transition-colors">
                  Cakes Généreux Familiaux
                </a>
              </li>
              <li>
                <a href="#savoir-faire" className="hover:text-honey transition-colors">
                  Notre Savoir-Faire Artisanal
                </a>
              </li>
            </ul>
          </div>

          {/* Retrait & Horaires */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF7F2]/90 mb-4">
              Atelier & Horaires
            </h4>
            <div className="space-y-2 text-sm text-[#FAF7F2]/70">
              <p className="font-medium text-[#FAF7F2]/90">{STORE_CONFIG.pickupLocation}</p>
              <p className="text-xs text-[#FAF7F2]/60">{STORE_CONFIG.openingHours}</p>
              <p className="text-xs text-honey/90 pt-1">
                ⏱ Préparation sur commande fraîche (24h à l'avance).
              </p>
            </div>
          </div>

          {/* Contact direct & Réseaux */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#FAF7F2]/90 mb-4">
              Échanger avec nous
            </h4>
            <p className="text-xs text-[#FAF7F2]/60 mb-4">
              Une commande sur-mesure ou un événement particulier ? Parlons-en directement !
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SOCIAL_LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FAF7F2]/10 flex items-center justify-center text-[#FAF7F2] hover:bg-[#25D366] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#FAF7F2]/10 flex items-center justify-center text-[#FAF7F2] hover:bg-[#E1306C] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bas de page légal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#FAF7F2]/50">
          <p className="flex items-center gap-1">
            © {new Date().getFullYear()} {BRAND_NAME}. Fait avec <Heart className="w-3.5 h-3.5 text-accent fill-accent" /> à la maison.
          </p>
          <div className="flex items-center gap-6">
            <span className="hover:text-[#FAF7F2]/80 cursor-pointer">Mentions Légales</span>
            <span className="hover:text-[#FAF7F2]/80 cursor-pointer">Politique de Confidentialité</span>
            <span className="hover:text-[#FAF7F2]/80 cursor-pointer">CGV</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
