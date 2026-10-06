import React from 'react';
import { Heart, Sparkles, Utensils } from 'lucide-react';
import { BRAND_NAME } from '../config/config';

export const StorySection: React.FC = () => {
  return (
    <section id="histoire" className="py-20 md:py-28 bg-surface-warm/40 border-y border-chocolate/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        
        {/* En-tête douce */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-chocolate/10 text-xs font-semibold text-accent shadow-warm-sm">
          <Heart className="w-3.5 h-3.5 fill-accent" />
          <span>L'esprit de notre maison</span>
        </div>

        {/* Titre éditorial */}
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate leading-tight">
          « Comme à la maison. »
        </h2>

        {/* Texte narratif équilibré et respirant */}
        <div className="space-y-6 text-base sm:text-lg text-muted max-w-2xl mx-auto leading-relaxed font-light">
          <p>
            Chez <strong className="text-chocolate font-medium">{BRAND_NAME}</strong>, tout commence avec une envie simple : 
            préparer de bonnes choses, généreuses et réconfortantes, exactement comme on le ferait pour ceux qu'on aime.
          </p>
          <p>
            Des recettes inspirées de précieux souvenirs de famille, préparées chaque matin avec passion, 
            des ingrédients nobles soigneusement choisis, et cette petite touche chaleureuse qui rend chaque bouchée inoubliable.
          </p>
        </div>

        {/* Les 3 piliers simples */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 max-w-3xl mx-auto text-left">
          <div className="bg-white p-6 rounded-2xl border border-chocolate/5 shadow-warm-sm">
            <div className="w-9 h-9 rounded-xl bg-accent/10 text-accent flex items-center justify-center mb-3">
              <Heart className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-chocolate text-base mb-1">Générosité</h4>
            <p className="text-xs text-muted leading-relaxed">
              Des portions gourmandes, des pépites à foison et aucun compromis sur le plaisir.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-chocolate/5 shadow-warm-sm">
            <div className="w-9 h-9 rounded-xl bg-caramel/10 text-caramel flex items-center justify-center mb-3">
              <Utensils className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-chocolate text-base mb-1">100% Artisanal</h4>
            <p className="text-xs text-muted leading-relaxed">
              Façonné à la main, pas d'arômes artificiels, pas de conservateurs.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-chocolate/5 shadow-warm-sm">
            <div className="w-9 h-9 rounded-xl bg-honey/20 text-[#8F5B00] flex items-center justify-center mb-3">
              <Sparkles className="w-5 h-5" />
            </div>
            <h4 className="font-serif font-bold text-chocolate text-base mb-1">Partage</h4>
            <p className="text-xs text-muted leading-relaxed">
              Pour accompagner vos goûters, anniversaires et doux moments du quotidien.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
