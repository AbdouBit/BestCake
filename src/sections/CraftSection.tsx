import React from 'react';
import { Flame, Clock, Award } from 'lucide-react';
import { BRAND_NAME } from '../config/config';

export const CraftSection: React.FC = () => {
  return (
    <section id="savoir-faire" className="py-20 md:py-28 bg-white border-y border-chocolate/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Photos Savoir-Faire / Textures */}
          <div className="lg:col-span-6 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-3xl overflow-hidden shadow-warm-md border border-chocolate/5 aspect-square bg-cream">
                  <img
                    src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&q=80"
                    alt="Chocolat fondant et miettes de cookie"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-warm-md border border-chocolate/5 aspect-[3/4] bg-cream">
                  <img
                    src="https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&w=600&q=80"
                    alt="Pistaches torréfiées et pâte pétrie à la main"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <div className="space-y-4 pt-8">
                <div className="rounded-3xl overflow-hidden shadow-warm-md border border-chocolate/5 aspect-[3/4] bg-cream">
                  <img
                    src="https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80"
                    alt="Gourmandise croustillante sortie du four"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden shadow-warm-md border border-chocolate/5 aspect-square bg-cream">
                  <img
                    src="https://images.unsplash.com/photo-1586985289688-ca3cf47d3e6e?auto=format&fit=crop&w=600&q=80"
                    alt="Muffin moelleux alvéolé"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Badge flottant central */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-chocolate text-white px-5 py-3 rounded-2xl shadow-warm-xl border-2 border-white flex items-center gap-3 whitespace-nowrap">
              <span className="text-2xl">✨</span>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-honey">Artisanat Pur</p>
                <p className="text-sm font-serif font-bold">Sans procédés industriels</p>
              </div>
            </div>
          </div>

          {/* Argumentaire Artisanal */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-accent mb-2 block">
                Notre Promesse
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-chocolate leading-tight">
                Le véritable goût du fait maison.
              </h2>
            </div>

            <p className="text-base text-muted leading-relaxed">
              Chez {BRAND_NAME}, nous ne cherchons ni les cadences industrielles ni les conservateurs. Chaque recette est travaillée en petits lots, avec le respect des temps de repos pour que les arômes se développent pleinement.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-2xl bg-accent/10 text-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-chocolate text-lg">Matières premières nobles</h4>
                  <p className="text-xs text-muted leading-relaxed mt-1">
                    Beurre doux AOP de baratte, farines françaises sélectionnées, chocolats de couverture grands crus et gousses de vanille bourbon entières.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-2xl bg-caramel/10 text-caramel flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Flame className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-chocolate text-lg">Cuisson millimétrée</h4>
                  <p className="text-xs text-muted leading-relaxed mt-1">
                    Pour les cookies : une texture mi-cuite au centre avec les bords délicatement croustillants. Pour les muffins : une alvéolation souple et fondante.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-2xl bg-honey/20 text-[#8F5B00] flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif font-bold text-chocolate text-lg">Ultra fraîcheur garantie</h4>
                  <p className="text-xs text-muted leading-relaxed mt-1">
                    Pas de congélation, pas de stockage prolongé. Les créations sont préparées sur commande pour vous garantir un maximum de croustillant et de parfum.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
