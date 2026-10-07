import React from 'react';
import { Sparkles, ArrowRight, Heart } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { BRAND_NAME, BRAND_TAGLINE } from '../config/config';

interface HeroSectionProps {
  onDiscover: () => void;
  onOrderNow: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onDiscover, onOrderNow }) => {
  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Halo lumineux chaud d'arrière-plan */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-honey/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Colonne Éditoriale */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Petit badge d'accroche */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream/60 border border-chocolate/10 text-xs font-semibold text-chocolate shadow-warm-sm">
              <Sparkles className="w-3.5 h-3.5 text-accent" />
              <span>Maison Traiteur & Gastronomie Artisanale</span>
            </div>

            {/* Titre Principal de Marque */}
            <div className="space-y-2">
              <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-chocolate leading-[1.08]">
                {BRAND_NAME}
              </h1>
              <p className="font-serif text-2xl sm:text-3xl lg:text-4xl italic text-accent font-medium leading-snug">
                {BRAND_TAGLINE}
              </p>
            </div>

            {/* Description d'ambiance */}
            <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed">
              Buffets raffinés, douceurs crousti-fondantes, réceptions gourmandes et créations artisanales, préparés chaque jour avec les meilleurs ingrédients et un savoir-faire passionné.
            </p>

            {/* Boutons d'actions */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onDiscover}
                className="gap-3 group"
              >
                <span>Découvrir nos gourmandises</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={onOrderNow}
              >
                Commander directement
              </Button>
            </div>

            {/* Reassurance */}
            <div className="pt-6 border-t border-chocolate/10 flex items-center gap-6 text-xs text-muted">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span>100% Fait maison</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-3.5 h-3.5 text-accent fill-accent" />
                <span>Beurre frais & chocolat noble</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-honey" />
                <span>Cuisson du jour</span>
              </div>
            </div>
          </div>

          {/* Composition Photographique Éditoriale */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Carte principale */}
              <div className="relative rounded-3xl overflow-hidden shadow-warm-xl border-4 border-surface rotate-1 hover:rotate-0 transition-transform duration-500 bg-cream">
                <img
                  src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&w=1000&q=85"
                  alt="Création artisanale Traiteur Toutou avec pépites de chocolat fondantes et fleur de sel"
                  className="w-full h-[420px] sm:h-[480px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-chocolate/70 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-semibold tracking-wider uppercase text-honey">
                    Fraîchement sorti du four
                  </span>
                  <p className="font-serif text-xl font-bold">
                    Cookie Chocolat Intense & Fleur de Sel
                  </p>
                </div>
              </div>

              {/* Petite carte flottante miettes/chocolat */}
              <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 bg-surface p-4 rounded-2xl shadow-warm-lg border border-chocolate/10 max-w-[210px] hidden sm:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-honey/20 flex items-center justify-center text-accent font-serif font-bold text-lg">
                    🍪
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-chocolate">Recette signature</span>
                    <span className="block text-[10px] text-muted">Cœur fondant & croûte dorée</span>
                  </div>
                </div>
              </div>

              {/* Pastille avis gourmand */}
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-accent text-white px-4 py-2 rounded-full shadow-warm-md text-xs font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Fournées quotidiennes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
